import React, { useState } from "react";
import { useFormik } from "formik";
import { IoSearch, IoWarning } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";
import * as Yup from "yup";
import FindResult from "@/components/FindResult";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "El perfume debe tener al menos 3 caracteres")
    .required("Debes escribir algun perfume."),
});

function Find() {
  const [loading, setloading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      setloading(true);
      console.log(values);
    },
    validationSchema,
  });
  return (
    <>
      <div className="relative flex h-screen w-screen flex-col items-center justify-start gap-4 bg-[#14161C] px-4">
        <div className="absolute right-0 top-0 h-[400px] w-[500px] bg-[#202F27] blur-[90px]" />
        <header className="flex justify-center items-center z-10 w-full px-8 py-4">
          <img src="/elixir-garden-ai.svg" alt="" className="w-[100px]" />
        </header>
        <div className="z-10 w-full flex-col gap-6 h-full flex justify-center items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="z-10 flex flex-col items-center justify-center gap-4"
          >
            <h3 className="text-white">¿Qué perfume buscas?</h3>
            <div className="flex items-center justify-center gap-3 rounded-lg border-[1px] border-green-400 bg-[#0D0F15] p-2 py-3 pl-5 text-sm shadow-sm focus-within:border-green-400">
              <input
                id="name"
                name="name"
                onChange={formik.handleChange}
                type="search"
                className="bg-[#0D0F15] font-normal text-white placeholder:font-normal placeholder:text-neutral-600 focus:outline-none"
                placeholder="Invictus"
              />
              <div className="text-neutral-400">
                <IoSearch size={18} />
              </div>
            </div>

            {formik.touched.name && formik.errors.name ? (
              <p className="flex items-center justify-center gap-1 text-xs font-medium text-yellow-600">
                <IoWarning />
                {formik.errors.name}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className={`${loading ? "cursor-not-allowed border-0 bg-neutral-700 text-neutral-500" : "border-[1px] border-b-[2px] border-green-700 bg-green-500 text-white"} flex items-center justify-center gap-2 rounded-lg px-4 py-2 py-3 text-xs font-medium`}
            >
              {loading && (
                <div className="animate-spin">
                  <CgSpinner size={18} />
                </div>
              )}
              {loading ? "Encontrando perfume" : "Encontrar perfume"}
            </button>
          </form>

          <FindResult />
        </div>
      </div>
    </>
  );
}

export default Find;
