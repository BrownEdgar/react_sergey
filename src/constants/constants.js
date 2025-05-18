import { string, ref, array } from "yup";
export const formYupValidationObject = {
  username: string()
    .min(3, "Անունը շատ կարճ է")
    .max(19, "Անունը շատ երկար է")
    .required("Պարտադիր է լրացման համար"),
  email: string().email().required(),
  password: string()
    .matches(/[A-Z]/, "Գախտնաբառը պետք է սկսվի մեծատառով")
    .min(8)
    .max(25)
    .required(),
  repeatPassword: string()
    .required("Please retype your password.")
    .oneOf([ref("password")], "Your passwords do not match."),
  languages: string().oneOf(["html", "css", "js"]).required(),
  size: array().of(string().oneOf(["xl", "lg", "md", "xs"])),
  message: string()
    .min(1)
    .max(250)
    .default(() => "Lorem ipsum dolor sit amet consectetur."),
};

export const initialValues = {
  username: "",
  email: "abcd@gmail.com",
  password: "",
  repeatPassword: "",
  languages: "",
  size: [],
  message: "",
};
