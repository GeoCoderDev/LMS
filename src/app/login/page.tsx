'use client';

import React from 'react';
import { Link } from "next-view-transitions";
import Header from '@/components/Header';
import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation'
import { isRedirectError } from 'next/dist/client/components/redirect';


const prisma = new PrismaClient();

const login = () => {
  
  try {
 

    // Devolver a todos los usuarios
    /*  const usuarios = await prisma.consultas.findMany({
        where: { correo: "andy@gmail.com", numero: "956337419"}
      });
      console.log(usuarios[0].nombre);*/

    const [formData, setFormData] = React.useState({
      usuario: '',
      contrasenia: ''
    });


    const [status, setStatus] = React.useState<{
      type: 'success' | 'error' | null;
      message?: string;
    }>({ type: null });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
      setStatus({ type: null }); // Limpiar mensajes de error
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const dataToSend = {
        ...formData,
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
          alert('Bienvenido al sistema');
          // redirect("modulos");

          setStatus({ type: 'success', message: 'Mensaje enviado correctamente.' });
          setFormData({ usuario: '', contrasenia: '' });
        } else {
          alert(result.error);
          setStatus({
            type: 'error',
            message: result.error || 'Hubo un error en el usuario o contraseña.',
          });
        }
      } catch (error) {
        // if (isRedirectError(error)) {
        //   throw error;
        // }
        console.error('Error al enviar el formulario:', error);
        setStatus({
          type: 'error',
          message: 'Ocurrió un error al procesar el formulario. Inténtalo de nuevo más tarde.',
        });
      }

    };





    //******************************************************************** */
    return (
      <>
        <Header />

        <div className="container mx-auto mt-8 py-12 border border-solid border-gray-500 w-4/12 rounded">
          <h1 className="text-3xl font-bold text-center mb-6">LOGIN</h1>
          <div className='flex flex-col items-center'><p>Por favor, inicia sesión para continuar</p></div>

          {/* <p>Por favor, inicia sesión para continuar</p> */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className='py-5'>
              <label htmlFor="usuario" className="block text-lg">Usuario</label>
              <input type="text" id="usuario" name="usuario" className="border rounded w-full px-2 py-1 h-10"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>

            <div className='py-5'>
              <label htmlFor="contrasenia" className="block text-lg">Contraseña</label>
              <input type="password" id="contrasenia" name="contrasenia" className="border rounded w-full px-2 py-1 h-10"
                value={formData.contrasenia}
                onChange={handleChange}
                required />
            </div>
            {/* <Link href={"/login/graficos"}> */}
            <div className='flex flex-col justify-center  items-center'>
              <button

                id="five"
                style={{ transitionDuration: "100ms" }}
                type="submit" className="relative  text-black border-2 border-black transition-all p-4 rounded-[0.5rem] text-[1rem] md:text-[1.2rem] font-semibold w-4/12">Iniciar sesión
              </button>
            </div>
            {/* </Link> */}
          </form>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        #five::after {
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
        
        #five::before {
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
        
        #five:hover {
          color: #fff;
        }
        
        #five:hover::after,
        #five:hover::before {
          width: 100%;
          height: 100%;
        }
      `,
          }}
        />
      </>
    );
  } catch (error) {
    console.log('error')
  }
};


export default login;


