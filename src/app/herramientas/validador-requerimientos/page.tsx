"use client";

import Header from "@/components/Header";
import { useState } from "react";

interface ValidationResult {
  original_text: string;
  is_valid: boolean;
  errors: Array<{
    type: string;
    description: string;
    suggestion: string;
  }>;
  suggestions: Array<{
    type: string;
    description: string;
    recommendation: string;
  }>;
}

const RequirementsValidatorInterface = () => {
  // Estados para manejar el formulario y la validación
  const [requirement, setRequirement] = useState("");
  const [requirementType, setRequirementType] = useState<"Funcional" | "No Funcional">("Funcional");
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Función que maneja la validación del requerimiento
  const handleValidation = async () => {
    // Validación previa al envío del requerimiento
    if (requirement.trim().length < 10) {
      setError("El requerimiento debe tener al menos 10 caracteres.");
      return;
    }

    // Restablece los resultados previos y el estado de error
    setError(null);
    setValidationResult(null);
    setIsLoading(true);

    try {
      // Hacemos la solicitud al backend para validar el requerimiento
      const response = await fetch("https://requirements-validator.onrender.com/validate-requirement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08`,
        },
        body: JSON.stringify({
          requirement,
          is_functional: requirementType === "Funcional",
        }),
      });

      // Si la respuesta no es exitosa, lanzamos un error
      if (!response.ok) {
        throw new Error("Ocurrió un problema al validar el requerimiento.");
      }

      const data = await response.json();
      setValidationResult(data); // Guardamos los resultados de la validación
    } catch (error) {
      // Manejo de errores
      setError(error instanceof Error ? error.message : "Error inesperado.");
    } finally {
      setIsLoading(false); // Terminamos el proceso de carga
    }
  };

  // Función para limpiar el formulario y los resultados
  const clearForm = () => {
    setRequirement(""); // Resetea el campo de texto
    setValidationResult(null); // Limpia el resultado de la validación
    setError(null); // Elimina los posibles mensajes de error
  };

  return (
    <>
      {/* Header con clase fija para que permanezca en la parte superior */}
      <Header className="fixed top-0 w-full bg-white z-10 shadow-md" />

      {/* Contenedor principal con fondo y alineación centrada */}
      <div className="min-h-[90vh] bg-gray-100 py-6 flex items-center justify-center">
        {/* Contenedor de la tarjeta de formulario */}
        <div className="relative mx-4 sm:mx-auto w-full sm:max-w-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg sm:skew-y-0 sm:-rotate-6 rounded-lg"></div>
          <div className="relative bg-white shadow-lg rounded-lg p-6 sm:p-10">
            {/* Título principal */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 animate__animated animate__fadeIn">
              Validador de Requerimientos
            </h1>

            {/* Mostrar mensaje de error si existe */}
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 animate__animated animate__shakeX">
                {error}
              </div>
            )}

            {/* Radio buttons para seleccionar el tipo de requerimiento */}
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 mb-4">
              {["Funcional", "No Funcional"].map((type) => (
                <label key={type} className="flex items-center mb-2 sm:mb-0">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={requirementType === type}
                    onChange={() => setRequirementType(type as "Funcional" | "No Funcional")}
                    className="form-radio text-indigo-600 transition duration-200 transform hover:scale-105"
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>

            {/* Campo de texto para ingresar el requerimiento */}
            <textarea
              placeholder="El requerimiento debe tener al menos 10 caracteres."
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className={`w-full p-3 rounded-md border focus:outline-none transition duration-300 ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              rows={4}
              maxLength={500}
            />

            {/* Botones para validar y limpiar */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button
                onClick={handleValidation}
                disabled={isLoading || requirement.trim().length < 10}
                className={`w-full sm:w-auto bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 transform ${
                  isLoading || requirement.trim().length < 10 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                }`}
              >
                {isLoading ? "Validando..." : "Validar"}
              </button>
              <button
                onClick={clearForm}
                disabled={isLoading}
                className="w-full sm:w-auto bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
              >
                Limpiar
              </button>
            </div>

            {/* Mostrar resultados de la validación */}
            {validationResult && (
              <div className="mt-6 overflow-y-auto max-h-60">
                <div
                  className={`p-4 rounded-md ${
                    validationResult.is_valid ? "bg-green-100" : "bg-red-100"
                  } animate__animated animate__fadeIn`}
                >
                  <h2 className="text-lg font-bold mb-2">
                    {validationResult.is_valid ? "✅ Válido" : "❌ Requiere Mejoras"}
                  </h2>

                  {/* Errores detectados */}
                  {validationResult.errors.map((err, idx) => (
                    <div key={idx} className="bg-red-200 p-2 rounded-md my-2">
                      <p>
                        <strong>{err.type}</strong>: {err.description}
                      </p>
                      <p>
                        <em>Sugerencia: {err.suggestion}</em>
                      </p>
                    </div>
                  ))}

                  {/* Sugerencias de mejora */}
                  {validationResult.suggestions.map((suggestion, idx) => (
                    <div key={idx} className="bg-yellow-100 p-2 rounded-md my-2">
                      <p>
                        <strong>{suggestion.type}</strong>: {suggestion.description}
                      </p>
                      <p>
                        <em>Recomendación: {suggestion.recommendation}</em>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequirementsValidatorInterface;
