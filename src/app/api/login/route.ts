import { serialize } from "cookie";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { comparePassword, generateToken } from "@/lib/utils/auth/functions";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Leer el cuerpo de la solicitud y parsearlo
    const bodyString = await readStreamToString(req.body!);
    const jsonData = JSON.parse(bodyString);

    const { nombreUsuario, contraseña } = jsonData;

    // Verificar que se reciban los datos necesarios
    if (!nombreUsuario || !contraseña) {
      return new Response(
        JSON.stringify({
          message:
            "Faltan nombre de usuario o contraseña en el cuerpo de la solicitud",
        }),
        { status: 401 }
      );
    }

    // Buscar el administrador en la base de datos
    const administrador = await prisma.administrador.findUnique({
      where: {
        nombreUsuario,
      },
    });

    if (!administrador) {
      return new Response(
        JSON.stringify({ message: "Usuario no encontrado" }),
        { status: 404 }
      );
    }

    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    const isPasswordValid = await comparePassword(
      contraseña,
      administrador.contraseña
    );

    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: "Contraseña incorrecta" }),
        { status: 401 }
      );
    }

    // Generar el token JWT
    const token = generateToken(administrador.id);

    // Serializar la cookie con el JWT
    const tokenSerialize = serialize("myToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 horas
    });

    // Serializar la cookie con el rol (en este caso, "admin" de forma implícita)
    const roleSerialize = serialize("myRole", "admin", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 horas
    });

    // Establecer las cookies en la respuesta
    return new Response(null, {
      status: 201,
      headers: { "Set-Cookie": `${tokenSerialize}, ${roleSerialize}` },
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Error interno del servidor" }),
      { status: 500 }
    );
  }
}

// Para Next.js v13 y versiones superiores, usar el API TextDecoder
async function readStreamToString(stream: ReadableStream) {
  const decoder = new TextDecoder();
  let result = "";
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value);
  }
  reader.releaseLock();
  return result;
}
