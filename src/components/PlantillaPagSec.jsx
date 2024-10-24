"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CarouselEL from "@/components/CarouselEL";

function PagSec({ Enlaces, children }) {
  return (
    <div className="mt-[12.5vh]">
      <div className="mx-auto md:w-[1142px] grid grid-cols-1 md:grid-cols-12 gap-[1vh]">
        <br />
        {/* Breadcrumb */}
        <div className="col-span-1 md:col-span-12 ">
          <div className="mx-auto py-1 px-4 sm:px-6 md:px-8">
            <Breadcrumb />
          </div>
        </div>

        {/* Contenido principal*/}
        <div className="col-span-1 md:col-span-9 px-2">{children}</div>

        {/* Enlaces laterales  */}
        <div className="hidden md:block md:col-span-3">
          <div className="flex flex-col">
            {Enlaces.map((enlace) => (
              <Card
                key={enlace.title}
                title={enlace.title}
                imageSrc={enlace.imageSrc}
                buttonText={enlace.buttonText}
                link={enlace.link}
              />
            ))}
          </div>
        </div>

        {/* Carrusel de Cards (visible en pantallas pequeñas) */}
        <div className="md:hidden w-full ">
          <CarouselEL cards={Enlaces} />
        </div>
      </div>
    </div>
  );
}

export default PagSec;
