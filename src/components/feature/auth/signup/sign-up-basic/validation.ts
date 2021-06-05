import * as yup from "yup";

import { FORM_HELPER } from "../utils";

export const signUpFirstStepValidationScheme = yup.object().shape({
  [FORM_HELPER.USERNAME]: yup.string().required("It's required"),
  [FORM_HELPER.EMAIL]: yup
    .string()
    .required("It's required")
    .email("Use email"),
  [FORM_HELPER.PASSWORD]: yup
    .string()
    .required("it's required")
    .min(8, "Too short"),
  [FORM_HELPER.CONF_PASSWORD]: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match")
    .required("It's required"),
});
