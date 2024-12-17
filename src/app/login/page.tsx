<<<<<<< HEAD
'use client';

import React from 'react';
import { Link } from "next-view-transitions";
import Header from '@/components/Header';

const login = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-8 py-12 border border-solid border-gray-500 w-4/12 rounded">
                <h1 className="text-3xl font-bold text-center mb-6">LOGIN</h1>
                <div className='flex flex-col items-center'><p>Por favor, inicia sesión para continuar</p></div>

                {/* <p>Por favor, inicia sesión para continuar</p> */}
                <form action="" className="space-y-4 max-w-md mx-auto">
                    <div className='py-5'>
                        <label htmlFor="usuario" className="block text-lg">Usuario</label>
                        <input type="text" id="usuario" name="usuario" className="border rounded w-full px-2 py-1 h-10" required />
                    </div>
                    <div className='py-5'>
                        <label htmlFor="contrasenia" className="block text-lg">Contraseña</label>
                        <input type="password" id="contrasenia" name="contrasenia" className="border rounded w-full px-2 py-1 h-10" required />
                    </div>
                    <div className='flex flex-col justify-center  items-center'>
                        <button
                            id="five"
                            style={{ transitionDuration: "100ms" }}
                            type="submit" className="relative  text-black border-2 border-black transition-all p-4 rounded-[0.5rem] text-[1rem] md:text-[1.2rem] font-semibold w-4/12">Iniciar sesión
                        </button>
                    </div>
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
};


export default login;
=======
import React from "react";

const LoginPage = () => {
  return <div>LoginPage</div>;
};

export default LoginPage;
>>>>>>> 1d06a4322b962e92e51b97119f741f1cd17468f8
