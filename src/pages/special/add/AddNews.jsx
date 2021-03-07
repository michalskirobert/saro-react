import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";
import { firestore } from "../../../components/feature/firebase";

const lang = [
  {
    lang: "en",
  },
  {
    lang: "ja",
  },
];

const crew = [
  {
    id: 1,
    name: "Robert",
  },
  {
    id: 22,
    name: "xxx",
  },
];

const AddNews = () => {
  const [query, setQuery] = useState("Simple text");
  const [title, setTitle] = useState("Title");
  const [language, setLanguage] = useState("");
d
  const handleEdtiorChange = (e) => {
    setQuery(e.target.getContent());
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection("language").doc("en").collection("blog").add({
        type: query,
      });
    } catch (error) {

    }
  };

  return (
    <section className="section add-news">
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select onChange={(e => setCrew(e.target.value)}>
          {crew.map(({ name, id }) => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => setLanguage(e.target.value)}>
          {lang.map((item, index) => {
            return (
              <option key={index} value={item.lang}>
                {item.lang}
              </option>
            );
          })}
        </select>
        <Editor
          apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
          initialValue={query}
          init={{
            width: "100vw",
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
      </form>
      <Button type="submit">Add</Button>
    </section>
  );
};

export default AddNews;
