'use client';

import React from 'react';
import Header from '@/components/Header';

const Contacto = () => {
  const [formData, setFormData] = React.useState({
    nombre: '',
    apellidos: '',
    correo: '',
    numero: '', // Mantener como string para validación
    mensaje: '',
  });

  const [status, setStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message?: string;
  }>({ type: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Validar número de teléfono solo en el frontend (puedes ajustar la lógica)
    if (name === 'numero' && value && !/^\d+$/.test(value)) {
      setStatus({
        type: 'error',
        message: 'El número de teléfono debe contener solo dígitos.',
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
    setStatus({ type: null }); // Limpiar mensajes de error
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!formData.nombre || !formData.apellidos || !formData.correo || !formData.mensaje || !formData.numero) {
      setStatus({
        type: 'error',
        message: 'Todos los campos obligatorios deben completarse.',
      });
      return;
    }

    const dataToSend = {
      ...formData,
      // El número ya está como string, lo enviamos tal cual
      numero: formData.numero || null, // Si no hay número, enviamos null
    };

    try {
      const response = await fetch('/api/consultas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Mensaje enviado correctamente.' });
        setFormData({ nombre: '', apellidos: '', correo: '', numero: '', mensaje: '' });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Hubo un error al enviar el mensaje.',
        });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus({
        type: 'error',
        message: 'Ocurrió un error al procesar el formulario. Inténtalo de nuevo más tarde.',
      });
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
              Número de Teléfono (opcional)
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

          {status.type === 'success' && (
            <p className="text-green-500 mt-2">{status.message}</p>
          )}
          {status.type === 'error' && (
            <p className="text-red-500 mt-2">{status.message}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contacto;
