import React from "react";
import "./Ubicacion.css";

const Ubicacion = () => {
  return (
    <div id="UbicacionDivP" className="container w-auto mx-auto px-4 py-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div id="direccion" className="text-s text-zinc-800">
          <br />
          <p>Dirección INEA CDMX:</p>
          <p className="text-s text-zinc-700">
            Francisco Márquez 160 Planta baja, Colonia Condesa, Cuauhtémoc,
            06140 Ciudad de México, Ciudad de México.
          </p>
          <br />
          <p>
            Atención telefónica 800 8906 310, Conmutador 55 5211-0815 / 55
            5211-0824 / 55 5211-0866 / 55 5211-0798 / 55 5211-0912
          </p>
          <br />
          <p>Horario de atención de 8:00 a 9:00 horas.</p>
          <br />

          <a href="/">Detalles de ubicaciones</a>
        </div>
        <div>
          {/* <iframe
            src="https://www.google.com/maps/d/embed?mid=1at8nJJLYa-9bcZEgHMt-8Nb_cPK8tnI&ehbc=2E312F"
            width="600"
            height="480"
            className="w-full h-74 md:h-96 lg:h-[26rem] border-0 rounded-lg"
            allowFullScreen
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/d/embed?mid=11LVXyU_3QKH1JkOXIMVba2bEkN8f_iY&hl=es&ehbc=2E312F"
            width="640"
            height="480"
            className="w-full h-74 md:h-96 lg:h-[26rem] border-0 rounded-lg p-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
