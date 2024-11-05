
import { useState, useEffect } from "react";
export interface URLMetadata {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  publishedTime?: string;
  keywords?: string[];
  author?: string;
}

interface UseUrlMetadataResult {
  metadata: URLMetadata | null;
  loading: boolean;
  error: string | null;
}

interface UseUrlMetadataResult {
  metadata: URLMetadata | null;
  loading: boolean;
  error: string | null;
}

export function useUrlMetadata(url: string): UseUrlMetadataResult {
  
  const [metadata, setMetadata] = useState<URLMetadata | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      if (!url) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/metadata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (!response.ok) {
          throw new Error("Error fetching metadata");
        }

        const data = await response.json();
        setMetadata(data);
      } catch (err) {
        setError(
          `Error al obtener los metadatos: ${
            err instanceof Error ? err.message : "Error desconocido"
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [url]);

  return { metadata, loading, error };
}
