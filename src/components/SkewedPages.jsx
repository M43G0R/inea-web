"use client";

import React, { useState, useEffect } from "react";
import "./SkewedPages.scss"; // Importar el archivo SCSS

const SkewedPages = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allowScroll, setAllowScroll] = useState(false);
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
  ]; // Array de colores

  // Manejar el control de scroll del body
  useEffect(() => {
    document.body.style.overflow = allowScroll ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [allowScroll]);

  // Funciones para navegar entre las páginas
  const navigateUp = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : datos.length));
    setAllowScroll(false); // Reiniciar scroll al cambiar de página
  };

  const navigateDown = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage < datos.length ? prevPage + 1 : prevPage;
      if (nextPage === datos.length) {
        setAllowScroll(true); // Permitir scroll al final
      }
      return nextPage;
    });
  };

  // Detectar scroll del mouse para cambiar de página
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        navigateDown();
      } else {
        navigateUp();
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Detectar teclas de flecha para cambiar de página
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowDown") {
        navigateDown();
      } else if (e.key === "ArrowUp") {
        navigateUp();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="skw-pages sticky container mx-auto flex h-full bg-[#ffff]">
      {datos.map((pageData, index) => (
        <div
          key={index}
          className={`skw-page skw-page-${index + 1} ${
            currentPage === index + 1 ? "active" : "inactive"
          } sticky flex flex-col md:flex-row`} // Para pantallas md, usa flex-row
        >
          {/* Flechas en la esquina superior izquierda */}
          <div className="flechas">
            <svg
              onClick={navigateUp} // Disminuir el índice en 1
              className={`h-8 w-8 ${
                currentPage % 2 === 0 ? "text-[#404041]" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </svg>
            <svg
              onClick={navigateDown} // Aumentar el índice en 1
              className={`h-8 w-8 ${
                currentPage % 2 === 0 ? "text-[#404041]" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
          </div>

          {/* Lado izquierdo */}
          <div className="skw-page__half skw-page__half--left w-full">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h1 className="skw-page__heading">{pageData.title}</h1>
                <p className="skw-page__description">{pageData.nom}</p>
                <p className="skw-page__description">
                  Teléfono: {pageData.tel}
                </p>
                <p className="skw-page__description">Email: {pageData.email}</p>
                <br />
                <p className="skw-page__description">{pageData.map}</p>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="skw-page__half skw-page__half--right w-full">
            <div className="overflow-hidden absolute top-0 w-full h-[100%] bg-black z-10">
              <div className="skw-page__content">
                {pageData.items.map((item, idx) => (
                  <div key={idx}>
                    <svg
                      className={`h-8 w-8 ${colors[idx % colors.length]}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <h3 className="mb-4 uppercase text-2xl text-center">
                      {item.alcaldia}
                    </h3>
                    <p>Direccion: {item.dir}</p>
                    <p>Tel: {item.atel}</p>
                    <p>{item.aemail}</p>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkewedPages;
