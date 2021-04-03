import * as yup from "yup";

import { FORMIK_HELPER } from "./utils";
import * as CONSTANTS from "@utils/constants";

export const editValidationScheme = (type) => {
  if (type === CONSTANTS.GENERAL_CONSTANTS.BLOG_POSTS) {
    return yup.object().shape({
      [FORMIK_HELPER.TITLE]: yup
        .string()
        .min(4, "Min 4 characters.")
        .max(15, "Max 15 characters.")
        .required("Field required."),
      [FORMIK_HELPER.CATEGORY]: yup.string().required("Field required."),
      [FORMIK_HELPER.CREW]: yup.string().required("Field required."),
      [FORMIK_HELPER.LANGUAGE]: yup.string().required("Field required."),
      [FORMIK_HELPER.EDITOR]: yup.string().required("Field required."),
    });
  } else if (type === CONSTANTS.GENERAL_CONSTANTS.NEWS) {
    return yup.object().shape({
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
      [FORMIK_HELPER.IMG_URL]: yup.string().required("Field required."),
    });
  }
  return yup.object().shape({
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
    [FORMIK_HELPER.IMG_URL]: yup.string().required("Field required."),
    [FORMIK_HELPER.LINK]: yup.string().required("Field required."),
  });
};
