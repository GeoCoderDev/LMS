"use client";
import React, { useState } from "react";

import {
  Calendar,
  ExternalLink,
  ImageIcon,
  LinkIcon,
} from "lucide-react";
import { useUrlMetadata } from "@/lib/hooks/useUrlMetadata";

import Loader from "./Loader";
import { Badge } from "../ui/badge";

interface URLMetadataViewerProps {
  url: string;
}

const URLMetadataViewer: React.FC<URLMetadataViewerProps> = ({ url }) => {
  const { metadata, loading, error } = useUrlMetadata(url);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="max-w-[90%] bg-white shadow-[0_0_6px_3px_#00000020] p-4 rounded-[1rem] flex items-center justify-center flex-col">
        {loading && <Loader className="w-[2rem]" color="#197dff" />}

        {metadata && (
          <>
            <div className="flex gap-3 items-center justify-center flex-wrap ">
              {metadata.image && !imageError ? (
                <div className="relative w-[3.5rem] h-min bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={metadata.image}
                    alt={metadata.title || "Preview"}
                    className="object-cover -border-2"
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <ImageIcon className="w-12 h-8 text-gray-400" />
                </div>
              )}

              <h4 className="text-gray-800 flex-1 text-center text-[0.9rem]">
                {metadata.title}
              </h4>
              <a
                href={metadata.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {metadata.keywords && metadata.keywords.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">                  
                  Palabras Clave
                </h3>
                <div className="flex flex-wrap gap-2">
                  {metadata.keywords.map((keyword, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {metadata.description && (
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Descripción
                </h3>
                <p
                  className="text-gray-600 line-clamp-2 max-w-[20rem]"
                  title={metadata.description}
                >
                  {metadata.description}
                </p>
              </div>
            )}

            {metadata.publishedTime && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                Publicado:{" "}
                {new Date(metadata.publishedTime).toLocaleDateString()}
              </div>
            )}
          </>
        )}

        {!loading && error && <p>Error al cargar el recurso externo</p>}
      </div>
    </>
  );
};

export default URLMetadataViewer;
