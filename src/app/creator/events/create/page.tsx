"use client";

// ** React Imports
import { useState } from "react";

// ** Third Party Imports
import { EditorState } from "draft-js";
import ReactDraftWysiwyg from "@/@core/components/react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "@/@core/styles/libs/react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";

// ** Component Import
// import ReactDraftWysiwyg from "src/@core/components/react-draft-wysiwyg";

const EditorControlled = () => {
  // ** State
  const [value, setValue] = useState(EditorState.createEmpty());

  const handleChange = (editorState: EditorState) => {
    setValue(editorState);
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    console.log("HTML Content:", htmlContent);
  };

  return (
    <EditorWrapper>
      <ReactDraftWysiwyg
        editorState={value}
        onEditorStateChange={handleChange}
        toolbar={{
          options: ["inline"],
        }}
      />
    </EditorWrapper>
  );
};

export default EditorControlled;
