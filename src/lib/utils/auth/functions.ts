import bcrypt from "bcryptjs";
import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

// Encriptar la contraseña
export async function encryptPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10); // Sal para hacer el hash más seguro
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Comparar la contraseña ingresada con la almacenada
export async function comparePassword(
  enteredPassword: string,
  storedPassword: string
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, storedPassword);
}

// Generar el token JWT
export function generateToken(userId: string): string {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "1h", // Puedes ajustar el tiempo de expiración
  });
  return token;
}

// Verificar el token JWT
export function verifyToken(token: string): string | jwt.JwtPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
}
