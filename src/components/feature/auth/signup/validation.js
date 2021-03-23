/* import * as yup from "yup";

export const signUpValidationScheme = yup.object().shape({
  email: yup.string().required("").email(""),
  password: yup.string().required("").min(8, ""),
  confPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
 */