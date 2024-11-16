"use client";
import React, { FormEventHandler, MutableRefObject, useRef } from "react";
import Lupa from "./icons/Lupa";
import { buscarSubseccionesPorTitulo } from "@/lib/assets/ContenidoHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setSearcherResults } from "@/state/others/searcherResults";
import { RootState } from "@/store";
import SearchResult from "./shared/SearchResult";

const Buscador = () => {
  const dispatch = useDispatch();

  const inputSearchRef = useRef<HTMLInputElement>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    if (!inputSearchRef.current || !inputSearchRef.current.value.trim()) return;

    dispatch(
      setSearcherResults({
        value: buscarSubseccionesPorTitulo(inputSearchRef.current.value),
      })
    );
  };

  const handleChange = () => {
    console.log("Cambiando el valor del input");
  };

  const searcherResults = useSelector(
    (state: RootState) => state.others.searcherResults
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 z-[106]"
      id="formulario-busqueda"
    >
      <Lupa className="w-[1.4rem]" color="black" />
      <div className="relative">
        <input
          onChange={handleChange}
          ref={inputSearchRef as MutableRefObject<HTMLInputElement>}
          className="bg-white border-2 outline-1 border-black text-[0.8rem] rounded-[1rem] w-[min(40rem,70vw)] p-2 z-[10]"
          type="search"
          name=""
          id="buscador-global"
        />
        {searcherResults && (
          <div
            style={{ boxShadow: "0 0 4px 5px #00000030" }}
            id="searcher-results"
            className="bg-white w-full h-min flex flex-col gap-0 items-center justify-center absolute overflow-auto max-h-[min(50vh,20rem)] rounded-[1rem] divide-y-2 z-[0]"
          >
            {searcherResults.length > 0 ? (
              searcherResults.map((subSectionResult, index) => (
                <SearchResult key={index} subSectionResult={subSectionResult} />
              ))
            ) : (
              <span className="px-3 py-2 text-[0.8rem] max-w-[90%] text-nowrap overflow-hidden overflow-ellipsis">
                No se encontraron resultados
              </span>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default Buscador;
