import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
  return (
    <PageInformation
      sectionTitle="Conceptos Fundamentales de la Verificación y Validación (V&V)"
      contentToRead={
        <>
          <article>
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 py-4">
              Definición de Verificación y Validación
            </h2>

            <p>
              <strong>Verificación:</strong> Es el proceso mediante el cual se
              asegura que el sistema o producto cumple con los requisitos
              especificados en la documentación de diseño. En la verificación,
              se verifica que el producto esté siendo construido correctamente y
              de acuerdo a especificaciones técnicas.
            </p>
            <br />
            <p>
              <strong>Validación:</strong> Este proceso se centra en asegurar
              que el sistema satisface las necesidades y expectativas del
              usuario final. La validación busca responder si el producto cumple
              su propósito en el contexto de uso real y si resuelve
              adecuadamente el problema planteado.
            </p>
            <br />
            <section>
              <h3 className="font-bold">Diferencias clave:</h3>
              <ul style={{ listStyleType: "disc" }} className=" pl-8 pt-4">
                <li className="mb-2">
                  La <strong>verificación</strong> se pregunta: “¿Estamos
                  construyendo el producto correctamente?” Se enfoca en el
                  cumplimiento de los requisitos técnicos y especificaciones.
                </li>
                <li className="mb-2">
                  La <strong>validación</strong> se pregunta: “¿Estamos
                  construyendo el producto correcto?” Se centra en la
                  satisfacción y necesidades del usuario final.
                </li>
                <li>
                  Ambas prácticas son fundamentales en el desarrollo de software
                  para garantizar que el producto final no solo sea técnicamente
                  correcto, sino también útil y adecuado para el usuario.
                </li>
              </ul>
            </section>
          </article>
        </>
      }
    />
  );
};

export default page;
