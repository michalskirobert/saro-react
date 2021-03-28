import * as yup from "yup";

export const addValidationScheme = yup.object().shape({
    title: yup.string().required("Title is required."),
  });