import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const CustomEditor = ({
  value,
  onChangeEditor,
  key,
  style,
  propName,
  editorValue,
}) => {
  return (
    <Editor
      {...{
        apiKey: process.env.REACT_APP_TINY_API_KEY,
        key,
        className: `editor-${style}`,
        initialValue: value,
        value: editorValue,
        onChange: (e) => onChangeEditor([propName], e.target.getContent()),
      }}
    />
  );
};

export default CustomEditor;
