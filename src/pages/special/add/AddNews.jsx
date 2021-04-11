import React, { useEffect } from "react";
import Select from "react-select";
import { Button, Form as F } from "react-bootstrap";

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
    handlerNews,
    imageChangeHandler,
    isLoading,
    image,
    categories,
    invalid,
    deleteImage,
    setImgName,
    imgName,
    imagesName,
    setImagesName,
    images,
    setImages,
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
            handlerNews(values);
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
          <section className="section add-news" style={{ paddingTop: "50px" }}>
            {alert && <CmsAlert />}          
 
            <Form className="cms">
              <h2 className="main-title">Add News</h2>
              <div className="wrapper">
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
                    {errors[FORMIK_HELPER.TITLE] ||
                    touched[FORMIK_HELPER.TITLE] ? (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.TITLE]}
                      </F.Text>
                    ) : null}
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
                    {errors[FORMIK_HELPER.SUBTITLE] ||
                    touched[FORMIK_HELPER.SUBTITLE] ? (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.SUBTITLE]}
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
                    {errors[FORMIK_HELPER.CREW] ||
                    touched[FORMIK_HELPER.CREW] ? (
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
                            X
                          </S.PreviewDelete>
                        </>
                      )}
                    </S.PreviewContainer>

                    <F.Text className="validation-alert">
                      {!invalid.errorMsg && !images && "Field required."}
                      {invalid && invalid.errorMsg}
                    </F.Text>
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
                </section>
              </div>
              <section className="editor">
                <CustomEditor
                  {...{
                    propName: FORMIK_HELPER.EDITOR,
                    onChangeEditor: setFieldValue,
                  }}
                />
                {errors[FORMIK_HELPER.EDITOR] ||
                touched[FORMIK_HELPER.EDITOR] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.EDITOR]}
                  </F.Text>
                ) : null}
              </section>
              <Button
                className="submit-btn"
                type="submit"
                disabled={!image || invalid.errorMsg || isLoading || !isValid}
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
