import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { Formik, Form } from "formik";
import { addArticleValidationScheme } from "./validation";

import CustomEditor from "@components/shared/custom-editor";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import { useContainer } from "./container";
import BackArrow from "@assets/images/components/forms/ArrowBendUpLeft.svg";

import { FORMIK_HELPER } from "./utils.js";

import * as C from "@utils/constants";
import * as S from "./styles";

const AddArticle = () => {
  const {
    alert,
    categories,
    handlerArticle,
    crew,
    imageChangeHandler,
    image,
    deleteImage,
    invalid,
  } = useContainer();

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validateOnMount: true,
        validationSchema: addArticleValidationScheme,
        onSubmit: (values) => handlerArticle(values),
        onSubmit: (values) => console.log(values),
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
        <section className="section add-article" style={{ paddingTop: "50px" }}>
          {alert && <CmsAlert />}
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
            <Breadcrumb.Item active>Add Article</Breadcrumb.Item>
          </Breadcrumb>
          <Link className="btn go-back" to="/panel">
            <img src={BackArrow} alt="Back" />
            <p>Go Back</p>
          </Link>
          <Form className="cms">
            <h2 className="main-title">Add Article</h2>
            <section className="form-container">
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  placeholder="add title"
                  type="text"
                  value={values[FORMIK_HELPER.TITLE]}
                  onChange={handleChange}
                />
                {errors[FORMIK_HELPER.TITLE] || touched[FORMIK_HELPER.TITLE] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TITLE]}
                  </F.Text>
                ) : null}
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
                {errors[FORMIK_HELPER.CREW] || touched[FORMIK_HELPER.CREW] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CREW]}
                  </F.Text>
                ) : null}
              </div>
              <div className="form-control">
                <label htmlFor="category">Category</label>
                <Select
                  {...{
                    id: "category",
                    name: "category",
                    options: categories.map((item) => ({
                      label: item,
                      value: item,
                    })),
                    onChange: (values) =>
                      setFieldValue(FORMIK_HELPER.CATEGORY, values.value),
                  }}
                />
                {errors[FORMIK_HELPER.CATEGORY] ||
                touched[FORMIK_HELPER.CATEGORY] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CATEGORY]}
                  </F.Text>
                ) : null}
              </div>
              <div className="form-control">
                <label htmlFor="language">Language</label>
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
                {errors[FORMIK_HELPER.LANGUAGE] ||
                touched[FORMIK_HELPER.LANGUAGE] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </F.Text>
                ) : null}
              </div>
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.IMG_URL}>
                  Upload cover image
                </label>
                <input
                  id={FORMIK_HELPER.IMG_URL}
                  name={FORMIK_HELPER.IMG_URL}
                  type="file"
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
                        X
                      </S.PreviewDelete>
                    </>
                  )}
                </S.PreviewContainer>

                <F.Text className="validation-alert">
                  {!invalid.errorMsg && !image && "Field required."}
                  {invalid && invalid.errorMsg}
                </F.Text>
              </div>
            </section>

            <section className="editor">
              <CustomEditor
                {...{
                  propName: FORMIK_HELPER.EDITOR,
                  onChangeEditor: setFieldValue,
                }}
              />
              {errors[FORMIK_HELPER.EDITOR] || touched[FORMIK_HELPER.EDITOR] ? (
                <F.Text className="validation-alert">
                  {errors[FORMIK_HELPER.EDITOR]}
                </F.Text>
              ) : null}
            </section>
            <Button
              className="submit-btn"
              type="submit"
              disabled={!isValid}
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

export default AddArticle;
