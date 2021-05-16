import React from "react";
import { Breadcrumb, BreadcrumbItem, Button, Form as F } from "reactstrap";
import { AiOutlineClose } from "react-icons/ai";

import { Form, Formik } from "formik";
import { addEventsValidationScheme } from "./validation";

import { CustomSelect } from "@components/shared/custom-select";
import { CustomInput } from "@components/shared/custom-inputs";

import { useContainer } from "./container";

import * as C from "@utils/constants";
import {
  CMS_INPUT_PLACEHOLDERS,
  CMS_INPUT_TYPES,
  FORMIK_HELPER,
} from "./utils.js";

import * as S from "./styles";

const cities = [
  {
    city: "Warsaw",
  },
  {
    city: "Cracow",
  },
];

const AddEvents = () => {
  const { status, handleSubmit, crew, image, deleteImage, imageChangeHandler } =
    useContainer();

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validateOnMount: true,
        validationSchema: addEventsValidationScheme,
        onSubmit: (values) => {
          handleSubmit(values);
        },
      }}
    >
      {({
        values,
        errors,
        isValid,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <section className={"section saro-panel"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href={C.ROUTE_PATHS.HOME_ROUTE}>{C.GENERAL_CONSTANTS.HOME}</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href={C.ROUTE_PATHS.PANEL_ROUTE}>
                {C.GENERAL_CONSTANTS.ADMIN_PANEL}
              </a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {C.GENERAL_CONSTANTS.ADD_EVENTS}
            </BreadcrumbItem>
          </Breadcrumb>
          <h2 className={"main-title"}>{C.GENERAL_CONSTANTS.ADD_EVENTS}</h2>
          <Form className={"cms"}>
            <section className={"form-container"}>
              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.TITLE,
                    invalid: errors[FORMIK_HELPER.TITLE],
                    id: FORMIK_HELPER.TITLE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.TITLE],
                    placeholder: CMS_INPUT_PLACEHOLDERS.TITLE,
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.TITLE] ||
                  touched[FORMIK_HELPER.TITLE]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.TITLE]}
                  </F.Text>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.SUBTITLE,
                    invalid: errors[FORMIK_HELPER.SUBTITLE],
                    id: FORMIK_HELPER.SUBTITLE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.SUBTITLE],
                    placeholder: CMS_INPUT_PLACEHOLDERS.SUBTITLE,
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.SUBTITLE] ||
                  touched[FORMIK_HELPER.SUBTITLE]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.SUBTITLE]}
                  </F.Text>
                )}
              </div>

              <div className={"form-control"}>
                <label htmlFor={FORMIK_HELPER.CITY}>{C.CMS_LABELS.CITY}</label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.CITY,
                    placeholder: CMS_INPUT_PLACEHOLDERS.CITY,
                    invalid: errors[FORMIK_HELPER.CITY],
                    options: cities.map(({ city }) => ({
                      label: city,
                      value: city,
                    })),
                    onChange: setFieldValue,
                  }}
                />
                {(errors[FORMIK_HELPER.CITY] ||
                  touched[FORMIK_HELPER.CITY]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.CITY]}
                  </F.Text>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.PLACE,
                    invalid: errors[FORMIK_HELPER.PLACE],
                    id: FORMIK_HELPER.PLACE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.PLACE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.PLACE],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.PLACE] ||
                  touched[FORMIK_HELPER.PLACE]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.PLACE]}
                  </F.Text>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.DATE,
                    invalid: errors[FORMIK_HELPER.DATE],
                    id: FORMIK_HELPER.DATE,
                    type: CMS_INPUT_TYPES.DATE,
                    value: values[FORMIK_HELPER.DATE],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.DATE] ||
                  touched[FORMIK_HELPER.DATE]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.DATE]}
                  </F.Text>
                )}
              </div>
              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.TIME,
                    invalid: errors[FORMIK_HELPER.TIME],
                    id: FORMIK_HELPER.TIME,
                    type: CMS_INPUT_TYPES.TIME,
                    value: values[FORMIK_HELPER.TIME],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.TIME] ||
                  touched[FORMIK_HELPER.TIME]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.TIME]}
                  </F.Text>
                )}
              </div>
              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.LINK,
                    invalid: errors[FORMIK_HELPER.LINK],
                    id: FORMIK_HELPER.LINK,
                    placeholder: CMS_INPUT_PLACEHOLDERS.LINK,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.LINK],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.LINK] ||
                  touched[FORMIK_HELPER.LINK]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.LINK]}
                  </F.Text>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.IMG_URL,
                    invalid: errors[FORMIK_HELPER.IMG_URL],
                    id: FORMIK_HELPER.IMG_URL,
                    type: "file",
                    value: values[FORMIK_HELPER.IMG_URL],
                    onChange: imageChangeHandler,
                  }}
                />
                {image && (
                  <>
                    <S.PreviewImg
                      {...{
                        src: image,
                        alt: "Preview",
                      }}
                    />
                    <S.DeleteUpload
                      {...{
                        type: CMS_INPUT_TYPES.BUTTON,
                        variant: C.GENERAL_CONSTANTS.B_DANGER,
                        onClick: () => deleteImage(image),
                      }}
                    >
                      <AiOutlineClose />
                    </S.DeleteUpload>
                  </>
                )}
                {(errors[FORMIK_HELPER.IMG_URL] ||
                  touched[FORMIK_HELPER.IMG_URL]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.IMG_URL]}
                  </F.Text>
                )}
              </div>

              <div className={"form-control"}>
                <label htmlFor={FORMIK_HELPER.LANGUAGE}>
                  {C.CMS_LABELS.LANG}
                </label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.LANGUAGE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.LANGUAGE,
                    invalid: errors[FORMIK_HELPER.LANGUAGE],
                    options: C.GENERAL_CONSTANTS.LANGUAGES.map(
                      ({ label, lang }) => ({
                        label,
                        value: lang,
                      })
                    ),
                    onChange: setFieldValue,
                  }}
                />
                {(errors[FORMIK_HELPER.LANGUAGE] ||
                  touched[FORMIK_HELPER.LANGUAGE]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </F.Text>
                )}
              </div>
              <div className={"form-control"}>
                <label htmlFor={FORMIK_HELPER.CREW}>{C.CMS_LABELS.CREW}</label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.CREW,
                    invalid: errors[FORMIK_HELPER.CREW],
                    isDisabled: status < 50,
                    placeholder: CMS_INPUT_PLACEHOLDERS.CREW,
                    options: crew.map(({ name, surname }) => ({
                      label: `${name} ${surname}`,
                      value: `${name} ${surname}`,
                    })),
                    onChange: setFieldValue,
                  }}
                />
                {(errors[FORMIK_HELPER.CREW] ||
                  touched[FORMIK_HELPER.CREW]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.CREW]}
                  </F.Text>
                )}
              </div>
              <div className={"form-control form-info"}>
                <label htmlFor={FORMIK_HELPER.EDITOR}>
                  {C.CMS_LABELS.CONTENT}
                </label>
                <textarea
                  {...{
                    id: FORMIK_HELPER.EDITOR,
                    placeholder: CMS_INPUT_PLACEHOLDERS.EDITOR,
                    value: values[FORMIK_HELPER.EDITOR],
                    onChange: handleChange,
                    cols: "30",
                    rows: "10",
                  }}
                ></textarea>
                {(errors[FORMIK_HELPER.EDITOR] ||
                  touched[FORMIK_HELPER.EDITOR]) && (
                  <F.Text className={"validation-alert"}>
                    {errors[FORMIK_HELPER.EDITOR]}
                  </F.Text>
                )}
              </div>
            </section>

            <Button
              {...{
                className: "submit-btn",
                type: CMS_INPUT_TYPES.SUBMIT,
                // disabled: !image || isLoading || !isValid,
                onClick: handleSubmit,
              }}
            >
              {C.GENERAL_CONSTANTS.ADD}
            </Button>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default AddEvents;
