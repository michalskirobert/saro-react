import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";
import { firestore } from "../../../components/feature/firebase";

const AddNews = () => {
  const [query, setQuery] = useState("Simple text");
  const handleEdtiorChange = (e) => {
    setQuery(e.target.getContent());
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await firestore.collection("language").doc("en").collection("blog").add({
      type: query,
    });
  };

  return (
    <section className="section add-news">
      <form onSubmit={handlerSubmit}>
        <Editor
          apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
          initialValue={query}
          init={{
            plugins: [
              "advlist autolink link image lists charmap print preview hr anchor pagebreak",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "table emoticons template paste help",
            ],
            a_plugin_option: true,
            a_configuration_option: 400,
            toolbar:
              "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
            menu: {
              favs: {
                title: "Shortcut",
                items: "code visualaid | searchreplace | emoticons",
              },
            },
            menubar: "favs file edit view insert format tools table help",
          }}
          onChange={handleEdtiorChange}
        />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default AddNews;
