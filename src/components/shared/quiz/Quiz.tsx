"use client";
import React, { useRef, useState } from "react";
import QuizIcon from "./QuizIcon";
import Equis from "@/components/icons/Equis";
import { ArrowRight } from "lucide-react";
import CloseQuizModal from "./CloseQuizModal";
import { QuizData, Respuesta } from "@/lib/quiz/interfaces";
import { usePathname } from "next/navigation";
import { getRouteTitles } from "@/lib/assets/Contenido";

const durationAndDelayMS = 1000;

const Quiz = ({ quiz }: { quiz: QuizData }) => {
  const [viewCloseModal, setViewCloseModal] = useState(false);
  const [quizStart, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [puntajeActual, setPuntajeActual] = useState(0);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [preguntasAleatorias] = useState(() =>
    [...quiz.preguntas].sort(() => Math.random() - 0.5)
  );

  const totalQuestions = preguntasAleatorias.length;
  const presentationBlock = useRef<HTMLDivElement>(null);
  const questionBlock = useRef<HTMLDivElement>(null);

  const handleAnswerSelection = (respuesta: Respuesta) => {
    if (respuesta.esCorrecta) {
      setRespuestasCorrectas((prev) => prev + 1);
      setPuntajeActual((prev) => prev + quiz.puntosPorPregunta);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      handleNextQuestion();
    } else {
      // Si es la última pregunta, marcar el quiz como completado
      questionBlock.current!.classList.add("animate__bounceOut");
      setTimeout(() => {
        setQuizCompleted(true);
        questionBlock.current!.classList.remove("animate__bounceOut");
        questionBlock.current!.classList.add("animate__bounceIn");
      }, durationAndDelayMS);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      questionBlock.current!.classList.add("animate__bounceOut");
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        questionBlock.current!.classList.remove("animate__bounceOut");
        questionBlock.current!.classList.add("animate__bounceIn");
      }, durationAndDelayMS);
    }
  };

  const getCurrentQuestion = () => preguntasAleatorias[currentQuestionIndex];

  const path = usePathname();

  return (
    <div className="top-0 fixed w-screen h-[100dvh] min-h-[100dvh] max-h-[100dvh] bg-[#2B223E] overflow-auto z-[100] flex items-center justify-center">
      {viewCloseModal && (
        <CloseQuizModal setViewCloseModal={setViewCloseModal} />
      )}
      <div className="fixed left-0 top-0 w-full p-[1.3rem] flex justify-between items-center">
        <Equis
          onClick={() => setViewCloseModal(true)}
          className="w-[1.7rem] cursor-pointer"
          color="white"
        />
        {quizStart && (
          <>
            <span className="text-[#7A68FF] text-[1.2rem] text-center">
              IngSoft <span className="text-white">Quiz</span>
            </span>
            <div className="flex flex-col items-end">
              <span className="text-white font-semibold">
                {currentQuestionIndex + 1} / {totalQuestions}
              </span>
              <span className="text-[#7A68FF] text-sm">
                Puntaje: {puntajeActual}/{quiz.puntajeMaximo}
              </span>
            </div>
          </>
        )}
      </div>

      {quizStart && !quizCompleted && (
        <div
          ref={questionBlock}
          className="flex flex-col items-center justify-center animate__animated animate__bounceIn"
        >
          <h4 className="text-white text-[1.5rem] max-w-[80%] text-center">
            {getCurrentQuestion().pregunta}
          </h4>
          <ul className="mt-4 space-y-2">
            {getCurrentQuestion().respuestas.map((respuesta, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelection(respuesta)}
                className="text-white bg-[#3C2F4F] p-3 rounded cursor-pointer hover:bg-[#4B3B63] transition"
              >
                {respuesta.texto}
              </li>
            ))}
          </ul>
        </div>
      )}

      {quizCompleted && (
        <div className="animate__animated animate__bounceIn text-white text-center">
          <h3 className="text-xl mb-2">¡Quiz Completado!</h3>
          <p>
            Puntaje Final: {puntajeActual} de {quiz.puntajeMaximo}
          </p>
          <p>
            Respuestas Correctas: {respuestasCorrectas} de {totalQuestions}
          </p>
        </div>
      )}

      {!quizStart && (
        <div
          ref={presentationBlock}
          className="flex flex-col items-center justify-center gap-4 p-6"
        >
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <QuizIcon
              className={
                "w-[min(8rem,30vw)] -border-2 animate__animated animate__bounce "
              }
            />
            <span className="text-[#7A68FF] text-[min(5rem,12vw)] text-center w-max -border-2">
              IngSoft <span className="w-min text-white text-center">Quiz</span>
            </span>
          </div>
          <div className="text-[#cfcafe] max-w-[24rem] text-[1.2rem] text-center">
            {getRouteTitles(path).moduleTitle} |{" "}
            {getRouteTitles(path).sectionTitle}
          </div>
          <button
            onClick={() => {
              presentationBlock.current!.classList.add("animate__bounceOut");
              setTimeout(() => {
                setQuizStarted(true);
                presentationBlock.current!.style.display = "none";
              }, durationAndDelayMS);
            }}
            className="text-white border-2 border-white px-3 py-2 rounded flex items-center gap-2"
          >
            Comenzar <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;