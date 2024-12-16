'use client';

import React from 'react';
import Header from '@/components/Header';

const Contacto = () => {
  const [formData, setFormData] = React.useState({
    nombre: '',
    apellidos: '',
    correo: '',
    numero: '', // Mantener como string
    mensaje: '',
  });

  const [status, setStatus] = React.useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convertir el numero a número, si es necesario
    const dataToSend = {
      ...formData,
      numero: formData.numero ? parseInt(formData.numero, 10) : '', // Convierte a número si existe
    };

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', apellidos: '', correo: '', numero: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">CONTÁCTANOS</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
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
              className="border rounded w-full px-2 py-1"
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
              className="border rounded w-full px-2 py-1"
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
              className="border rounded w-full px-2 py-1"
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
              className="border rounded w-full px-2 py-1"
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
              className="border rounded w-full px-2 py-1"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Enviar
          </button>

          {status === 'success' && <p className="text-green-500">Mensaje enviado correctamente.</p>}
          {status === 'error' && <p className="text-red-500">Hubo un error al enviar el mensaje.</p>}
        </form>
      </div>
    </>
  );
};

export default Contacto;
