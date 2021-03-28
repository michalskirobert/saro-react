import * as yup from "yup";

import { FORMIK_HELPER } from "./utils";

export const addValidationScheme = yup.object().shape({
  [FORMIK_HELPER.TITLE]: yup
    .string()
    .min(4, "Min 4 characters.")
    .max(15, "Ma 15 characters.")
    .required("Title is required."),
  [FORMIK_HELPER.CATEGORY]: yup.string().required("Required"),
  [FORMIK_HELPER.CREW]: yup.string().required(""),
  [FORMIK_HELPER.LANGUAGE]: yup.string().required(""),
  [FORMIK_HELPER.EDITOR]: yup.string().required(""),
});
