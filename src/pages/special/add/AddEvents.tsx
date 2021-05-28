import React from "react";
import { Breadcrumb, BreadcrumbItem, FormText } from "reactstrap";
import { AiOutlineClose } from "react-icons/ai";

import { Form, Formik } from "formik";
import { addEventsValidationScheme } from "./validation";

import { CustomSelect } from "@components/shared/custom-select";
import { CustomInput } from "@components/shared/custom-inputs";
import { CustomButton } from "@components/shared/custom-button";

import { useAddContainer } from "./container";

import * as C from "@utils/constants";
import {
  CMS_INPUT_PLACEHOLDERS,
  CMS_INPUT_TYPES,
  FORMIK_HELPER,
} from "./utils";

import * as S from "./styles";
import { NCMS } from "@namespace/cms";

const cities = [
  {
    city: "Warsaw",
  },
  {
    city: "Cracow",
  },
];

const AddEvents = (): JSX.Element => {
  const {
    status,
    handleSubmit,
    crew,
    image,
    deleteImage,
    imageChangeHandler,
    isLoading,
  } = useAddContainer();

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validateOnMount: true,
        validationSchema: addEventsValidationScheme,
        onSubmit: (values) => {
          handleSubmit(values as NCMS.TDefaultBodyValue);
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
                    invalid: !!errors[FORMIK_HELPER.TITLE],
                    id: FORMIK_HELPER.TITLE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.TITLE],
                    placeholder: CMS_INPUT_PLACEHOLDERS.TITLE,
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.TITLE] ||
                  touched[FORMIK_HELPER.TITLE]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.TITLE]}
                  </FormText>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.SUBTITLE,
                    invalid: !!errors[FORMIK_HELPER.SUBTITLE],
                    id: FORMIK_HELPER.SUBTITLE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.SUBTITLE],
                    placeholder: CMS_INPUT_PLACEHOLDERS.SUBTITLE,
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.SUBTITLE] ||
                  touched[FORMIK_HELPER.SUBTITLE]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.SUBTITLE]}
                  </FormText>
                )}
              </div>

              <div className={"form-control"}>               
                <CustomSelect
                  {...{
                    labelText: C.CMS_LABELS.CITY,
                    name: FORMIK_HELPER.CITY,
                    placeholder: CMS_INPUT_PLACEHOLDERS.CITY,
                    invalid: !!errors[FORMIK_HELPER.CITY],
                    options: cities.map(({ city }) => ({
                      label: city,
                      value: city,
                    })),
                    onChange: setFieldValue,
                  }}
                />
                {(errors[FORMIK_HELPER.CITY] ||
                  touched[FORMIK_HELPER.CITY]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.CITY]}
                  </FormText>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.PLACE,
                    invalid: !!errors[FORMIK_HELPER.PLACE],
                    id: FORMIK_HELPER.PLACE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.PLACE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.PLACE],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.PLACE] ||
                  touched[FORMIK_HELPER.PLACE]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.PLACE]}
                  </FormText>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.DATE,
                    invalid: !!errors[FORMIK_HELPER.DATE],
                    id: FORMIK_HELPER.DATE,
                    type: CMS_INPUT_TYPES.DATE,
                    value: values[FORMIK_HELPER.DATE],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.DATE] ||
                  touched[FORMIK_HELPER.DATE]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.DATE]}
                  </FormText>
                )}
              </div>
              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.TIME,
                    invalid: !!errors[FORMIK_HELPER.TIME],
                    id: FORMIK_HELPER.TIME,
                    type: CMS_INPUT_TYPES.TIME,
                    value: values[FORMIK_HELPER.TIME],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.TIME] ||
                  touched[FORMIK_HELPER.TIME]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.TIME]}
                  </FormText>
                )}
              </div>
              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.LINK,
                    invalid: !!errors[FORMIK_HELPER.LINK],
                    id: FORMIK_HELPER.LINK,
                    placeholder: CMS_INPUT_PLACEHOLDERS.LINK,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.LINK],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.LINK] ||
                  touched[FORMIK_HELPER.LINK]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.LINK]}
                  </FormText>
                )}
              </div>

              <div className={"form-control"}>
                <CustomInput
                  {...{
                    label: C.CMS_LABELS.IMG_URL,
                    invalid: !!errors[FORMIK_HELPER.IMG_URL],
                    id: FORMIK_HELPER.IMG_URL,
                    type: "file",
                    value: values[FORMIK_HELPER.IMG_URL],
                    onChange: (event: React.SyntheticEvent<EventTarget>) =>
                      imageChangeHandler(event, false),
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
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.IMG_URL]}
                  </FormText>
                )}
              </div>

              <div className={"form-control"}>          
                <CustomSelect
                  {...{
                    labelText: C.CMS_LABELS.LANG,
                    name: FORMIK_HELPER.LANGUAGE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.LANGUAGE,
                    invalid: !!errors[FORMIK_HELPER.LANGUAGE],
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
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </FormText>
                )}
              </div>
              <div className={"form-control"}>           
                <CustomSelect
                  {...{
                    labelText: C.CMS_LABELS.CREW,
                    name: FORMIK_HELPER.CREW,
                    invalid: !!errors[FORMIK_HELPER.CREW],
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
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.CREW]}
                  </FormText>
                )}
              </div>
              <div className={"form-control form-info"}>
                <div className={"form-group"}>
                <label htmlFor={FORMIK_HELPER.EDITOR}>
                  {C.CMS_LABELS.CONTENT}
                </label>
                <textarea
                  {...{
                    id: FORMIK_HELPER.EDITOR,
                    placeholder: CMS_INPUT_PLACEHOLDERS.EDITOR,
                    value: values[FORMIK_HELPER.EDITOR],
                    onChange: handleChange,
                    cols: 30,
                    rows: 10,
                  }}
                />
                </div>
                {(errors[FORMIK_HELPER.EDITOR] ||
                  touched[FORMIK_HELPER.EDITOR]) && (
                  <FormText className={"validation-alert"}>
                    {errors[FORMIK_HELPER.EDITOR]}
                  </FormText>
                )}
              </div>
            </section>

            <CustomButton
              {...{
                className: "submit-btn",
                type: CMS_INPUT_TYPES.SUBMIT,
                disabled: !image || isLoading || !isValid,
                onClick: handleSubmit,
                content: C.GENERAL_CONSTANTS.ADD,
              }}
            />
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default AddEvents;
