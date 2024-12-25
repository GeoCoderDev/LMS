"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Login() {
  const router = useRouter();
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombreUsuario, contraseña }),
      });

      if (res.ok) {

        /***************************************************************************** */


  

        const response3 = await fetch('/api/modulo-seccion-cuestionario');
        const result3 = await response3.json();
        let sumaModulo = [0, 0, 0, 0];
        let idx: number = 0;

        if (response3.ok) {


          result3.forEach(function (item3) {
            idx = item3.Seccion.Modulo.numeroOrden;
            sumaModulo[idx - 1] += item3.puntajeObtenido;
          });

          let aCadena = sumaModulo.toString();


          //********************************************************************* */
          const response1 = await fetch('/api/seccion');
          const result1 = await response1.json();
    
    
          const response2 = await fetch('/api/resultados-cuestionario-2');
          const result2 = await response2.json();
    
          let sumSeccion = [];
          let contSeccion: number = 0;
          let cont: number = 0;
          let sumPuntaje: number = 0;
          let promedio: number = 0;
    
          if (response1.ok && response2.ok) {
            // console.log(result1);
    
            result1.forEach(function (item) {
              // contSeccion += 1;
              // seccionId.push("Sección " + contSeccion);
    
              cont = 0;
              sumPuntaje = 0;
              result2.forEach(function (item2) {
                if (item2.seccionId == item.id) {
                  cont += 1;
                  sumPuntaje += item2.puntajeObtenido;
                }
                // promedio = sumPuntaje / cont;
              });
              sumSeccion.push(sumPuntaje);
            });
          } else {
            alert(result1.error);
          }
    

          console.log('Suma de sección:', sumSeccion);

          let aCadena2 = sumSeccion.toString();
          // return router.push("/dashboard"); // Redirigir al dashboard u otra página

          return router.push(`/dashboard?data1=${aCadena}`+`&data2=${aCadena2}`+`&user=${nombreUsuario}`);
        }

        /***************************************************************************** */


        // return router.push("/dashboard"); // Redirigir al dashboard u otra página
      }
      throw new Error("No se realizo la peticion de manera correcta");
    } catch (error) {
      alert("Error de usuario y/o contraseña")
      console.log(error);
      setError("Error desconocido");
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[90dvh] bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Iniciar sesión
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombreUsuario" className="block text-gray-600">
                Nombre de usuario
              </label>
              <input
                id="nombreUsuario"
                type="text"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="contraseña" className="block text-gray-600">
                Contraseña
              </label>
              <input
                id="contraseña"
                type="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
