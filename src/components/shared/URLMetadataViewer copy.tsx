"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Image as ImageIcon,
  Link as LinkIcon,
  Hash,
  Calendar,
  Loader2,
} from "lucide-react";
import { useUrlMetadata } from "@/lib/hooks/useUrlMetadata";

interface URLMetadataViewerProps {
  url: string;
}

const URLMetadataViewer: React.FC<URLMetadataViewerProps> = ({ url }) => {
  const { metadata, loading, error } = useUrlMetadata(url);
  const [imageError, setImageError] = useState(false);

  if (loading) {
    return (
      <Card className="w-full max-w-4xl bg-white shadow-lg">
        <CardContent className="flex items-center justify-center p-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-4xl bg-white shadow-lg">
        <CardContent className="p-6">
          <p className="text-red-500">Error al cargar los metadatos: {error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!metadata) {
    return null;
  }

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-gray-800">
            {metadata.title}
          </CardTitle>
          <a
            href={metadata.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        {metadata.author && (
          <CardDescription className="text-gray-600">
            <span className="flex items-center gap-2 text-sm">
              Por: {metadata.author}
            </span>
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {metadata.image && !imageError && (
          <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <img
              src={metadata.image}
              alt={metadata.title || "Preview"}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {metadata.description && (
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <LinkIcon className="w-4 h-4" />
              Descripción
            </h3>
            <p className="text-gray-600">{metadata.description}</p>
          </div>
        )}

        {metadata.publishedTime && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            Publicado: {new Date(metadata.publishedTime).toLocaleDateString()}
          </div>
        )}

        {metadata.keywords && metadata.keywords.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Hash className="w-4 h-4" />
              Keywords
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
      </CardContent>
    </Card>
  );
};

export default URLMetadataViewer;
