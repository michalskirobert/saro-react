import React, { useEffect } from "react";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiOutlineClose } from "react-icons/ai";

import { Formik, Form } from "formik";
import { addEventsValidationScheme } from "./validation";


import { CustomSelect } from "@components/shared/custom-select";
import CmsAlert from "@components/shared/alerts/CmsAlert";

import { useContainer } from "./container";

import * as C from "@utils/constants";
import {
  FORMIK_HELPER,
  CMS_INPUT_TYPES,
  CMS_INPUT_PLACEHOLDERS,
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
  const {
    alert,
    handleSubmit,
    crew,
    image,
    deleteImage,
    imageChangeHandler,
    isLoading,
    setImgName,
    imgName,
  } = useContainer();

  useEffect(() => {
    setImgName({ ...imgName, type: "events" });
    // eslint-disable-next-line
  }, []);

  return (
    <Formik
      {...{
        initialValues: { title: "", place: "", imgURL: "", link: "" },
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
        <section className="section saro-panel">
          {alert && <CmsAlert />}
          <Breadcrumb>
            <Breadcrumb.Item href={C.ROUTE_PATHS.HOME_ROUTE}>
              {C.GENERAL_CONSTANTS.HOME}
            </Breadcrumb.Item>
            <Breadcrumb.Item href={C.ROUTE_PATHS.PANEL_ROUTE}>
              {C.GENERAL_CONSTANTS.ADMIN_PANEL}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {C.GENERAL_CONSTANTS.ADD_EVENTS}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="main-title">{C.GENERAL_CONSTANTS.ADD_EVENTS}</h2>
          <Form className="cms">
            <section className="form-container">
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.TITLE}>
                  {C.CMS_LABELS.TITLE}
                </label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.TITLE] && "invalid",
                    id: FORMIK_HELPER.TITLE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.TITLE],
                    placeholder: CMS_INPUT_PLACEHOLDERS.TITLE,
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.TITLE] ||
                  touched[FORMIK_HELPER.TITLE]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TITLE]}
                  </F.Text>
                )}
              </div>

              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.SUBTITLE}>
                  {C.CMS_LABELS.SUBTITLE}
                </label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.SUBTITLE] && "invalid",
                    id: FORMIK_HELPER.SUBTITLE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.SUBTITLE],
                    placeholder: CMS_INPUT_PLACEHOLDERS.SUBTITLE,
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.SUBTITLE] ||
                  touched[FORMIK_HELPER.SUBTITLE]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.SUBTITLE]}
                  </F.Text>
                )}
              </div>

              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.CITY}>{C.CMS_LABELS.CITY}</label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.CITY,
                    placeholder: CMS_INPUT_PLACEHOLDERS.CITY,
                    invalid: !errors[FORMIK_HELPER.CITY],
                    options: cities.map(({ city }) => ({
                      label: city,
                      value: city,
                    })),
                    onChange: setFieldValue,
                  }}
                />
                {(errors[FORMIK_HELPER.CITY] ||
                  touched[FORMIK_HELPER.CITY]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CITY]}
                  </F.Text>
                )}
              </div>

              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.PLACE}>
                  {C.CMS_LABELS.PLACE}
                </label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.PLACE] && "invalid",
                    id: FORMIK_HELPER.PLACE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.PLACE,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.PLACE],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.PLACE] ||
                  touched[FORMIK_HELPER.PLACE]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.PLACE]}
                  </F.Text>
                )}
              </div>

              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.DATE}>{C.CMS_LABELS.DATE}</label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.DATE] && "invalid",
                    id: FORMIK_HELPER.DATE,
                    type: CMS_INPUT_TYPES.DATE,
                    value: values[FORMIK_HELPER.DATE],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.DATE] ||
                  touched[FORMIK_HELPER.DATE]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.DATE]}
                  </F.Text>
                )}
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.TIME}>{C.CMS_LABELS.TIME}</label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.TIME] && "invalid",
                    id: FORMIK_HELPER.TIME,
                    type: CMS_INPUT_TYPES.TIME,
                    value: values[FORMIK_HELPER.TIME],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.TIME] ||
                  touched[FORMIK_HELPER.TIME]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TIME]}
                  </F.Text>
                )}
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.IMG_URL}>
                  {C.CMS_LABELS.IMG_URL}
                </label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.IMG_URL] && "invalid",
                    id: FORMIK_HELPER.IMG_URL,
                    type: CMS_INPUT_TYPES.FILE,
                    value: values[FORMIK_HELPER.IMG_URL],
                    onChange: imageChangeHandler,
                  }}
                />
                <S.PreviewContainer>
                  {image && (
                    <>
                      <S.PreviewImage src={image} alt="Picture preview" />
                      <S.PreviewDelete
                        type={CMS_INPUT_TYPES.BUTTON}
                        onClick={() => deleteImage(image)}
                      >
                        <AiOutlineClose />
                      </S.PreviewDelete>
                    </>
                  )}
                </S.PreviewContainer>
                <F.Text className="validation-alert"></F.Text>
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.LINK}>{C.CMS_LABELS.LINK}</label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.LINK] && "invalid",
                    id: FORMIK_HELPER.LINK,
                    placeholder: CMS_INPUT_PLACEHOLDERS.LINK,
                    type: CMS_INPUT_TYPES.TEXT,
                    value: values[FORMIK_HELPER.LINK],
                    onChange: handleChange,
                  }}
                />
                {(errors[FORMIK_HELPER.LINK] ||
                  touched[FORMIK_HELPER.LINK]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LINK]}
                  </F.Text>
                )}
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.LANGUAGE}>
                  {C.CMS_LABELS.LANG}
                </label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.LANGUAGE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.LANGUAGE,
                    invalid: !errors[FORMIK_HELPER.LANGUAGE],
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
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </F.Text>
                )}
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.CREW}>{C.CMS_LABELS.CREW}</label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.CREW,
                    invalid: !errors[FORMIK_HELPER.CREW],
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
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CREW]}
                  </F.Text>
                )}
              </div>
              <div className="form-control form-info">
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
                  <F.Text className="validation-alert">
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
  );
};

export default AddEvents;
