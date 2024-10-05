import React, { useState } from "react";
import {
  TiBriefcase,
  TiGroupOutline,
  TiHeartOutline,
  TiHomeOutline,
} from "react-icons/ti";
import { RiSparkling2Fill } from "react-icons/ri";
import { TbArrowsMoveVertical } from "react-icons/tb";

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

            <div className="relative flex w-full flex-col gap-1">
              <label htmlFor="personality">
                ¿Para que ocasión lo buscas?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="personality"
                className="w-full appearance-none rounded-lg border-[1px] px-3 py-2 text-sm font-normal shadow-sm"
              >
                <option value="" className="">
                  Selecciona una opción
                </option>
                <option value="Para usar todos los días, algo casual">
                  {" "}
                  Para usar todos los días, algo casual
                </option>
                <option value="Para eventos especiales o citas">
                  Para eventos especiales o citas
                </option>
                <option value="Para salir con amigos o fiestas">
                  Para salir con amigos o fiestas
                </option>
                <option value="Para salir con amigos o fiestas">
                Para la oficina o reuniones formales
                </option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 translate-y-1 transform text-neutral-500">
                <TbArrowsMoveVertical />
              </span>
            </div>

            <div className="flex w-full flex-col gap-3">
              {/* Duración Section */}
              <label htmlFor="duracion" className="flex flex-col">
                <div>
                  Duración <span className="text-red-500">*</span>
                </div>
                <span className="text-xs text-neutral-400">
                  Elige alguno de los siguientes:
                </span>
              </label>

              <div className="flex w-full flex-col items-start justify-center gap-2">
                <div className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
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

                <div className="flex w-full cursor-pointer gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
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

            <div className="relative flex w-full flex-col gap-1">
              <label htmlFor="personality">
                ¿Cómo consideras que es tu personalidad?{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="personality"
                className="w-full appearance-none rounded-lg border-[1px] px-3 py-2 text-sm font-normal shadow-sm"
              >
                <option value="" className="">
                  Selecciona una opción
                </option>
                <option value="Energético y fresco">
                  {" "}
                  Energético(a) y fresco(a)
                </option>
                <option value="Relajado y tranquilo">
                  Relajado(a) y tranquilo(a)
                </option>
                <option value="Atractivo y seductor">
                  Atractivo(a) y seductor(a)
                </option>
                <option value="Elegante y sofisticado">
                  Elegante(a) y sofisticado(a)
                </option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 translate-y-1 transform text-neutral-500">
                <TbArrowsMoveVertical />
              </span>
            </div>

            <div className="flex w-full flex-col gap-3">
              {/* Aroma Section */}
              <label htmlFor="duracion" className="flex flex-col">
                <div>
                  Intensidad <span className="text-red-500">*</span>
                </div>
                <span className="text-xs text-neutral-400">
                  Elige alguno de los siguientes:
                </span>
              </label>

              <div className="flex w-full flex-col items-center justify-center gap-2">
                <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
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

                <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
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

            <div className="flex w-full flex-col gap-3">
              {/* Notes Section */}
              <label htmlFor="duracion" className="flex flex-col">
                <div>
                  Notas <span className="text-red-500">*</span>
                </div>
                <span className="text-xs text-neutral-400">
                  Elige una o más de nuestras notas:
                </span>
              </label>

              <div className="flex w-full flex-col items-center justify-center gap-2">
                <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="checkbox" name="aroma" id="citrica" />
                  <div className="flex flex-col">
                    <label htmlFor="citrica" className="font-medium text-black">
                      Cítrica
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>

                <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="checkbox" name="aroma" id="amaderada" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="amaderada"
                      className="font-medium text-black"
                    >
                      Amaderada
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>

                <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="checkbox" name="aroma" id="floral" />
                  <div className="flex flex-col">
                    <label htmlFor="floral" className="font-medium text-black">
                      Floral
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>

                <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                  <input type="checkbox" name="aroma" id="oriental" />
                  <div className="flex flex-col">
                    <label
                      htmlFor="oriental"
                      className="font-medium text-black"
                    >
                      Oriental
                    </label>
                    <span className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-1">
              <label htmlFor="name"> ¿Algo adicional que te gustaria?</label>
              <textarea
                rows={4}
                placeholder='"Quiero un aroma que me recuerde momentos felices."'
                className="rounded-lg border-[1px] px-3 py-2 text-sm font-normal shadow-sm placeholder:font-light placeholder:text-neutral-400 focus:border-green-500 focus:outline-none"
              ></textarea>
            </div>
          </>
        ) : (
          <></>
        )}

        <button
          onClick={() => setCategories(categories + 1)}
          className="flex w-full items-center justify-center gap-1 rounded-lg border-[1px] border-green-500 bg-gradient-to-t from-green-500 to-green-400 px-4 py-2 text-sm font-semibold text-white shadow-inner"
        >
          Generar perfume
          <RiSparkling2Fill color="white" size={17} />
        </button>
      </div>
    </main>
  );
}

export default Home;