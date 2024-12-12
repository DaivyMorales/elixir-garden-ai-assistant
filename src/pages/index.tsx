import React, { useState } from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { useFormik } from "formik";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalData } from "@/store/GlobalDataSlice";
import validationSchema from "@/utils/validationSchema";
import { CgSpinner } from "react-icons/cg";
import { Charts } from "@/components/Charts";

interface FormValues {
  name: string;
  age: number;
  gender: string;
  occasion: string;
  personality: string;
  intensity: string;
  notes: string[];
  aditional_information: string;
  horoscope: string;
}

interface ApiResponse {
  value: string;
  description: string;
  porcentaje: number;
  id: string;
}

function Home() {
  const { response, setResponse } = useGlobalData();

  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState<Error | null>(null);
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const isSelected = selectedNotes.includes(value);
    const updatedNotes = isSelected
      ? selectedNotes.filter((note) => note !== value)
      : [...selectedNotes, value];

    setSelectedNotes(updatedNotes);
    formik.setFieldValue("notes", updatedNotes);
  };

  const handleClick = (value: string) => {
    setActiveOption(value);
    formik.setFieldValue("intensity", value);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      age: 0,
      gender: "",
      occasion: "",
      personality: "",
      intensity: "",
      notes: [],
      aditional_information: "",
      horoscope: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setLoading(true);

      try {
        const res = await axios.post<ApiResponse[]>("/api/openai", values);

        if (res.status === 200) {
          setResponse(Array.isArray(res.data) ? res.data : [res.data]);
          resetForm();
        }
      } catch (error) {
        seterror(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <AnimatePresence>
        {response.length === 0 ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={formik.handleSubmit}
            className="relative flex h-full min-h-screen w-screen flex-col items-center justify-start gap-4 bg-[#14161C] px-4 pb-10 text-white"
          >
            <div className="absolute right-0 top-0 h-[400px] w-[500px] bg-[#202F27] blur-[90px]" />
            <div className="z-10 flex flex-col items-start justify-center gap-5">
              <div className="mt-10 flex w-full items-center justify-center">
                <img src="/elixir-garden-ai.svg" alt="" className="w-[100px]" />
              </div>{" "}
              <div className="flex flex-col gap-1">
                <h3>¿Cual es el mejor perfume para ti?</h3>
                <p className="text-neutral-400">
                  Ingresa los siguientes datos:
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-center gap-3 rounded-lg border-[1px] border-gray-600 bg-[#0D0F15] p-2 py-3 pl-5 text-sm shadow-sm focus-within:border-green-400">
                  <input
                    name="name"
                    value={formik.values.name}
                    onChange={async (e) => {
                      await formik.setFieldValue(
                        "name",
                        e.target.value.toUpperCase(),
                      );
                    }}
                    type="text"
                    className="w-[280px]"
                    placeholder="Jhon"
                  />
                </div>
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
                <div className="flex items-center justify-center gap-3 rounded-lg border-[1px] border-gray-600 bg-[#0D0F15] p-2 py-3 pl-5 text-sm shadow-sm focus-within:border-green-400">
                  <input
                    type="number"
                    name="age"
                    onChange={formik.handleChange}
                    className="w-[280px] focus:outline-none"
                    placeholder="28"
                  />
                </div>
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
                <div className="flex items-center justify-center gap-3 rounded-lg border-[1px] border-gray-600 bg-[#0D0F15] p-2 py-3 pl-5 text-sm shadow-sm focus-within:border-green-400">
                  <select
                    onChange={formik.handleChange}
                    id="gender"
                    name="gender"
                    className="border-none bg-[#0D0F15] text-white focus:outline-none"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.gender}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Ciudad</label>
                <div className="px-4 py-1">
                  <p className="font-medium">Bogota D.C</p>
                </div>
              </div>
              <hr className="bg-neutral-6 00 h-[2px] w-full rounded-full" />
              <div className="relative flex w-full flex-col gap-1">
                <label htmlFor="personality">
                  ¿Para que ocasión lo buscas?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-center gap-3 rounded-lg border-[1px] border-gray-600 bg-[#0D0F15] p-2 py-3 pl-5 text-sm shadow-sm focus-within:border-green-400">
                  <select
                    onChange={formik.handleChange}
                    id="occasion"
                    name="occasion"
                    className="w-full border-none bg-[#0D0F15] text-white focus:outline-none"
                  >
                    <option value="" className="">
                      Selecciona una opción
                    </option>
                    <option value="Para usar todos los días, algo casual">
                      Para usar todos los días, algo casual
                    </option>
                    <option value="Para eventos especiales o citas">
                      Para eventos especiales o citas
                    </option>
                    <option value="Para salir con amigos o fiestas">
                      Para salir con amigos o fiestas
                    </option>
                    <option value="Para la oficina o reuniones formales">
                      Para la oficina o reuniones formales
                    </option>
                  </select>
                </div>

                {formik.touched.occasion && formik.errors.occasion ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.occasion}
                  </div>
                ) : null}
              </div>
              <div className="relative flex w-full flex-col gap-1">
                <label htmlFor="personality">
                  ¿Cómo consideras que es tu personalidad?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-center gap-3 rounded-lg border-[1px] border-gray-600 bg-[#0D0F15] p-2 py-3 pl-5 text-sm shadow-sm focus-within:border-green-400">
                  <select
                    onChange={formik.handleChange}
                    id="personality"
                    name="personality"
                    className="w-full border-none bg-[#0D0F15] text-white focus:outline-none"
                  >
                    <option value="" className="">
                      Selecciona una opción
                    </option>
                    <option value="Energético(a) y fresco(a)">
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
                </div>

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
                  {[
                    {
                      value: "Llamativo",
                      label: "Llamativo",
                      description:
                        "Diseño atractivo que capta todas las miradas.",
                    },
                    {
                      value: "Sutil",
                      label: "Sutil",
                      description: "Estilo discreto que realza con elegancia.",
                    },
                  ].map((option) => (
                    <div
                      key={option.value}
                      onClick={() => handleClick(option.value)}
                      className={`flex w-full items-center justify-start gap-3 rounded-lg border-[1px] ${
                        activeOption === option.value
                          ? "border-green-400"
                          : "border-neutral-600"
                      } cursor-pointer bg-[#0D0F15] p-2 px-5 text-sm text-white shadow-sm`}
                    >
                      <input
                        type="radio"
                        name="intensity"
                        id={option.value}
                        value={option.value}
                        checked={formik.values.intensity === option.value}
                        onChange={() => handleClick(option.value)}
                        className="hidden"
                      />
                      <div className="flex flex-col">
                        <label htmlFor={option.value} className="font-medium">
                          {option.label}
                        </label>
                        <span className="text-xs text-neutral-500">
                          {option.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {formik.touched.intensity && formik.errors.intensity ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.intensity}
                  </div>
                ) : null}
              </div>
              <div className="relative flex w-full flex-col gap-2">
                <label htmlFor="horoscope">
                  {" "}
                  <div>
                    ¿Cual es tu horoscopo?{" "}
                    <span className="text-neutral-400">(Opcional)</span>
                  </div>
                </label>
                <div className="flex items-center justify-center gap-3 rounded-lg border-[1px] border-gray-600 bg-[#0D0F15] p-2 py-3 pl-5 text-sm shadow-sm focus-within:border-green-400">
                  <select
                    onChange={formik.handleChange}
                    id="horoscope"
                    name="horoscope"
                    className="w-full border-none bg-[#0D0F15] text-white focus:outline-none"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Aries">Aries</option>
                    <option value="Tauro">Tauro</option>
                    <option value="Géminis">Géminis</option>
                    <option value="Cáncer">Cáncer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Escorpio">Escorpio</option>
                    <option value="Sagitario">Sagitario</option>
                    <option value="Capricornio">Capricornio</option>
                    <option value="Acuario">Acuario</option>
                    <option value="Piscis">Piscis</option>
                  </select>
                </div>

                {formik.touched.horoscope && formik.errors.horoscope ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.horoscope}
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
                  {[
                    {
                      value: "Cítrica",
                      label: "Cítrica",
                      description:
                        "Aroma fresco con notas vibrantes y energéticas.",
                    },
                    {
                      value: "Amaderada",
                      label: "Amaderada",
                      description:
                        "Fragancia cálida con matices de maderas nobles.",
                    },
                    {
                      value: "Floral",
                      label: "Floral",
                      description:
                        "Esencia suave y delicada con toques de flores.",
                    },
                    {
                      value: "Oriental",
                      label: "Oriental",
                      description:
                        "Aroma exótico y especiado con un toque misterioso.",
                    },
                  ].map((note) => (
                    <div
                      key={note.value}
                      className={`flex w-full items-center justify-start gap-3 rounded-lg border-[1px] ${
                        selectedNotes.includes(note.value)
                          ? "border-green-400"
                          : "border-neutral-600"
                      } bg-[#0D0F15] p-2 px-5 text-sm shadow-sm`}
                    >
                      <input
                        type="checkbox"
                        name="notes"
                        id={note.value}
                        value={note.value}
                        checked={selectedNotes.includes(note.value)}
                        onChange={() => handleCheckboxChange(note.value)}
                      />
                      <div className="flex flex-col">
                        <label
                          htmlFor={note.value}
                          className="font-medium text-white"
                        >
                          {note.label}
                        </label>
                        <span className="text-xs text-neutral-500">
                          {note.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <hr className="h-[2px] w-full rounded-full bg-neutral-100" /> */}
              {/* <div className="flex flex-col gap-1">
                <label htmlFor="password">
                  {" "}
                  Contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  className="w-[280px]"
                  placeholder="****"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs font-medium text-red-500">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div> */}
              {/* <div className="flex w-full flex-col gap-1">
                <label htmlFor="name">
                  {" "}
                  ¿Algo adicional que te gustaria?{" "}
                  <span className="text-neutral-400">(Opcional)</span>
                </label>
                <textarea
                  name="aditional_information"
                  onChange={(e) => {
                    formik.handleChange(e); 
                    e.target.value = e.target.value.toUpperCase(); 
                  }}
                  rows={4}
                  placeholder='"Quiero un aroma que me recuerde momentos felices."'
                  className="rounded-lg s px-3 py-2 text-sm font-normal shadow-sm placeholder:font-light placeholder:text-neutral-400 focus:border-green-500 focus:outline-none"
                ></textarea>
              </div> */}
              <motion.button
                type="submit"
                initial={{ scale: 1 }}
                whileTap={
                  (formik.isValid && formik.dirty) || !loading
                    ? { scale: 1 }
                    : { scale: 0.6 }
                }
                disabled={loading}
                className={` ${
                  !(formik.isValid && formik.dirty)
                    ? "cursor-not-allowed border-0 bg-neutral-700 text-neutral-500"
                    : "border-[1px] border-b-[2px] border-green-700 bg-green-500 text-neutral-800"
                } flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 py-3 text-xs font-medium`}
              >
                {loading ? (
                  <CgSpinner color="white" size={22} className="animate-spin" />
                ) : (
                  <>
                    Generar
                    <RiSparkling2Fill size={17} />
                  </>
                )}
              </motion.button>
              {error != null &&
                (error instanceof Error ? error.message : String(error))}
            </div>
          </motion.form>
        ) : loading ? (
          <>loading...</>
        ) : (
          <div className="relative flex h-full min-h-screen w-screen flex-col items-center justify-start gap-4 px-4 pb-10 text-white">
            <div className="absolute right-0 top-0 h-[400px] w-[500px] bg-[#202F27] blur-[90px]" />
            <div className="z-10 flex flex-col items-start justify-center gap-5">
              <div className="flex w-[280px] w-full flex-col items-center justify-center gap-5">
                <div className="mt-10 flex w-full items-center justify-center">
                  <img
                    src="/elixir-garden-ai.svg"
                    alt=""
                    className="w-[100px]"
                  />
                </div>
                {/* <div className="w-full max-w-[600px] rounded-lg border-[1px] bg-[#025864] p-4 text-white">
                  <p className="text-neutral-200">
                    {formik.values.name}, con el{" "}
                    <span className="font-bold">
                      {response[0]?.porcentaje}%
                    </span>{" "}
                    el mejor perfume para ti es:
                  </p>
                  <h1>{response[0]?.value}</h1>
                  {response.length > 1 && (
                    <BarHero porcentaje={response[0]?.porcentaje ?? 0} />
                  )}
                </div> */}
              </div>
              <Charts>
                {response.map((perfum: ApiResponse, index) => {
                  return (
                    // <motion.div
                    //   initial={{ scale: 0, opacity: 0 }}
                    //   animate={{ scale: 1, opacity: 1 }}
                    //   transition={{ duration: 0.5 }}
                    //   key={index}
                    //   className="flex items-center gap-3 rounded-lg"
                    //   style={{
                    //     transform: `scale(${scale})`,
                    //     transformOrigin: "top",
                    //   }}
                    // >
                    //   <div className="flex flex-col py-4 pr-4 text-sm font-medium text-white">
                    //     <div className="items.center flex justify-start gap-2">
                    //       {perfum.value}{" "}
                    //       <span className="font-bold text-neutral-400">
                    //         {perfum.id}
                    //       </span>
                    //     </div>
                    //     <span className="text-xs font-light text-neutral-500">
                    //       {perfum.description}
                    //     </span>
                    //   </div>
                    // </motion.div>
                    <div
                      key={perfum.id}
                      className="z-10 flex max-w-[600px] flex-col items-start justify-start gap-2 rounded-lg bg-white/5 p-4 text-[13px] font-medium backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-start gap-2">
                        <div className="rounded-lg border-[1px] border-green-500 bg-green-400 px-3 py-1.5">
                          <span className="font-black text-black">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2">
                          <div className="flex items-center justify-center gap-1">
                            {" "}
                            {perfum.value}
                            <span className="rounded-lg bg-neutral-500 px-2 font-mono text-xs text-white">
                              {perfum.id}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400">
                            {perfum.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Charts>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
