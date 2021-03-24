import * as yup from "yup";

export const signUpValidationScheme = yup.object().shape({
  email: yup.string().required("It's required").email("Use email"),
  password: yup.string().required("it's required").min(8, "too short"),
  confPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  gender: yup.string().required("It's required"),
});
