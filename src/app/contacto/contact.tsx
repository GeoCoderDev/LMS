'use client'

import FlechaDiagonal from "@/components/icons/FlechaDiagonal";

const Contact = () => {
    return (
        <>
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
                        target="_blank"
                        rel="noopener noreferrer"
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

            </div></>
    );
}

export default Contact;