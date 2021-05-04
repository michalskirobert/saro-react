import React, { useEffect } from "react";
import Select from "react-select";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiOutlineClose } from "react-icons/ai";

import { Formik, Form } from "formik";
import { addArticleValidationScheme } from "./validation";

import CustomEditor from "@components/shared/custom-editor";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import { useContainer } from "./container";

import { FORMIK_HELPER } from "./utils.js";

import * as C from "@utils/constants";

const AddArticle = () => {
  const {
    alert,
    categories,
    handleSubmit,
    crew,
    imageChangeHandler,
    image,
    deleteImage,
    invalid,
    imagesName,
    setImagesName,
    images,
    setImgName,
    imgName,
    handleEditorChange,
    value,
  } = useContainer();

  useEffect(() => {
    setImgName({ ...imgName, type: "article" });
    setImagesName({ ...imagesName, type: "article", kind: "images" });
    // eslint-disable-next-line
  }, []);

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        // validateOnMount: true,
        // validationSchema: addArticleValidationScheme,
        onSubmit: (values) => handleSubmit(values),
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
              {C.GENERAL_CONSTANTS.ADD_ARTICLES}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="main-title">{C.GENERAL_CONSTANTS.ADD_ARTICLES}</h2>
          <Form className="cms">            
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
                {(errors[FORMIK_HELPER.TITLE] ||
                  touched[FORMIK_HELPER.TITLE]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TITLE]}
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
                {(errors[FORMIK_HELPER.CATEGORY] ||
                  touched[FORMIK_HELPER.CATEGORY]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CATEGORY]}
                  </F.Text>
                )}
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
                {(errors[FORMIK_HELPER.LANGUAGE] ||
                  touched[FORMIK_HELPER.LANGUAGE]) && (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </F.Text>
                )}
              </div>
              {/* <div className="form-control">
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
                        <AiOutlineClose />
                      </S.PreviewDelete>
                    </>
                  )}
                </S.PreviewContainer>

                <F.Text className="validation-alert">
                  {!invalid.errorMsg && !image && "Field required."}
                  {invalid && invalid.errorMsg}
                </F.Text>
              </div> */}
              {/* <div className="form-control">
                <label htmlFor={FORMIK_HELPER.IMAGES_URL}>Upload images</label>
                <input
                  id={FORMIK_HELPER.IMAGES_URL}
                  name={FORMIK_HELPER.IMAGES_URL}
                  type="file"
                  onChange={(e) => {
                    imageChangeHandler(e, FORMIK_HELPER.IMAGES_URL);
                  }}
                />
                <S.PreviewContainer>
                  {images && (
                    <>
                      <S.PreviewImage src={images} alt="Picture preview" />
                      <S.PreviewDelete
                        type="button"
                        onClick={() => deleteImage(images)}
                      >
                        <AiOutlineClose />
                      </S.PreviewDelete>
                    </>
                  )}
                </S.PreviewContainer>

                <F.Text className="validation-alert">
                  {!invalid.errorMsg && !images && "Field required."}
                  {invalid && invalid.errorMsg}
                </F.Text>
              </div> */}
              <div className="form-control editor">
                <label>Info</label>
                <CustomEditor
                  {...{
                    propName: FORMIK_HELPER.EDITOR,
                    value: value[FORMIK_HELPER.EDITOR],
                    onChangeEditor: handleEditorChange,
                  }}
                />
                <F.Text className="validation-alert">
                  {!!value.length && errors[FORMIK_HELPER.EDITOR]}
                </F.Text>
              </div>
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
