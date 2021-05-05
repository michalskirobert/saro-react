import React, { useEffect } from "react";
import Select from "react-select";
import { useSelector } from "react-redux"
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiOutlineClose } from "react-icons/ai";

import { Formik, Form } from "formik";
import { addEventsValidationScheme } from "./validation";

import CmsAlert from "@components/shared/alerts/CmsAlert";
import { useContainer } from "./container";

import * as C from "@utils/constants";
import * as S from "./styles";
import { FORMIK_HELPER } from "./utils.js";

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
    invalid,
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
                <label htmlFor={FORMIK_HELPER.TITLE}>{C.CMS_LABELS.TITLE}</label>
                <input
                  id={FORMIK_HELPER.TITLE}
                  type="text"
                  value={values[FORMIK_HELPER.TITLE]}
                  placeholder="Add title"
                  onChange={handleChange}
                />
                {(errors[FORMIK_HELPER.TITLE] ||
                  touched[FORMIK_HELPER.TITLE]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TITLE]}
                  </F.Text>
                )}
              </div>

              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.SUBTITLE}>{C.CMS_LABELS.SUBTITLE}</label>
                <input
                  id={FORMIK_HELPER.SUBTITLE}
                  type="text"
                  value={values[FORMIK_HELPER.SUBTITLE]}
                  placeholder="Add subtitle"
                  onChange={handleChange}
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
                <Select
                  {...{
                    id: FORMIK_HELPER.CITY,
                    name: FORMIK_HELPER.CITY,
                    options: cities.map((item) => ({
                      label: item.city,
                      value: item.city,
                    })),
                    onChange: (values) =>
                      setFieldValue(FORMIK_HELPER.CITY, values.value),
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
                <label htmlFor={FORMIK_HELPER.PLACE}>{C.CMS_LABELS.PLACE}</label>
                <input
                  id={FORMIK_HELPER.PLACE}
                  placeholder="Add place"
                  type="text"
                  value={values[FORMIK_HELPER.PLACE]}
                  onChange={handleChange}
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
                  id={FORMIK_HELPER.DATE}
                  type="date"
                  value={values[FORMIK_HELPER.DATE]}
                  onChange={handleChange}
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
                  id={FORMIK_HELPER.TIME}
                  type="time"
                  value={values[FORMIK_HELPER.TIME]}
                  onChange={handleChange}
                />
                {(errors[FORMIK_HELPER.TIME] ||
                  touched[FORMIK_HELPER.TIME]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TIME]}
                  </F.Text>
                )}
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.IMG_URL}>{C.CMS_LABELS.IMG_URL}</label>
                <input
                  id={FORMIK_HELPER.IMG_URL}
                  type="file"
                  value={values[FORMIK_HELPER.IMG_URL]}
                  onChange={imageChangeHandler}
                />
                <S.PreviewContainer>
                  {image && (
                    <>
                      <S.PreviewImage src={image} alt="Picture preview" />
                      <S.PreviewDelete
                        type="button"
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
                  id={FORMIK_HELPER.LINK}
                  placeholder="Add link"
                  type="text"
                  value={values[FORMIK_HELPER.LINK]}
                  onChange={handleChange}
                />
                {(errors[FORMIK_HELPER.LINK] ||
                  touched[FORMIK_HELPER.LINK]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LINK]}
                  </F.Text>
                )}
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.LANGUAGE}>{C.CMS_LABELS.LANG}</label>
                <Select
                  {...{
                    id: FORMIK_HELPER.LANGUAGE,
                    name: FORMIK_HELPER.LANGUAGE,
                    options: C.GENERAL_CONSTANTS.LANGUAGES.map((item) => ({
                      label: item.label,
                      value: item.lang,
                    })),
                    onChange: (values) =>
                      setFieldValue(FORMIK_HELPER.LANGUAGE, values.value),
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
                <Select
                  {...{
                    id: FORMIK_HELPER.CREW,
                    name: FORMIK_HELPER.CREW,
                    options: crew.map((item) => ({
                      label: `${item.name} ${item.surname}`,
                      value: `${item.name} ${item.surname}`,
                    })),
                    onChange: (values) =>
                      setFieldValue(FORMIK_HELPER.CREW, values.value),
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
                <label htmlFor={FORMIK_HELPER.EDITOR}>{C.CMS_LABELS.CONTENT}</label>
                <textarea
                  id={FORMIK_HELPER.EDITOR}
                  placeholder="add event details"
                  value={values[FORMIK_HELPER.EDITOR]}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
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
              className="submit-btn"
              type="submit"
              disabled={!image || isLoading || !isValid}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default AddEvents;
