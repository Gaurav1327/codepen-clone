import {
  Paper,
  Grid,
  AppBar,
  Tabs,
  Tab,
  Select,
  Box,
  Typography,
  Tooltip,
  Chip,
  Button,
} from "@mui/material";
import { NavStyles } from "../styles/EditorLayout";
import clsx from "clsx";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useContext, useState } from "react";
import { EditorDispatchContext, EditorStateContext } from "../EditorContext";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
//   appBar: {
//     backgroundColor: "#1A1829",
//     "& .Mui-selected": {
//       backgroundColor: "#262533",
//     },
//   },
//   tab: {},
//   name: {
//     marginTop: theme.spacing(2),
//   },
//   difficulty: {
//     width: theme.spacing(2),
//     height: theme.spacing(2),
//     borderRadius: theme.spacing(2),
//     display: "inline-block",
//     backgroundColor: "#008529",
//   },
//   headers: {
//     fontWeight: "bold",
//   },
//   question: {
//     fontWeight: "lighter",
//   },

//   grid: {
//     marginLeft: "10px",
//   },
//   timer: {
//     position: "absolute",
//     right: "2vh",
//     top: "1vh",
//     height: "5vh",
//     width: "100%",
//     backgroundColor: '#1A1829 !important',
//   }
// }));

const EditorTopBar = (props) => {
  const [age, setAge] = useState(10);
  const dispatch = useContext(EditorDispatchContext);
  const state = useContext(EditorStateContext);  
  
  const handleSizeChange = (event) => {
    dispatch({fontSize: event.target.value, theme: state.theme})
  };

  const handleThemeChange = (event) => {
    dispatch({fontSize: state.fontSize, theme: event.target.value})
  };

  return (
    <NavStyles>
      <div className="container">
        <select
            id="demo-simple-select-helper"
            value={state.fontSize}
            name="size"
            label="Age"
            onChange={handleSizeChange}
            className={"nav"}
          >
            <option value={'12px'}>12px</option>
            <option value={'14px'}>14px</option>
            <option value={'16px'}>16px</option>
            <option value={'18px'}>18px</option>
          </select>
          <select
            id="demo-simple-select-helper"
            value={state.theme}
            label="Age"
            onChange={handleThemeChange}
            className={"nav"}
          >
            <option value={'monokai'}>Monokai</option>
            <option value={'material'}>Material</option>
            <option value={'solarized'}>Solarized</option>
          </select>
          <Button className={"nav"} disabled variant="contained">
            Let's Code
          </Button>
      </div>
    </NavStyles>
  );
};

export default EditorTopBar;
