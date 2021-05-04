import React, { useEffect } from "react";
import Select from "react-select";
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
                <label htmlFor="title">Title</label>
                <input
                  id="title"
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
                <label htmlFor="subtitle">Subtitle</label>
                <input
                  id="subtitle"
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
                <label htmlFor="city">City</label>
                <Select
                  {...{
                    id: "city",
                    name: "city",
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
                <label htmlFor="place">Place</label>
                <input
                  id="place"
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
                <label htmlFor="date">Date</label>
                <input
                  id="date"
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
                <label htmlFor="time">Time</label>
                <input
                  id="time"
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
                <label htmlFor="imgURL">Img URL</label>
                <input
                  id="imgURL"
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
                <label htmlFor="link">Link</label>
                <input
                  id="link"
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
                <label htmlFor="language">Lang</label>
                <Select
                  {...{
                    id: "language",
                    name: "language",
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
                <label htmlFor="crew">Crew</label>
                <Select
                  {...{
                    id: "crew",
                    name: "crew",
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
                <label htmlFor="content">Info</label>
                <textarea
                  id="content"
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
