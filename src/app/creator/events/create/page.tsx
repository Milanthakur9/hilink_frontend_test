// "use client";
// // ** React Imports
// import { useState } from "react";

// // ** Third Party Imports
// import { EditorState } from "draft-js";
// import ReactDraftWysiwyg from "@/@core/components/react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorWrapper } from "@/@core/styles/libs/react-draft-wysiwyg";
// import { stateToHTML } from "draft-js-export-html";
// import parse, {
//   domToReact,
//   HTMLReactParserOptions,
//   Element,
//   DOMNode,
// } from "html-react-parser";

// // ** Component Import
// // import ReactDraftWysiwyg from "src/@core/components/react-draft-wysiwyg";

// const EditorControlled = () => {
//   // ** State
//   const [value, setValue] = useState(EditorState.createEmpty());

//   const options: HTMLReactParserOptions = {
//     replace: (node: DOMNode) => {
//       if (!(node instanceof Element)) {
//         return;
//       }

//       const element = node as Element;

//       switch (element.name) {
//         case "p":
//           return (
//             <p style={{ marginBottom: "10px", color: "blue" }}>
//               {domToReact(element.children, options)}
//             </p>
//           );
//         case "strong":
//           return (
//             <strong style={{ fontWeight: "bold", color: "green" }}>
//               {domToReact(element.children, options)}
//             </strong>
//           );
//         default:
//           return;
//       }
//     },
//   };

//   const handleChange = (editorState: EditorState) => {
//     setValue(editorState);
//     // const contentState = editorState.getCurrentContent();
//     // const htmlContent = stateToHTML(contentState);
//     // console.log("HTML Content:", htmlContent);
//   };

//   console.log(stateToHTML(value.getCurrentContent()));

//   return (
//     <>
//       <EditorWrapper>
//         <ReactDraftWysiwyg
//           editorState={value}
//           onEditorStateChange={handleChange}
//           toolbar={{
//             options: ["inline"],
//           }}
//         />
//       </EditorWrapper>
//       {<div>{parse(`${stateToHTML(value.getCurrentContent())}`, options)}</div>}
//     </>
//   );
// };

// export default EditorControlled;

"use client";

import { useState } from "react";
import { EditorState } from "draft-js";
import ReactDraftWysiwyg from "@/@core/components/react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "@/@core/styles/libs/react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
  Text,
  Comment,
} from "html-react-parser";

type ValidDOMNode = Element | Text | Comment;

const EditorControlled = () => {
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

  const renderContent = () => {
    try {
      const htmlContent = stateToHTML(value.getCurrentContent());
      return parse(htmlContent, options);
    } catch (error) {
      console.error("Error parsing content:", error);
      return <div>Error rendering content</div>;
    }
  };

  return (
    <>
      <EditorWrapper>
        <ReactDraftWysiwyg
          editorState={value}
          onEditorStateChange={handleChange}
          toolbar={{
            options: ["inline"],
          }}
        />
      </EditorWrapper>
      <div>{renderContent()}</div>
    </>
  );
};

export default EditorControlled;

// Types for components and props

// interface ToolbarOptions {
//   options: Array<
//     | "inline"
//     | "blockType"
//     | "fontSize"
//     | "fontFamily"
//     | "list"
//     | "textAlign"
//     | "colorPicker"
//     | "link"
//     | "embedded"
//     | "emoji"
//     | "image"
//     | "remove"
//     | "history"
//   >;
// }

// Helper type for checking if a node is an Element
// function isElement(node: DOMNode): node is Element {
//   return node.type === "tag" || node.type === "script" || node.type === "style";
// }

// // Optional: Type guard for valid DOM nodes
// function isValidDOMNode(node: unknown): node is ValidDOMNode {
//   if (!node || typeof node !== "object") return false;
//   return (
//     "type" in node &&
//     ((node as ValidDOMNode).type === "tag" ||
//       (node as ValidDOMNode).type === "text" ||
//       (node as ValidDOMNode).type === "comment")
//   );
// }
