import React, { useContext } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/addon/scroll/simplescrollbars.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/solarized.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/continuelist";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/trailingspace";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/indent-fold";
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint';

import { Controlled as ControlledEditor } from "react-codemirror2";
import { EditorStyles } from "../styles/EditorLayout";
import { EditorStateContext } from "../EditorContext";

const CodeEditor = (props) => {
  const { language, value, onChange } = props;
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  const state = useContext(EditorStateContext);  

  const height = "306px !important";
  return (
    <EditorStyles fontSize={state.fontSize} height={height}>
      <ControlledEditor
        style={{fontSize: "16px !important"}}
        className="code-editor"
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          styleActiveLine: true,
          gutters: [
            "CodeMirror-linenumbers",
            "CodeMirror-foldgutter",
          ],
          foldGutter: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
          matchTags: true,
          lineWrapping: true,
          smartIndent: true,
          lineNumbers: true,
          defaultTextHeight: 200,
          theme: state.theme ?? "material",
          mode: language,
          lineNumbers: true,
        }}
      />
    </EditorStyles>
  );
};

export default CodeEditor;
