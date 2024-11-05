import React from "react";

const DownloadFileButton = ({ fileURL, buttonText, Icon }) => {
  return (
    <a
      title={`Descargar ${buttonText}`}
      href={fileURL}
      download
      target="_blank"
      className="max-w-[min(15rem,80%)] flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-[0.8rem] text-white font-medium py-3 px-3 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-600 gap-3"
    >
      {Icon} {/* Renderiza el icono pasado como prop */}
      <span className="line-clamp-2">{buttonText}</span> {/* Texto del botón */}
    </a>
  );
};

export default DownloadFileButton;
