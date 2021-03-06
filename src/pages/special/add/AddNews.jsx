import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";
import { firestore } from "../../../components/feature/firebase";
import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useSelector, useDispatch } from "react-redux";
import { cmsActions } from "./../../../_actions";

const AddNews = () => {
  const [query, setQuery] = useState("Simple text");
  const [title, setTitle] = useState("Title");
  const isAlert = useSelector((state) => state.CMS.alert);
  const isLoading = useSelector((state) => state.CMS.isLoading);
  const dispatch = useDispatch();

  const handleEdtiorChange = (e) => {
    setQuery(e.target.getContent());
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(cmsActions.addNewsReq());
      await firestore.collection("language").doc("en").collection("news").add({
        title: title,
        author: "test",
        avatarURL: "https://via.placeholder.com/50px",
        date: new Date().toLocaleString(),
        content: query,
        id: 1,
        imageURL: "https://via.placeholder.com/50px",
      });
      dispatch(cmsActions.addNewsSuccess());
    } catch (error) {
      dispatch(cmsActions.addNewsFailure());
    }
    setQuery("");
  };

  return (
    <section className="section add-news">
      {isAlert && <CmsAlert />}
      <form onSubmit={handlerSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
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
        <Button type="submit" disabled={isLoading && true}>
          Send
        </Button>
      </form>
    </section>
  );
};

export default AddNews;
