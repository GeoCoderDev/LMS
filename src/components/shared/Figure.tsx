import React from "react";

const Figure = ({ href, className, caption }) => {
  return (
    <figure className={`w-full flex flex-col items-center my-4`}>
      <img
        src={href}
        alt={caption}
        className={`w-full object-contain mb-2 ${className}`}
      />
      <figcaption className="text-sm italic text-gray-600 text-center">
        {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
