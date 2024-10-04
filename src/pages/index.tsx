import React from "react";

function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-start justify-center gap-5 px-10">
      <div className="flex flex-col gap-1">
        <h2>Asistente AI</h2>
        <p>Ingresar datos para generar</p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nombre</label>
        <input type="text" className="w-[380px]" placeholder="Daivy Morales" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Edad</label>
        <input type="text" className="w-[380px]" placeholder="19" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Sexo</label>
        <input type="text" className="w-[380px]" placeholder="Masculino" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Ciudad</label>
        <input type="text" className="w-[380px]" value="Bogota D.C" />
      </div>

      <button className="w-[380px] rounded-lg bg-green-500 py-2 text-sm font-semibold text-white">
        Siguiente
      </button>
    </main>
  );
}

export default Home;
