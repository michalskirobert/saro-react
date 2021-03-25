import * as yup from "yup";

export const loginValidationScheme = yup.object().shape({
  email: yup.string().email("Wrong email format").required("Email is required"),
  password: yup.string().required("Password is required"),
});
