import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const CustomEditor = ({
  value,
  onChangeEditor,
  key,
  style,
  propName,
  initialValue
}: any): JSX.Element => {
  return (
    <Editor
      {...{
        apiKey: process.env.REACT_APP_TINY_API_KEY,
        key,
        className: `editor-${style}`,
        initialValue,
        value,
        onChange: (e) =>
          onChangeEditor &&
          onChangeEditor(propName as string, e.target.getContent() as string),
      }}
    />
  );
};

export default CustomEditor;
