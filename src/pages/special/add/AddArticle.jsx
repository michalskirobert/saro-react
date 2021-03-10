import React from "react";
import { Button } from "react-bootstrap";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useContainer } from "./container";

import { Editor } from "@tinymce/tinymce-react";

const lang = [
  {
    lang: "en",
  },
  {
    lang: "ja",
  },
];

const people = [
  {
    id: 1,
    name: "Robert",
  },
  {
    id: 22,
    name: "xxx",
  },
];

const categories = [
  {
    id: 1,
    name: "Events",
  },
  {
    id: 2,
    name: "Food",
  },
  {
    id: 3,
    name: "Traditions",
  },
];

const AddArticle = () => {
  const {
    handlerArticle,
    handleEdtiorChange,
    query,
    title,
    setTitle,
    setCurrLanguage,
    setCurrCrew,
    setCurrCategory,
    alert,
    isLoading,
  } = useContainer();
  return (
    <section className="section add-article">
      {alert && <CmsAlert />}
      <form className="cms" onSubmit={handlerArticle}>
        <h2 class="main-title">Add event</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <select id="crew" onChange={(e) => setCurrCrew(e.target.value)}>
              {people.map(({ name, id }) => {
                return (
                  <option key={id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              onChange={(e) => setCurrCategory(e.target.value)}
            >
              {categories.map(({ name, id }) => {
                return (
                  <option key={id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              onChange={(e) => setCurrLanguage(e.target.value)}
            >
              {lang.map((item, index) => {
                return (
                  <option key={index} value={item.lang}>
                    {item.lang}
                  </option>
                );
              })}
            </select>
          </div>
        </section>

        <section className="editor">
          <Editor
            apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
            initialValue={query}
            init={{
              plugins: [
                "a11ychecker advcode advlist autolink link help imagetools image code lists charmap print preview hr anchor pagebreak",
                " lists link linkchecker media mediaembed noneditable powerpaste preview",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table emoticons template paste help",
              ],
              a_plugin_option: true,
              a_configuration_option: 400,
              image_title: true,
              automatic_uploads: true,
              file_picker_types: "image",
              toolbar:
                "insertfile undo redo a11ycheck | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
              menu: {
                favs: {
                  title: "Shortcut",
                  items: "code visualaid | searchreplace | emoticons",
                },
              },
              menubar: "favs file edit view insert format tools table help",
              image_caption: true,
              powerpaste_allow_local_images: true,
            }}
            onChange={handleEdtiorChange}
          />
        </section>
        <Button type="submit" disabled={isLoading}>
          Add
        </Button>
      </form>
    </section>
  );
};

export default AddArticle;
