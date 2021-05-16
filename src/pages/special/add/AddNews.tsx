import React from "react";
import { Breadcrumb, BreadcrumbItem, Button, Form as F } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

import { Form, Formik } from "formik";
import { addNewsValidationScheme } from "./validation";

import CustomEditor from "@components/shared/custom-editor";
import { CustomSelect } from "@components/shared/custom-select";
import { CustomInput } from "@components/shared/custom-inputs";

import { useContainer } from "./container";

import {
  CMS_INPUT_PLACEHOLDERS,
  CMS_INPUT_TYPES,
  FORMIK_HELPER,
} from "./utils.js";
import * as C from "@utils/constants";

import * as S from "./styles";

const AddNews = () => {
  const {
    crew,
    handleSubmit,
    imageChangeHandler,
    isLoading,
    image,
    categories,
    deleteImage,
    status,
  } = useContainer();

  return (
    <>
      <Formik
        {...{
          initialValues: {},
          validateOnChange: true,
          validateOnMount: true,
          validationSchema: addNewsValidationScheme,
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
                <a href={C.ROUTE_PATHS.HOME_ROUTE}>
                  {C.GENERAL_CONSTANTS.HOME}
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href={C.ROUTE_PATHS.PANEL_ROUTE}>
                  {C.GENERAL_CONSTANTS.ADMIN_PANEL}
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {C.GENERAL_CONSTANTS.ADD_NEWS}
              </BreadcrumbItem>
            </Breadcrumb>
            <h2 className={"main-title"}>{C.GENERAL_CONSTANTS.ADD_NEWS}</h2>
            <Form className={"cms"}>
              <section className={"form-container"}>
                <div className={"form-control"}>
                  <CustomInput
                    {...{
                      label: C.CMS_LABELS.TITLE,
                      invalid: errors[FORMIK_HELPER.TITLE],
                      id: FORMIK_HELPER.TITLE,
                      placeholder: CMS_INPUT_PLACEHOLDERS.TITLE,
                      type: CMS_INPUT_TYPES.TEXT,
                      autoComplete: "off",
                      value: values[FORMIK_HELPER.TITLE],
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
                      placeholder: CMS_INPUT_PLACEHOLDERS.SUBTITLE,
                      type: CMS_INPUT_TYPES.TEXT,
                      autoComplete: "off",
                      value: values[FORMIK_HELPER.SUBTITLE],
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
                  <label htmlFor={FORMIK_HELPER.CATEGORY}>
                    {C.CMS_LABELS.CATEGORY}
                  </label>
                  <CustomSelect
                    {...{
                      name: FORMIK_HELPER.CATEGORY,
                      placeholder: CMS_INPUT_PLACEHOLDERS.CATEGORY,
                      invalid: errors[FORMIK_HELPER.CATEGORY],
                      options: categories.map((item) => ({
                        label: item,
                        value: item,
                      })),
                      onChange: setFieldValue,
                    }}
                  />
                  {(errors[FORMIK_HELPER.CATEGORY] ||
                    touched[FORMIK_HELPER.CATEGORY]) && (
                    <F.Text className={"validation-alert"}>
                      {errors[FORMIK_HELPER.CATEGORY]}
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
                  <CustomInput
                    {...{
                      label: C.CMS_LABELS.UPLOAD_IMGS,
                      invalid: errors[FORMIK_HELPER.IMAGES_URL],
                      id: FORMIK_HELPER.IMAGES_URL,
                      name: FORMIK_HELPER.IMAGES_URL,
                      type: CMS_INPUT_TYPES.FILE,
                      onChange: (event) => {
                        imageChangeHandler(event, FORMIK_HELPER.IMAGES_URL);
                      },
                    }}
                  />
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
                  <label htmlFor={FORMIK_HELPER.CREW}>
                    {C.CMS_LABELS.CREW}
                  </label>
                  <CustomSelect
                    {...{
                      name: FORMIK_HELPER.CREW,
                      placeholder: CMS_INPUT_PLACEHOLDERS.CREW,
                      invalid: errors[FORMIK_HELPER.CREW],
                      isDisabled: status < 50,
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

                <div className={"form-control editor"}>
                  <label>{C.CMS_LABELS.CONTENT}</label>
                  <CustomEditor
                    {...{
                      propName: FORMIK_HELPER.EDITOR,
                      onChangeEditor: setFieldValue,
                    }}
                  />
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
                  disabled: !image || isLoading || !isValid,
                  onClick: handleSubmit,
                }}
              >
                {C.GENERAL_CONSTANTS.ADD}
              </Button>
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};

export default AddNews;
