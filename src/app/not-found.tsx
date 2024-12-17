'use client';
import React from "react";
import Footer from "@/components/shared/Footer";
import Header from "@/components/Header";
import Mando from "@/components/icons/Mando";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-[80dvh]">
        <div className="text-4xl font-bold mb-4">404 - No se encontró el recurso</div>
        <div className="text-xl text-gray-600 mb-6">
          El mando parece estar desconectado. Intenta revisar el enlace.
        </div>
        <Mando className="aspect-auto w-[16rem] md:w-[18rem]  lg:w-[20vw] animate__animated animate__rubberBand animate__infinite animate__delay-5s" />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
