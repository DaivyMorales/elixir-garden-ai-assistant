import React, { useState } from "react";
import {
  TiBriefcase,
  TiGroupOutline,
  TiHeartOutline,
  TiHomeOutline,
} from "react-icons/ti";
import { RiSparkling2Fill } from "react-icons/ri";

function Home() {
  const [categories, setCategories] = useState(1);
  const [occasion, setOccasion] = useState(0);

  return (
    <main className="flex h-full w-screen flex-col items-center justify-center gap-5 px-10 py-10">
      <div className="flex flex-col items-start justify-center gap-5">
        {categories === 1 ? (
          <>
            <div className="flex flex-col gap-1">
              <h1>¿Cual es el mejor perfume para ti?</h1>
              <p>Ingresa los siguientes datos para inteligencia artificial</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-[280px]"
                placeholder="Daivy Morales"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Edad</label>
              <input type="text" className="w-[280px]" placeholder="19" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Sexo</label>
              <input
                type="text"
                className="w-[280px]"
                placeholder="Masculino"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Ciudad</label>
              <input type="text" className="w-[280px]" value="Bogota D.C" />
            </div>

            <hr className="h-[2px] w-full rounded-full bg-neutral-100" />

            <div className="flex flex-col gap-1">
              <label htmlFor="name"> ¿Para qué ocasión lo buscas?</label>
              <input
                type="text"
                className="w-[280px]"
                placeholder="Evento especial"
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              {/* Duración Section */}
              <label htmlFor="duracion">
                Duración <span className="text-red-500">*</span>
              </label>

              <div className="flex w-full flex-col items-start justify-center gap-2">
                <div className="flex w-full gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="radio" name="duracion" id="duradero" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="duradero"
                      className="font-medium text-black"
                    >
                      Duradero
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>

                <div className="flex w-full gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="radio" name="duracion" id="ligero" />
                  <div className="flex flex-col">
                    <label htmlFor="ligero" className="font-medium text-black">
                      Ligero
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="name">
                {" "}
                ¿Cómo consideras que es tu personalidad?
              </label>
              <input
                type="text"
                className="w-[280px]"
                placeholder="Energético y fresco"
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              {/* Aroma Section */}
              <label htmlFor="aroma">
                Aroma <span className="text-red-500">*</span>
              </label>

              <div className="flex w-full flex-col items-start justify-center gap-2">
                <div className="flex w-full gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="radio" name="aroma" id="llamativo" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="llamativo"
                      className="font-medium text-black"
                    >
                      Llamativo
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>

                <div className="flex w-full gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="radio" name="aroma" id="sutil" />
                  <div className="flex flex-col">
                    <label htmlFor="sutil" className="font-medium text-black">
                      Sutil
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        <button
          onClick={() => setCategories(categories + 1)}
          className="flex w-[280px] items-center justify-center gap-1 rounded-lg border-[1px] border-green-500 bg-gradient-to-t from-green-500 to-green-400 px-4 py-2 text-sm font-semibold text-white shadow-inner"
        >
          Generar perfume
          <RiSparkling2Fill color="white" size={17} />
        </button>
      </div>
    </main>
  );
}

export default Home;
