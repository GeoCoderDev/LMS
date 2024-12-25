import React from "react";

interface ContactFormProps {
    formData: {
        nombre: string;
        apellidos: string;
        correo: string;
        numero: string;
        mensaje: string;
    };
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    status: {
        type: "success" | "error" | null;
        message?: string;
    };
}

const ContactForm: React.FC<ContactFormProps> = ({
    formData,
    handleChange,
    handleSubmit,
    status,
}) => {
    return (
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
    );
};

export default ContactForm;
