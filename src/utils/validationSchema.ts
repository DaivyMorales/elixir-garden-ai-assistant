import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .required("El nombre es obligatorio"),
  age: Yup.number()
    .min(1, "La edad debe ser mayor a 0")
    .max(100, "La edad debe ser menor o igual a 100")
    .required("La edad es obligatoria"),
  gender: Yup.string()
    .oneOf(["Masculino", "Femenino"], "Selecciona una opción válida")
    .required("El sexo es obligatorio"),
  occasion: Yup.string()
    .oneOf(
      [
        "Para usar todos los días, algo casual",
        "Para eventos especiales o citas",
        "Para salir con amigos o fiestas",
        "Para la oficina o reuniones formales",
      ],
      "Selecciona una ocasión válida",
    )
    .required("La ocasión es obligatoria"),
  duration: Yup.string()
    .oneOf(["Duradero", "Ligero"], "Selecciona una opción válida")
    .required("La duración es obligatoria"),
  personality: Yup.string()
    .oneOf(
      [
        "Energético(a) y fresco(a)",
        "Relajado(a) y tranquilo(a)",
        "Atractivo(a) y seductor(a)",
        "Elegante(a) y sofisticado(a)",
      ],
      "Selecciona una personalidad válida",
    )
    .required("La personalidad es obligatoria"),
  intensity: Yup.string()
    .oneOf(["Llamativo", "Sutil"], "Selecciona una intensidad válida")
    .required("La intensidad es obligatoria"),

  password: Yup.string()
    .oneOf(["4632"], "La contraseña debe ser exactamente 4632")
    .required("La contraseña es obligatoria"),
});

export default validationSchema;
