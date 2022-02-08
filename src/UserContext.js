import { createContext, useReducer, useEffect } from "react";

export const UserStateContext = createContext();
export const UserDispatchContext = createContext();

// const initialState = {
//   isAuth: false,
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        isAuth: true,
        selected: state.selected,
        pageId: state.pageId
      };
    }
    case "LOGOUT": {
      return {
        isAuth: false,
        selected: state.selected,
        pageId: state.pageId
      };
    }
    case "SELECT": {
      if(state.selected.includes(action.id)) {
        const index = state.selected.indexOf(action.id);
        if (index > -1) {
          let array = state.selected
          array.splice(index, 1);
          return {
            isAuth: state.isAuth,
            selected: array,
            pageId: state.pageId
          }
        }
      } else {
        return {
          isAuth: state.isAuth,
          selected: [...state.selected, action.id],
          pageId: state.pageId
        }
      }
    }
    case "UNSELECT": {
      return {
        isAuth: state.isAuth,
        selected: [],
        pageId: state.pageId
      }
    }
    case "CLIP": {
      return {
        isAuth: state.isAuth,
        selected: state.selected,
        pageId: action.pageId ? action.pageId: null
      }
    }
    default: {
      throw new Error("Unhandled action type.");
    }
  }
};
 // case "REMOVE": {
    //   const ids = action.ids;
    //   let temp = state.selected;
    //   for(let i = 0;i<ids.length; i++) {
    //     const index = temp.indexOf(ids[i]);
    //     if (index > -1) {
    //       array.splice(index, 1);
    //     }
    //   }
      
    //   return {
    //     isAuth: state.isAuth,
    //     selected: array
    //   }
    // }
const UserProvider = ({ children, isAuthenticated }) => {
  const [state, dispatch] = useReducer(reducer, { isAuth: isAuthenticated, selected: [] , pageId: null});

  useEffect(() => {
    if (isAuthenticated) {
      dispatch({ type: "LOGIN" });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, [isAuthenticated]);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserProvider;
