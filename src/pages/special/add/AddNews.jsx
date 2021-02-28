import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const AddNews = () => {
  return (
    <section className="section add-news">
      <Editor 
 apiKey={`${env.process.REACT_APP_TINY_API_KEY}`}
 init={{ /* your other settings */ }}
/>
    </section>
  );
};

export default AddNews;
