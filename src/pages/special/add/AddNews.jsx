import React from "react";
import Select from "react-select";
import { Button } from "react-bootstrap";

import { BUTTONS_HELPER } from "./utils";
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

const AddNews = () => {
  const {
    handlerSubmit,
    handleEdtiorChange,
    content,
    title,
    setTitle,
    setLanguage,
    setCrew,
    setCategory,
    alert,
    isLoading,
  } = useContainer();

  return (
    <section className="section add-news">
      {alert && <CmsAlert />}
      <form className="cms" onSubmit={handlerSubmit}>
        <h2 className="main-title">Add News</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              placeholder="add title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <Select
              {...{
                id: "crew",
                name: "crew",
                defaultValue: people[0],
                options: people.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (options) => setCrew(options.value),
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <Select
              {...{
                id: "category",
                name: "category",
                defaultValue: categories[0],
                options: categories.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (options) => setCategory(options.value),
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="language">Language</label>
            <Select
              {...{
                id: "lang",
                name: "lang",
                defaultValue: lang[0],
                options: lang.map((item) => ({
                  label: item.lang,
                  value: item.lang,
                })),
                onChange: (options) => setLanguage(options.value),
              }}
            />
          </div>
        </section>
        <section className="editor">
          <Editor
            apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
            initialValue={content}
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

export default AddNews;
