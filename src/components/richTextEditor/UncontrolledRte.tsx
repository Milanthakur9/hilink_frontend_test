"use client";

import { useState } from "react";
import { EditorState } from "draft-js";
import ReactDraftWysiwyg from "@/@core/components/react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "@/@core/styles/libs/react-draft-wysiwyg";
// import { stateToHTML } from "draft-js-export-html";
import {
  //  parse,
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
  Text,
  Comment,
} from "html-react-parser";
import { Box } from "@mui/material";

type ValidDOMNode = Element | Text | Comment;

const UncontrolledRte = () => {
  const [value, setValue] = useState(EditorState.createEmpty());

  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      const node = domNode as Element;

      if (!("name" in node)) {
        return;
      }

      switch (node.name) {
        case "p":
          return (
            <p style={{ marginBottom: "10px", color: "blue" }}>
              {domToReact(node.children as ValidDOMNode[], options)}
            </p>
          );
        case "strong":
          return (
            <strong style={{ fontWeight: "bold", color: "green" }}>
              {domToReact(node.children as ValidDOMNode[], options)}
            </strong>
          );
        default:
          return undefined;
      }
    },
  };

  const handleChange = (editorState: EditorState) => {
    setValue(editorState);
  };

  //   const renderContent = () => {
  //     try {
  //       const htmlContent = stateToHTML(value.getCurrentContent());
  //       return parse(htmlContent, options);
  //     } catch (error) {
  //       console.error("Error parsing content:", error);
  //       return <div>Error rendering content</div>;
  //     }
  //   };

  return (
    <Box sx={{ my: 2 }}>
      <EditorWrapper>
        <ReactDraftWysiwyg
          editorState={value}
          onEditorStateChange={handleChange}
          toolbar={{
            options: ["inline"],
          }}
        />
      </EditorWrapper>
      {/* <div>{renderContent()}</div> */}
    </Box>
  );
};

export default UncontrolledRte;