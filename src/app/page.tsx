"use client";
import Mando from "@/components/icons/Mando";
import { Link } from "next-view-transitions";

export default function Home() {
  const abrirMenuPrincipal = () => {};

  return (
    <>
      <header className="sticky h-[10dvh] max-h-[100px] border-b-[1px] border-black w-screen z-[4] flex justify-center gap-10 items-center ">
        <Link href={"/"}>
          <span className="text-[1rem] lg:text-[1.1rem] cursor-pointer">
            Inicio
          </span>
        </Link>
        <Link href={"/modulos"}>
          <span
            id="h"
            style={{ viewTransitionName: "p" }}
            className="text-[1rem] lg:text-[1.1rem] cursor-pointer"
          >
            Modulos
          </span>
        </Link>
        <Link href={"/acerca_de"}>
          <span className="text-[1rem] lg:text-[1.1rem] cursor-pointer">
            Acerca de
          </span>
        </Link>
        <Link href={"/contacto"}>
          <span className="text-[1rem] lg:text-[1.1rem] cursor-pointer">
            Contacto
          </span>
        </Link>
      </header>
      <div className="flex flex-col w-screen h-[90dvh] items-center justify-center gap-[8vh]">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="px-[10vw]">
            <h1 className=" text-center text-[2.3rem] md:text-[4rem]">
              Ingeniería de Software
            </h1>
            <p className="mt-2 text-[1.1rem] text-center text-[#6B7280] max-w-[80vw] lg:max-w-[50vw]">
              Una guía completa sobre los principios, modelos y buenas prácticas
              de desarrollo de software, dominando los fundamentos con quizzes
              interactivos.
            </p>
          </div>

          <Link href={"/modulos"}>
            <button
              onClick={() => {
                abrirMenuPrincipal();
              }}
              id="four"
              style={{ transitionDuration: "100ms" }}
              className="relative  text-black border-2 border-black transition-all p-4 rounded-[0.5rem] text-[1rem] md:text-[1.2rem] font-semibold"
            >
              Comienza Ahora
            </button>
          </Link>
        </div>

        <Mando className="aspect-auto w-[16rem] md:w-[18rem]  lg:w-[20vw] animate__animated animate__rubberBand animate__infinite animate__delay-5s" />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        #four::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 0%;
          background-color: black;
          top: 0;
          right: 0;
          transition: 0.4s;
          z-index: -1;
        }
        
        #four::before {
          content: '';
          position: absolute;
          width: 0%;
          height: 0%;
          background-color: black;
          bottom: 0;
          left: 0;
          transition: 0.4s;
          z-index: -1;
        }
        
        #four:hover {
          color: #fff;
        }
        
        #four:hover::after,
        #four:hover::before {
          width: 100%;
          height: 100%;
        }
      `,
        }}
      />
    </>
  );
}
