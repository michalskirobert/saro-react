import * as yup from "yup";
import { FORM_HELPER } from "./utils";

export const loginValidationScheme = yup.object().shape({
  [FORM_HELPER.EMAIL]: yup
    .string()
    .email("Wrong email format")
    .required("Email is required"),
  [FORM_HELPER.PASSWORD]: yup.string().required("Password is required"),
});

//todo
// export const loginValidationScheme = (invalid, valid) => {
//   return yup.object().shape({
//     [FORM_HELPER.EMAIL]: yup.string().email(invalid).required(valid),
//     [FORM_HELPER.PASSWORD]: yup.string().required(valid),
//   });
// };
