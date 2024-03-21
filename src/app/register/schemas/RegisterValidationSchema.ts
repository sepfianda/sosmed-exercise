import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().required("Email is Required").email(),
    password: Yup.string().required("Password is Required"),

})
