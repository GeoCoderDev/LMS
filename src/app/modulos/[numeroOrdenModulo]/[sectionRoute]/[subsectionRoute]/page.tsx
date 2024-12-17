import PDFIcon from "@/components/icons/extensions/PDFIcon";
import DownloadFileButton from "@/components/shared/DownloadFileButton";
import PageInformation from "@/components/shared/PageInformation";
import URLMetadataViewer from "@/components/shared/URLMetadataViewer copy";
import transformClassNameToClass from "@/lib/helpers/functions/transformClassNameToClass";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const Subseccion = async ({
  params: { numeroOrdenModulo, sectionRoute, subsectionRoute },
}: {
  params: {
    numeroOrdenModulo: number;
    sectionRoute: string;
    subsectionRoute: string;
  };
}) => {
  const pathname = `/modulos/${numeroOrdenModulo}/${sectionRoute}/${subsectionRoute}`;

  // Buscar la subsección que empiece con la ruta construida
  const subseccion = await prisma.subseccion.findFirst({
    where: {
      ruta: {
        startsWith: pathname, // Buscar subsecciones cuya ruta empiece con el pathname
      },
    },
  });

  return (
    <PageInformation
      contentToRead={
        <>
          <article
            dangerouslySetInnerHTML={{
              __html: transformClassNameToClass(subseccion?.contenidoHtml),
            }}
          ></article>
        </>
      }
      resources={
        <>
          {subseccion?.recursosComplementarios.map(
            ({ tipo, titulo, url }, index) => {
              if (tipo === "PDF") {
                return (
                  <DownloadFileButton
                    key={index}
                    fileURL={url}
                    Icon={<PDFIcon className="w-[2rem]" color="#dcdcdc" />}
                    buttonText={titulo!}
                  />
                );
              } else if (tipo === "VideoYoutube") {
                return (
                  <iframe
                    key={index}
                    className="aspect-[560/315] w-[min(24rem,80%)] rounded-[1rem]"
                    src={url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen={true}
                    frameBorder={"0"}
                  ></iframe>
                );
              } else {
                return <URLMetadataViewer key={index} url={url} />;
              }
            }
          )}
        </>
      }
    />
  );
};

export default Subseccion;
