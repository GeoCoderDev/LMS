"use client";

import React from "react";
import Header from "@/components/Header";
import Contact from "@/app/contacto/contact";
import ContactForm from "@/app/contacto/ContactForm";

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
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">CONTÁCTANOS</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Columna izquierda */}
          <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
            <Contact />
          </div>

          {/* Columna derecha */}
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            status={status}
          />
        </div>
      </div>
    </>
  );
};

export default Contacto;
