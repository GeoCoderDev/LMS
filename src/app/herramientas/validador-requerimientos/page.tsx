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
  const [requirement, setRequirement] = useState("");
  const [requirementType, setRequirementType] = useState<
    "Funcional" | "No Funcional"
  >("Funcional");
  const [validationResult, setValidationResult] =
    useState<ValidationResult | null>(null);

  const handleValidation = async () => {
    try {
      const response = await fetch(
        "https://requirements-validator.onrender.com/validate-requirement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08`,
          },
          body: JSON.stringify({
            requirement,
            is_functional: requirementType === "Funcional",
          }),
        }
      );

      // Verifica si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setValidationResult(data);
    } catch (error) {
      console.error("Error en la validación:", error);
    }
  };

  return (
    <>
      <Header className="fixed top-0 bg-white" />
      <div className="min-h-[90dvh] bg-gray-100 py-2 flex flex-col justify-center sm:py-12 overflow-hidden z-0">
        <div className="relative py-6 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-14">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 className="text-3xl font-extrabold text-center mb-6">
                    Validador de Requerimientos
                  </h1>

                  <div className="flex items-center space-x-4 mb-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="Funcional"
                        checked={requirementType === "Funcional"}
                        onChange={() => setRequirementType("Funcional")}
                        className="form-radio text-indigo-600"
                      />
                      <span className="ml-2">Funcional</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="No Funcional"
                        checked={requirementType === "No Funcional"}
                        onChange={() => setRequirementType("No Funcional")}
                        className="form-radio text-indigo-600"
                      />
                      <span className="ml-2">No Funcional</span>
                    </label>
                  </div>

                  <textarea
                    placeholder="Ingrese su requerimiento"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                    rows={4}
                  />

                  <div className="text-center">
                    <button
                      onClick={handleValidation}
                      className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                    >
                      Validar Requerimiento
                    </button>
                  </div>
                </div>

                {validationResult && (
                  <div className="pt-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div
                      className={`p-4 rounded-md ${
                        validationResult.is_valid
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      <h2 className="text-xl font-bold mb-2">
                        {validationResult.is_valid
                          ? "✅ Requerimiento Válido"
                          : "❌ Requerimiento Requiere Mejoras"}
                      </h2>

                      {validationResult.errors.length > 0 && (
                        <div>
                          <h3 className="font-semibold mt-2">
                            Errores Detectados:
                          </h3>
                          {validationResult.errors.map((error, index) => (
                            <div
                              key={index}
                              className="bg-red-200 p-2 rounded-md my-2"
                            >
                              <p>
                                <strong>{error.type}</strong>
                              </p>
                              <p>{error.description}</p>
                              <p>
                                <em>Sugerencia: {error.suggestion}</em>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {validationResult.suggestions.length > 0 && (
                        <div>
                          <h3 className="font-semibold mt-2">
                            Sugerencias de Mejora:
                          </h3>
                          {validationResult.suggestions.map(
                            (suggestion, index) => (
                              <div
                                key={index}
                                className="bg-yellow-100 p-2 rounded-md my-2"
                              >
                                <p>
                                  <strong>{suggestion.type}</strong>
                                </p>
                                <p>{suggestion.description}</p>
                                <p>
                                  <em>
                                    Recomendación: {suggestion.recommendation}
                                  </em>
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequirementsValidatorInterface;
