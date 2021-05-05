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
                {C.GENERAL_CONSTANTS.ADD_NEWS}
              </Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="main-title">{C.GENERAL_CONSTANTS.ADD_NEWS}</h2>
            <Form className="cms">
              <section className="form-container">
                <div className="form-control">
                  <label htmlFor={FORMIK_HELPER.TITLE}>{C.CMS_LABELS.TITLE}</label>
                  <input
                    id={FORMIK_HELPER.TITLE}
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
                  <label htmlFor={FORMIK_HELPER.SUBTITLE}>{C.CMS_LABELS.SUBTITLE}</label>
                  <input
                    id={FORMIK_HELPER.SUBTITLE}
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
                  {C.CMS_LABELS.UPLOAD_COVER_IMG}
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
                  <label htmlFor={FORMIK_HELPER.CREW}>{C.CMS_LABELS.CREW}</label>
                  <Select
                    {...{
                      id: FORMIK_HELPER.CREW,
                      name: FORMIK_HELPER.CREW,
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
                  <label htmlFor={FORMIK_HELPER.CATEGORY}>{C.CMS_LABELS.CATEGORY}</label>
                  <Select
                    {...{
                      id: FORMIK_HELPER.CATEGORY,
                      name: FORMIK_HELPER.CATEGORY,
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
                  {C.CMS_LABELS.UPLOAD_IMGS}
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
                <div className="form-control editor">
                  <label>{C.CMS_LABELS.CONTENT}</label>
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
