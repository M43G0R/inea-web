// "use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/EnlacesR_Lateral";
import CarouselEL from "@/components/CarouselEL";
import SkewedPages from "@/components/SkewedPages";
import SkewedPagesResponsive from "@/components/SkewedPagesResponsive";
import PagSec from "@/components/PlantillaPagSec";
// import "../../../../src/app/globals.css";
import "../../app/globals.css";
function Ubicacion() {
  // const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    {
      title: "Modalidad presencial",
      imageSrc: "/Modalidad/programa_regular2.webp",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/presencial",
    },
    {
      title: "Modalidad en linea",
      imageSrc: "/Modalidad/aprendeINEAenlinea2.webp",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/enlinea",
    },
    {
      title: "Examen único",
      imageSrc: "/Modalidad/Examenunico2.webp",
      buttonText: "Ir al sitio",
      link: "/oferta-educativa/examen-unico",
    },
  ];

  const pageData = [
    {
      title: "EULALIA GUZMÁN",
      nom: "Nicolas Mario Sánchez y FLores",
      tel: "56 2130 5489/ 55 4043 5310",
      email: "nmsanchez@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=122hM5GKsgDsm2hophXyiQkdE6I-kzgU&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "TLAHUAC",
          dir: "Hidalgo # 1, Col. Barrio San Juan, Alcaldía Tláhuac, CP 13060, CDMX",
          atel: "55 5842 1618",
          aemail: "cztlahuac@inea.gob.mx",
        },
        {
          alcaldia: "MILPA ALTA",
          dir: "Av. Chiapas # 2, Col. Barrio de Santa Martha, Alcaldía Milpa Alta, CP 12000,CDMX",
          atel: "55 5844 4886",
          aemail: "czmilpaalta@inea.gob.mX",
        },
      ],
    },
    {
      title: "ELENA GARRO",
      nom: "Mitzi Martínez Pérez",
      tel: " 55 25 20 46 76",
      email: "",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=19J4WWcFAKKUoKRAwA5MC_6Nl4y29PUo&ehbc=2E312F"
          className="  md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "TLÁLPAN",
          dir: "Periférico Sur # 5290, Col. Isidro Fabela, Alcaldía Tlalpan, CP 01403, CDMX ",
          atel: "55 56 66 17 50",
          aemail: "cztlalpan@inea.gob.mx",
        },
        {
          alcaldia: "CUAJIMALPA",
          dir: "Av. Luis Castillo Ledón # 17, Col. Cuajimalpa, Alcaldía Cuajimalpa, CP 05000, CDMX",
          atel: "55 58 12 35 91",
          aemail: "czcuajimalpa@inea.gob.mx",
        },
      ],
    },
    {
      title: "FERNANDO SOLANA MORALES",
      nom: "Paola Angélica Avalos Jiménez",
      tel: "55 76 06 72 05",
      email: "",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1ADndmYvW3k1K5kQU7_icHDSJWItFpMs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "COYOACÁN / XOCHIMILCO",
          dir: "Pedro Ramírez del Castillo S/N, Colonia Centro de Xochimilco, Alcaldía Xochimilco CP 16000, CDMX",
          atel: "55 56 76 66 60",
          aemail: "czxochimilco@inea.gob.mx",
        },
      ],
    },
    {
      title: "JUSTO SIERRA",
      nom: "Laura Merlos Sedeño",
      tel: "55 79 46 79 55",
      email: "lmerlos@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1KNGOzsp4CL4BUr69KA3UFsheA_jVG2E&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "ÁLVARO OBREGÓN NORTE",
          dir: "Santa Lucía S/N, Col. Molino de Santo Domingo, Alcaldía Álvaro Obregón, CP 01130, CDMX ",
          atel: "55 52 71 14 43 / 55 26 14 02 78",
          aemail: "czobregonn@inea.gob.mx",
        },
        {
          alcaldia: "ÁLVARO OBREGÓN SUR",
          dir: "Av. Barranca del Muerto # 482, Col. Los Alpes, Alcaldía Álvaro Obregón, CP 01010, CDMX ",
          atel: " 55 55 50 65 33",
          aemail: "czobregons@inea.gob.mx",
        },
        {
          alcaldia: "MAGDALENA CONTRERAS",
          dir: "Av. México # 985, Col. Héroes de Padierna,  Alcaldía Magdalena Contreras, CP 10700, CDMX",
          atel: "55 56 52 72 87",
          aemail: "czmcontreras@inea.gob.mx",
        },
      ],
    },
    {
      title: "ROSARIO CASTELLANOS",
      nom: "Miguel Rojas Merino",
      tel: "55 34 27 18 77 ",
      email: "mrojas@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1yJS8ylTeFs_h-AIe7K4RG4dLXXj5Wzo&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "GUSTAVO A. MADERO PONIENTE",
          dir: "Francisco Villa, Esq. Justo Sierra, Col. Zona Escolar, Alcaldía Gustavo A. Madero, CP 07230, CDMX",
          atel: "55 22 27 30 81",
          aemail: "czgamponiente@inea.gob.mx",
        },
        {
          alcaldia: "GUSTAVO A. MADERO ORIENTE",
          dir: "Av. 5 de Febrero, Esq. Vicente Villada (dentro del edificio de la Alcaldía), Col. Aragón Villa, Alcaldía Gustavo A. Madero, CP 07050, CDMX",
          atel: "55 57 81 06 34",
          aemail: "czgamoriente@inea.gob.mx",
        },
      ],
    },
    {
      title: "SOR JUANA INES DE LA CRUZ",
      nom: "Wiliber Sánchez Sánchez",
      tel: "55 24 18 63 42",
      email: "wsanchez@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1jYl_g2AOqdFwlTY8BqtN3JrPofhRaZc&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),

      items: [
        {
          alcaldia: "BENITO JUÁREZ",
          dir: "Extremadura # 26, Col. Insurgentes Mixcoac, Alcaldía Benito Juárez, CP 03920, CDMX",
          atel: "55 56 11 51 01",
          aemail: "czbjuarez@inea.gob.mx ",
        },
        {
          alcaldia: "IZTACALCO",
          dir: "Coyuya # 10, Esq. Viaducto, Col. La Cruz, Alcaldía Iztacalco, CP 08310, CDMX",
          atel: "56 50 26 45 / 56 50 26 35 ",
          aemail: "cziztacalco@inea.gob.mx",
        },
        {
          alcaldia: "VENUSTIANO CARRANZA",
          dir: "Bacum, Esq. Río Bárcenas (a espaldas del Mercado Álvaro Obregón), Col. Magdalena Mixhuca, Alcaldía Venustiano Carranza, CP 15850, CDMX",
          atel: "55 55 52 41 75",
          aemail: "czvcarranza@inea.gob.mx",
        },
      ],
    },
    {
      title: "JOSE VASCONCELOS",
      nom: "Rosa Isela Benitez Valle ",
      tel: "56 21 30 54 89",
      email: "",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1m7JWJM7KiLjTibY591u_2iTi0T01mTs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "AZCAPOTZALCO",
          dir: "Calle 22 # 17, Col. Pro-Hogar, Alcaldía Azcapotzalco, CP 02600, CDMX.",
          atel: "55 53 56 30 38/55 53 68 19 13",
          aemail: "czazcapotzalco@inea.gob.mx",
        },
        {
          alcaldia: "CUAUHTÉMOC",
          dir: "Mosqueta # 154, Col. Guerrero, Alcaldía Cuauhtémoc, CP 06300, CDMX",
          atel: "55 55 66 70 22",
          aemail: "czcuauhtemoc@inea.gob.mx",
        },
        {
          alcaldia: "MIGUEL HIDALGO",
          dir: "Av. De los Alpes S/N, Esq. Monte Altaí, Col. Lomas de Chapultepec, Alcaldía Miguel Hidalgo, CP 11000, CDMX",
          atel: "55 52 02 65 15 / 55 52 49 35 00 EXT. 5022 / 5023",
          aemail: "czmhidalgo@inea.gob.mx",
        },
      ],
    },
    {
      title: "JAIME TORRES BODET",
      nom: "Gilberto Camacho Herrera",
      tel: "55 11 42 46 91",
      email: "gcamacho@inea.gob.mx",
      map: (
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1m7JWJM7KiLjTibY591u_2iTi0T01mTs&ehbc=2E312F"
          className=" md:h-[380px] sm: w-[100%] sm: h-[300px]"
        ></iframe>
      ),
      items: [
        {
          alcaldia: "IZTAPALAPA CENTRO",
          dir: "Super Manzana 6, Edificio B primer piso, Col. Unidad Vicente Guerrero, Alcaldía Iztapalapa, CP 09200, CDMX",
          atel: " 55 56 42 36 09",
          aemail: "cziztapalapac@inea.gob.mx",
        },
        {
          alcaldia: "IZTAPALAPA PONIENTE",
          dir: "Av. Ermita Iztapalapa # 1029, Col. Barrio San Lucas, Alcaldía Iztapalapa, CP 09000, CDMX",
          atel: "55 26 36 13 88",
          aemail: "cziztapalapap@inea.gob.mx",
        },
        {
          alcaldia: "IZTAPALAPA ORIENTE",
          dir: "Lázaro Cárdenas S/N, Col. Ixtlahuacan, Alcaldía Iztapalapa, CP 09690, CDMX",
          atel: "55 26 35 61 42",
          aemail: "ziztapalapao@inea.gob.mx",
        },
      ],
    },
  ];

  return (
    <div classname="">
      <PagSec Enlaces={cards}>
        <div className="mx-auto mb-72 w-full grid grid-cols-1 gap-2 row-span-1">
          <div className="mx-auto mt-2 mb-4 w-full max-w-full md:max-w-[1140px]">
            <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl">
              Coordinaciones de zona
            </h1>
            <div className="flex items-center mb-2">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <div className="px-4 pt-4 pb-2 text-lg text-gray-700">
              <strong>
                Ubica tu coordinación de zona dependiendo de tu delegación.
              </strong>
              <p>
                Las coordinaciones de zona son unidades geográficas responsables
                de promover, organizar y diagnosticar los servicios de educación
                para jóvenes y adultos no escolarizados. Dentro de las
                coordinaciones de zona podrás realizar tus trámites.
              </p>
            </div>
          </div>

          <div className="hidden md:w-full flex-col md:flex">
            <SkewedPages datos={pageData} />
          </div>
          <div className="md:hidden w-full ">
            <SkewedPagesResponsive datos={pageData} />
          </div>
        </div>
        <div className="row-span-1">
          <div className="mx-auto mt-2 mb-4 w-full max-w-full md:max-w-[1140px]">
            <h1 className="text-2xl font-medium text-slate-700 mb-2 letras:text-3xl">
              Plazas comunitarias
            </h1>
            <div className="flex items-center mb-2">
              <div className="w-9 h-[5px] bg-[#b38e61] mt-1"></div>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <br />
            <div className="px-4 pt-4 pb-2 text-lg text-gray-700">
              <strong>
                Ubica tu plaza comunitaria dependiendo de tu delegación.
              </strong>
              <p>
                Las Plazas Comunitarias INEA son espacios educativos abiertos a
                la comunidad, donde personas de diferentes edades y niveles de
                educación pueden acudir para aprender a leer, escribir, terminar
                su educación primaria y secundaria, completar su bachillerato o
                tomar cursos de capacitación para la vida y el trabajo.
              </p>
            </div>
          </div>
          <div className="hidden md:w-full flex-col md:flex">
            <SkewedPages
              datos={pageData}
              id="animation"
            />
          </div>
          <div className="md:hidden w-full ">
            <SkewedPagesResponsive datos={pageData} />
          </div>
        </div>
      </PagSec>
    </div>
  );
}

export default Ubicacion;
