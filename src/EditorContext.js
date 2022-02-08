import { createContext, useReducer, useEffect } from "react";

export const EditorStateContext = createContext();
export const EditorDispatchContext = createContext();

// const initialState = {
//   isAuth: false,
// };

const reducer = (state, action) => {
  return {
      fontSize: action.fontSize ?? state.fontSize,
      theme: action.theme  ?? state.theme
  }
};

const EditorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { fontSize: '16px', theme: 'monokai'});

  return (
    <EditorStateContext.Provider value={state}>
      <EditorDispatchContext.Provider value={dispatch}>
        {children}
      </EditorDispatchContext.Provider>
    </EditorStateContext.Provider>
  );
};

export default EditorProvider;
