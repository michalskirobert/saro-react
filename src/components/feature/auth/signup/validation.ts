import * as yup from "yup";

export const signUpFirstStepValidationScheme = yup.object().shape({
  Username: yup.string().required("It's required"),
  ["E-mail"]: yup.string().required("It's required").email("Use email"),
  Password: yup.string().required("it's required").min(8, "Too short"),
  ["Confirm password"]: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match")
    .required("It's required"),
  // gender: yup.string().required("It's required"),
  // nativeLang: yup.string().required("It's required"),
  // studyingLang: yup.string().required("It's required"),
  // hobbies: yup.string().required("It's required"),
  // about: yup.string().required("It's required"),
});
