import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { NCustomItems } from "src/core/types";

const CustomEditor = ({
  value,
  onChangeEditor,
  key,
  style,
  propName,
  initialValue,
}: Partial<NCustomItems.TCustomEditor>): JSX.Element => {
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
          onChangeEditor(propName as string, e.target.getContent()),
      }}
    />
  );
};

export default CustomEditor;
