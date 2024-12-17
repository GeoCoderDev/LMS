"use client";

import React from "react";
import Header from "@/components/Header";
import FlechaDiagonal from "@/components/icons/FlechaDiagonal";

const Contacto = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    apellidos: "",
    correo: "",
    numero: "",
    mensaje: "",
  });

  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null;
    message?: string;
  }>({ type: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "numero" && value && !/^\d+$/.test(value)) {
      setStatus({
        type: "error",
        message: "El número de teléfono debe contener solo dígitos.",
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
    setStatus({ type: null });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.apellidos ||
      !formData.correo ||
      !formData.mensaje ||
      !formData.numero
    ) {
      setStatus({
        type: "error",
        message: "Todos los campos obligatorios deben completarse.",
      });
      return;
    }

    const dataToSend = {
      ...formData,
      numero: formData.numero || null,
    };

    try {
      const response = await fetch("/api/consultas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Mensaje enviado correctamente.",
        });
        setFormData({
          nombre: "",
          apellidos: "",
          correo: "",
          numero: "",
          mensaje: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Hubo un error al enviar el mensaje.",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus({
        type: "error",
        message:
          "Ocurrió un error al procesar el formulario. Inténtalo de nuevo más tarde.",
      });
    }
  };

  return (
    <>
      <Header className="" />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">CONTÁCTANOS</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Columna izquierda */}
          <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
            <div>
              <p className="text-center md:text-[30px] text-[20px]">
                Si deseas consultar mayor información sobre nosotros o tienes
                alguna duda, no dudes en solicitar una ayuda gratuita y uno de
                nuestros asesores te contactará a la brevedad
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-5">
              {/* Tarjeta 1 */}
              <div className="bg-gray-100 p-6 overflow-hidden rounded-[1rem] h-full shadow-[0px_0px_8px_2px_#2daf33] flex flex-col items-center justify-center text-center flex-1">
                <p className="font-semibold">Contáctanos vía Whatsapp</p>
                <a
                  href="https://w.app/S2B1FT"
                  target="_blank"  // Abre el enlace en una nueva pestaña
                  rel="noopener noreferrer" // Seguridad adicional
                  className="flex items-center justify-center gap-2 text-white p-2 px-2 rounded-[0.5rem] font-semibold text-[0.8rem] mt-2"
                  style={{ backgroundImage: "linear-gradient(0deg, #2daf33 0%, #a9d445 100%)" }}
                >
                  Whatsapp
                  <FlechaDiagonal color="white" className="w-[0.8rem]" />
                </a>
              </div>


              {/* Tarjeta 2 */}
              <div className="bg-gray-100 p-6 overflow-hidden rounded-[1rem] h-full shadow-[0px_0px_8px_2px_#D35400] flex flex-col items-center justify-center text-center flex-1">
                <p className="font-semibold">Contáctanos vía correo</p>
                <a
                  href="mailto:pierodanielllanossanchez@gmail.com?subject=Consulta&body=Hola,%0D%0A%0D%0AQuisiera obtener más información sobre el servicio. Quedo atento a su respuesta.%0D%0A%0D%0ASaludos."
                  className="flex items-center justify-center gap-2 text-white p-2 px-2 rounded-[0.5rem] font-semibold text-[0.8rem] mt-2"
                  style={{ backgroundImage: "linear-gradient(0deg, #D35400 0%, #F39C12 100%)" }}
                >
                  Gmail
                  <FlechaDiagonal color="white" className="w-[0.8rem]" />
                </a>
              </div>

            </div>
          </div>

          {/* Columna derecha */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 space-y-4 bg-gray-100 p-6 overflow-hidden rounded-[1rem] h-full shadow-[0px_0px_8px_2px_#00000080]"
          >
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-1 rounded-[1rem] border-black border-2"
                required
              />
            </div>

            <div>
              <label htmlFor="apellidos" className="block text-sm font-medium">
                Apellidos
              </label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-1 rounded-[1rem] border-black border-2"
                required
              />
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-1 rounded-[1rem] border-black border-2"
                required
              />
            </div>

            <div>
              <label htmlFor="numero" className="block text-sm font-medium">
                Número de Teléfono
              </label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-1 rounded-[1rem] border-black border-2"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full mt-2 px-2 py-1 rounded-[1rem] border-black border-2"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              id="four"
              type="submit"
              style={{ transitionDuration: "100ms" }}
              className="relative text-black border-2 border-black transition-all p-2 rounded-md text-m md:text-m font-semibold"
            >
              Enviar
            </button>

            {status.type === "success" && (
              <p className="text-green-500 mt-2">{status.message}</p>
            )}
            {status.type === "error" && (
              <p className="text-red-500 mt-2">{status.message}</p>
            )}
          </form>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        #four::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 0%;
          background-color: black;
          top: 0;
          right: 0;
          transition: 0.4s;
          z-index: -1;
        }
        
        #four::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 0%;
          background-color: black;
          bottom: 0;
          left: 0;
          transition: 0.4s;
          z-index: -1;
        }
        
        #four:hover {
          color: #fff;
        }
        
        #four:hover::after,
        #four:hover::before {
          width: 100%;
          height: 100%;
        }
      `,
        }}
      />
    </>
  );
};

export default Contacto;
