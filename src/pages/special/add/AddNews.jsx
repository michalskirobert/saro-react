import React, { useEffect } from "react";
import Select from "react-select";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiOutlineClose } from "react-icons/ai";

import { Formik, Form } from "formik";
import { addNewsValidationScheme } from "./validation";

import CustomEditor from "@components/shared/custom-editor";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import { useContainer } from "./container";
import { FORMIK_HELPER } from "./utils.js";

import * as C from "@utils/constants";
import * as S from "./styles";

const AddNews = () => {
  const {
    alert,
    crew,
    handleSubmit,
    imageChangeHandler,
    isLoading,
    image,
    categories,
    deleteImage,
    setImgName,
    imgName,
    imagesName,
    setImagesName,
    images,
  } = useContainer();

  useEffect(() => {
    setImgName({ ...imgName, type: "news" });
    setImagesName({ ...imagesName, type: "news", kind: "images" });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Formik
        {...{
          initialValues: { title: "" },
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
          <section className="section add-news">
            {alert && <CmsAlert />}
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
              <Breadcrumb.Item active>Add news</Breadcrumb.Item>
            </Breadcrumb>

            <Form className="cms">
              <h2 className="main-title">Add News</h2>
              <section className="form-container">
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    placeholder="add title"
                    type="text"
                    autoComplete="off"
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
                  <label htmlFor="subtitle">Subtitle</label>
                  <input
                    id="subtitle"
                    placeholder="add subtitle"
                    type="text"
                    autoComplete="off"
                    value={values[FORMIK_HELPER.SUBTITLE]}
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

                  <F.Text className="validation-alert"></F.Text>
                </div>
                <div className="form-control">
                  <label htmlFor="crew">Crew</label>
                  <Select
                    {...{
                      id: "crew",
                      name: "crew",
                      options: crew.map(({ name, surname }) => ({
                        label: `${name} ${surname}`,
                        value: `${name} ${surname}`,
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
                  <label htmlFor={FORMIK_HELPER.IMAGES_URL}>
                    Upload images
                  </label>
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

                  <F.Text className="validation-alert"></F.Text>
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
                <div className="form-control editor">
                  <label>Content</label>
                  <CustomEditor
                    {...{
                      propName: FORMIK_HELPER.EDITOR,
                      onChangeEditor: setFieldValue,
                    }}
                  />
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
    </>
  );
};

export default AddNews;
