"use client";
import React, { useState } from "react";
import { Link } from "next-view-transitions";
import { RiAlignJustify, RiCloseLine } from "react-icons/ri";

const Header = ({ className }: { className?: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 w-full bg-white z-10 shadow-md sticky h-[10dvh] max-h-[100px] max-w-screen z-[4] flex justify-between items-center px-4 lg:justify-center lg:gap-10 ${className}`}
    >
      {/* Menú hamburguesa - Botón derecho */}
      <button
        className="text-3xl lg:hidden ml-auto"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
      >
        <RiAlignJustify />
      </button>

      {/* Menú lateral hamburguesa */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-full z-50 flex lg:hidden">
          <div
            className="w-[30%] h-full bg-black opacity-60"
            onClick={() => setMenuOpen(false)}
          >
            <button
              className="absolute top-4 left-4 text-3xl text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <RiCloseLine />
            </button>
          </div>

          <nav className="w-[70%] h-full bg-white shadow-lg flex flex-col items-start gap-6 p-6">
            <Link href={"/"} onClick={() => setMenuOpen(false)}>
              <span className="text-[1rem] cursor-pointer">Inicio</span>
            </Link>
            <Link href={"/modulos"} onClick={() => setMenuOpen(false)}>
              <span className="text-[1rem] cursor-pointer">Modulos</span>
            </Link>
            <Link href={"/acerca_de"} onClick={() => setMenuOpen(false)}>
              <span className="text-[1rem] cursor-pointer">Acerca de</span>
            </Link>
            <Link href={"/contacto"} onClick={() => setMenuOpen(false)}>
              <span className="text-[1rem] cursor-pointer">Contacto</span>
            </Link>
            <Link
              href={"/herramientas/validador-requerimientos"}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-[1rem] cursor-pointer">Herramientas</span>
            </Link>
            
            <Link href={"/estimador-costos"} onClick={() => setMenuOpen(false)}>
              <span className="text-[1rem] cursor-pointer">Estimador de costos</span>
            </Link>
          </nav>
        </div>
      )}

      {/* Menú en desktop */}
      <nav className="hidden lg:flex gap-10">
        <Link href={"/"}>
          <span
            style={{ viewTransitionName: "titulo-inicio" }}
            className="text-[1rem] lg:text-[1.1rem] cursor-pointer"
          >
            Inicio
          </span>
        </Link>
        <Link href={"/modulos"}>
          <span
            style={{ viewTransitionName: "titulo-modulos" }}
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
        <Link href={"/herramientas/validador-requerimientos"}>
          <span className="text-[1rem] lg:text-[1.1rem] cursor-pointer">
            Herramientas
          </span>
        </Link>
        <Link href={"/estimador-costos"}>
          <span className="text-[1rem] lg:text-[1.1rem] cursor-pointer">
            Estimador de costos
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
