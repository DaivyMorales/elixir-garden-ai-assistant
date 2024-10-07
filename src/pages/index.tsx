import React, { useState } from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { TbArrowsMoveVertical } from "react-icons/tb";
import { useFormik } from "formik";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Chart from "@/components/Chart";
import { useGlobalData } from "@/store/GlobalDataSlice";
import validationSchema from "@/utils/validationSchema";
import { CgSpinner } from "react-icons/cg";

function Home() {
  const { response, setResponse } = useGlobalData();

  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState<any>();

  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      gender: "",
      occasion: "",
      duration: "",
      personality: "",
      intensity: "",
      notes: [],
      aditional_information: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      setLoading(true);

      try {
        const res = await axios.post("/api/openai", values);
        if (res.status === 200) {
          setResponse(res.data);
        }
        console.log("Form submitted successfully!");
      } catch (error) {
        console.error("Submission error:", error);
        seterror(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <AnimatePresence>
        {response.length === 0 ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={formik.handleSubmit}
            className="flex h-full w-screen flex-col items-center justify-center gap-5 px-10 py-10"
          >
            <div className="flex flex-col items-start justify-center gap-5">
              <div className="flex flex-col gap-1">
                <h1>¿Cual es el mejor perfume para ti?</h1>
                <p>Ingresa los siguientes datos para inteligencia artificial</p>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  onChange={formik.handleChange}
                  type="text"
                  className="w-[280px]"
                  placeholder="Daivy Morales"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">
                  {" "}
                  Edad <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  onChange={formik.handleChange}
                  className="w-[280px]"
                  placeholder="19"
                />
                {formik.touched.age && formik.errors.age ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.age}
                  </div>
                ) : null}
              </div>

              <div className="relative flex w-full flex-col gap-1">
                <label htmlFor="personality">
                  Sexo <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={formik.handleChange}
                  id="gender"
                  name="gender"
                  className="w-[280px] rounded-lg border-[1px] px-3 py-2 text-sm font-normal shadow-sm"
                >
                  <option value="" className="">
                    Selecciona una opción
                  </option>
                  <option value="Masculino"> Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.gender}
                  </div>
                ) : null}
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
                  onChange={formik.handleChange}
                  id="occasion"
                  name="occasion"
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
                {formik.touched.occasion && formik.errors.occasion ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.occasion}
                  </div>
                ) : null}
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
                    <input
                      type="radio"
                      name="duration"
                      id="duration"
                      value="Duradero"
                      onChange={formik.handleChange}
                    />
                    <div className="flex flex-col">
                      <label
                        htmlFor="Duradero"
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
                    <input
                      type="radio"
                      name="duration"
                      id="duration"
                      value="Ligero"
                      onChange={formik.handleChange}
                    />
                    <div className="flex flex-col">
                      <label
                        htmlFor="Ligero"
                        className="font-medium text-black"
                      >
                        Ligero
                      </label>
                      <span className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </span>
                    </div>
                  </div>
                </div>
                {formik.touched.duration && formik.errors.duration ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.duration}
                  </div>
                ) : null}
              </div>

              <div className="relative flex w-full flex-col gap-1">
                <label htmlFor="personality">
                  ¿Cómo consideras que es tu personalidad?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={formik.handleChange}
                  id="personality"
                  name="personality"
                  className="w-full appearance-none rounded-lg border-[1px] px-3 py-2 text-sm font-normal shadow-sm"
                >
                  <option value="" className="">
                    Selecciona una opción
                  </option>
                  <option value="Energético(a) y fresco(a)">
                    {" "}
                    Energético(a) y fresco(a)
                  </option>
                  <option value="Relajado(a) y tranquilo(a)">
                    Relajado(a) y tranquilo(a)
                  </option>
                  <option value="Atractivo(a) y seductor(a)">
                    Atractivo(a) y seductor(a)
                  </option>
                  <option value="Elegante(a) y sofisticado(a)">
                    Elegante(a) y sofisticado(a)
                  </option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 translate-y-1 transform text-neutral-500">
                  <TbArrowsMoveVertical />
                </span>

                {formik.touched.personality && formik.errors.personality ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.personality}
                  </div>
                ) : null}
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
                    <input
                      type="radio"
                      name="intensity"
                      id="intensity"
                      value="Llamativo"
                      onChange={formik.handleChange}
                    />
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
                    <input
                      type="radio"
                      name="intensity"
                      id="intensity"
                      value="Sutil"
                      onChange={formik.handleChange}
                    />
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
                {formik.touched.intensity && formik.errors.intensity ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.intensity}
                  </div>
                ) : null}
              </div>

              <div className="flex w-full flex-col gap-3">
                {/* Notes Section */}
                <label htmlFor="duracion" className="flex flex-col">
                  <div>
                    Notas <span className="text-neutral-400">(Opcional)</span>
                  </div>
                  <span className="text-xs text-neutral-400">
                    Elige una o más de nuestras notas:
                  </span>
                </label>

                <div className="flex w-full flex-col items-center justify-center gap-2">
                  <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                    <input
                      type="checkbox"
                      name="notes"
                      id="citrica"
                      value="Cítrica"
                      onChange={formik.handleChange}
                    />
                    <div className="flex flex-col">
                      <label
                        htmlFor="citrica"
                        className="font-medium text-black"
                      >
                        Cítrica
                      </label>
                      <span className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                    <input
                      type="checkbox"
                      name="notes"
                      id="amaderada"
                      value="Amaderada"
                      onChange={formik.handleChange}
                    />
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
                    <input
                      type="checkbox"
                      name="notes"
                      id="floral"
                      value="Floral"
                      onChange={formik.handleChange}
                    />
                    <div className="flex flex-col">
                      <label
                        htmlFor="floral"
                        className="font-medium text-black"
                      >
                        Floral
                      </label>
                      <span className="text-xs">
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-start gap-3 rounded-lg border-[1px] bg-white p-2 px-5 text-sm text-neutral-400 shadow-sm">
                    <input
                      type="checkbox"
                      name="notes"
                      id="oriental"
                      value="Oriental"
                      onChange={formik.handleChange}
                    />
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
                <label htmlFor="name">
                  {" "}
                  ¿Algo adicional que te gustaria?{" "}
                  <span className="text-neutral-400">(Opcional)</span>
                </label>
                <textarea
                  name="aditional_information"
                  onChange={formik.handleChange}
                  rows={4}
                  placeholder='"Quiero un aroma que me recuerde momentos felices."'
                  className="rounded-lg border-[1px] px-3 py-2 text-sm font-normal shadow-sm placeholder:font-light placeholder:text-neutral-400 focus:border-green-500 focus:outline-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                initial={{ scale: 1 }}
                whileHover={loading ? { scale: 1 } : { scale: 1.1 }}
                whileTap={
                  (formik.isValid && formik.dirty) || !loading
                    ? { scale: 1 }
                    : { scale: 0.6 }
                }
                disabled={loading}
                className={` ${
                  !(formik.isValid && formik.dirty)
                    ? "cursor-not-allowed border-neutral-300 bg-gray-300 text-gray-600"
                    : "bg-gradient-to-t from-green-500 to-green-400"
                } flex w-full items-center justify-center gap-1 rounded-lg border-[1px] border-green-500 px-4 py-2 text-sm font-semibold text-white shadow-inner`}
              >
                {loading ? (
                  <CgSpinner color="white" size={20} className="animate-spin" />
                ) : (
                  <>
                    Generar perfume
                    <RiSparkling2Fill color="white" size={17} />
                  </>
                )}
              </motion.button>

              {error}
            </div>
          </motion.form>
        ) : loading ? (
          <>loading...</>
        ) : (
          <div className="flex h-full w-screen flex-col items-start justify-center gap-5 px-10 py-10">
            <div className="flex flex-col gap-1">
              <h1>{formik.values.name}, el mejor perfume para ti es...</h1>
              <p>Ingresa los siguientes datos para inteligencia artificial</p>
            </div>
            <Chart />
            {response.map((perfum: any, index) => {
              const scale = 1 - index * 0.1;

              let bgColor;
              switch (index) {
                case 0:
                  bgColor = "bg-yellow-400";
                  break;
                case 1:
                  bgColor = "bg-gray-400";
                  break;
                case 2:
                  bgColor = "bg-yellow-700";
                  break;
                default:
                  bgColor = "bg-blue-400";
              }

              return (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="flex w-[410px] items-center gap-3 rounded-lg border-[1px] bg-white shadow-sm"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top",
                  }}
                >
                  <div
                    className={`flex h-[70px] w-[90px] items-center justify-center rounded-r-lg font-bold text-white ${bgColor}`} // Usamos la variable bgColor
                  >
                    {index + 1}.
                  </div>
                  <div className="flex flex-col py-4 pr-4 text-sm font-medium text-black">
                    {perfum.value}
                    <span className="text-xs font-light text-neutral-500">
                      {perfum.description}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
