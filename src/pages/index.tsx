import React, { useState } from "react";
import {
  TiBriefcase,
  TiGroupOutline,
  TiHeartOutline,
  TiHomeOutline,
} from "react-icons/ti";

function Home() {
  const [categories, setCategories] = useState(1);
  const [occasion, setOccasion] = useState(0);

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-5 px-10">
      <div className="flex flex-col items-start justify-center gap-5">
        {categories === 1 ? (
          <>
            <div className="flex flex-col gap-1">
              <h2>Asistente AI</h2>
              <p>Ingresar datos para generar</p>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-[380px]"
                placeholder="Daivy Morales"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Edad</label>
              <input type="text" className="w-[380px]" placeholder="19" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Sexo</label>
              <input
                type="text"
                className="w-[380px]"
                placeholder="Masculino"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Ciudad</label>
              <input type="text" className="w-[380px]" value="Bogota D.C" />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <h3 className="text- font-bold">
                ¿Para qué ocasión estás buscando el perfume?
              </h3>
              <p className="text-neutral-400">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="grid w-full grid-cols-2 gap-3">
              <div
                onClick={() => setOccasion(1)}
                className={`${occasion === 1 ? "border-green-500 text-green-500" : "text-neutral-400"} flex h-[100px] cursor-pointer flex-col items-start justify-center gap-1 rounded-lg border-[1px] px-3 shadow-sm hover:border-green-500`}
              >
                <TiGroupOutline  size={26} />
                <p className="font-normal">Amigos, Fiestas</p>
              </div>

              <div
                onClick={() => setOccasion(2)}
                className={`${occasion === 2 ? "border-green-500 text-green-500" : "text-neutral-400"} flex h-[100px] cursor-pointer flex-col items-start justify-center gap-1 rounded-lg border-[1px] px-3 shadow-sm hover:border-green-500`}
              >
                <TiBriefcase  size={26} />
                <p className="font-normal">Trabajo, Oficina</p>
              </div>

              <div
                onClick={() => setOccasion(3)}
                className={`${occasion === 3 ? "border-green-500 text-green-500" : "text-neutral-400"} flex h-[100px] cursor-pointer flex-col items-start justify-center gap-1 rounded-lg border-[1px] px-3 shadow-sm hover:border-green-500`}
              >
                <TiHeartOutline  size={26} />
                <p className="font-normal">Eventos, Citas</p>
              </div>

              <div
                onClick={() => setOccasion(4)}
                className={` ${occasion === 4 ? "border-green-500 text-green-500" : "text-neutral-400"} flex h-[100px] cursor-pointer flex-col items-start justify-center gap-1 rounded-lg border-[1px] px-3 shadow-sm hover:border-green-500`}
              >
                <TiHomeOutline size={26} />
                <p className="font-normal">Casual, Diario</p>
              </div>
            </div>
          </>
        )}

        <button
          onClick={() => setCategories(categories + 1)}
          className="w-[380px] rounded-lg bg-green-500 py-2 text-sm font-semibold text-white shadow-inner"
        >
          Siguiente
        </button>
      </div>
    </main>
  );
}

export default Home;
