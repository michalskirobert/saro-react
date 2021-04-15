import * as yup from "yup";

import { FORMIK_HELPER } from "./utils";

export const addArticleValidationScheme = yup.object().shape({
  [FORMIK_HELPER.TITLE]: yup
    .string()
    .min(4, "Min 4 characters.")
    .max(15, "Max 15 characters.")
    .required("Field required."),
  [FORMIK_HELPER.CATEGORY]: yup.string().required("Field required."),
  [FORMIK_HELPER.CREW]: yup.string().required("Field required."),
  [FORMIK_HELPER.LANGUAGE]: yup.string().required("Field required."),
  [FORMIK_HELPER.EDITOR]: yup.string().required("Field required."),
  [FORMIK_HELPER.IMAGES_URL]: yup.string().required("Field required."),
});

export const addNewsValidationScheme = yup.object().shape({
  [FORMIK_HELPER.TITLE]: yup
    .string()
    .min(4, "Min 4 characters.")
    .max(15, "Max 15 characters.")
    .required("Field required."),
  [FORMIK_HELPER.SUBTITLE]: yup
    .string()
    .min(4, "Min 4 characters.")
    .max(15, "Max 15 characters.")
    .required("Field required."),
  [FORMIK_HELPER.CATEGORY]: yup.string().required("Field required."),
  [FORMIK_HELPER.CREW]: yup.string().required("Field required."),
  [FORMIK_HELPER.LANGUAGE]: yup.string().required("Field required."),
  [FORMIK_HELPER.EDITOR]: yup.string().required("Field required."),
  [FORMIK_HELPER.IMAGES_URL]: yup.string().required("Field required."),
});

export const addEventsValidationScheme = yup.object().shape({
  [FORMIK_HELPER.TITLE]: yup
    .string()
    .min(4, "Min 4 characters.")
    .max(15, "Max 15 characters.")
    .required("Field required."),
  [FORMIK_HELPER.SUBTITLE]: yup
    .string()
    .min(4, "Min 4 characters.")
    .max(15, "Max 15 characters.")
    .required("Field required."),
  [FORMIK_HELPER.CREW]: yup.string().required("Field required."),
  [FORMIK_HELPER.LANGUAGE]: yup.string().required("Field required."),
  [FORMIK_HELPER.EDITOR]: yup.string().required("Field required."),
  [FORMIK_HELPER.CITY]: yup.string().required("Field required."),
  [FORMIK_HELPER.PLACE]: yup.string().required("Field required."),
  [FORMIK_HELPER.DATE]: yup.string().required("Field required."),
  [FORMIK_HELPER.TIME]: yup.string().required("Field required."),
  [FORMIK_HELPER.LINK]: yup.string().required("Field required."),
});
