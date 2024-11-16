import PageInformation from "@/components/shared/PageInformation";

const page = () => {
  return (
    <PageInformation
      contentToRead={
        <>
          <article className="-py-8 -px-4 bg-white -text-gray-800">
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Concepto de Calidad en el Software
            </h2>

            <section className="mb-6">
              <p className="text-justify text-black mb-4">
                La calidad en software se define como la capacidad de un
                producto de cumplir con las expectativas y necesidades del
                usuario final, además de los requisitos técnicos y de negocio.
                Factores como la <strong>funcionalidad</strong>,{" "}
                <strong>confiabilidad</strong> y{" "}
                <strong>facilidad de uso</strong> influyen en la percepción de
                calidad de un software. Asimismo, atributos esenciales como la{" "}
                <strong>eficiencia</strong>, <strong>seguridad</strong> y{" "}
                <strong>mantenibilidad</strong> son cruciales para garantizar
                que el software no solo sea operativo, sino también fiable y
                adaptable a lo largo del tiempo.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Definición de Calidad en Software
              </h3>
              <p className="text-justify text-black mb-4">
                En términos generales, la calidad en el software se refiere a la
                capacidad del producto para satisfacer los objetivos para los
                cuales fue diseñado. Esto implica no solo el cumplimiento de los
                requerimientos funcionales, sino también de los no funcionales,
                como la usabilidad, la eficiencia y la seguridad.
                <img
                  src="/images/png/modulo1/seccion2/calidad-de-software.png"
                  alt="Figura calidad-de-software"
                  className=" object-contain h-[30rem] w-full my-4"
                />
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Factores que Influyen en la Calidad del Software
              </h3>
              <p className="text-justify text-black mb-4">
                La calidad en el software es afectada por múltiples factores,
                entre los cuales se encuentran la metodología de desarrollo
                empleada, el nivel de experiencia del equipo de desarrollo, las
                herramientas utilizadas, y la claridad en los requerimientos
                iniciales. Cada uno de estos elementos contribuye de manera
                significativa a garantizar que el producto final cumpla con las
                expectativas de los usuarios.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Criterios y Atributos Esenciales de Calidad
              </h3>
              <p className="text-justify text-black mb-4">
                Entre los criterios esenciales de calidad en software destacan
                la <strong>fiabilidad</strong>, que mide la capacidad del
                sistema para operar de manera consistente bajo diversas
                condiciones; la <strong>eficiencia</strong>, que evalúa el
                desempeño del sistema en términos de tiempo y recursos; y la{" "}
                <strong>mantenibilidad</strong>, que asegura la facilidad de
                actualizar o modificar el software para cumplir nuevas
                necesidades o corregir defectos. Además, la{" "}
                <strong>usabilidad</strong> y la <strong>seguridad</strong> son
                fundamentales para garantizar una experiencia de usuario
                positiva y proteger los datos y la integridad del sistema.
              </p>
            </section>
          </article>
        </>
      }
      resources={<></>}
    />
  );
};

export default page;
