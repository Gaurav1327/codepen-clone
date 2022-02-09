import React from "react";
import {
  AppBar,
  Tabs,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import CodeEditor from "./CodeEditor";
import { SolutionMain } from "../styles/EditorLayout";


const SolutionLayout = (props) => {

  const useWindowSize = () => {
    const [width, setWidth] = React.useState(undefined);

    React.useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return width;
  }
  
  return (
    <SolutionMain className={""}>
      <AppBar className={"appBar"} position="static">
        {/* <Tabs
          className={""}
          indicatorColor={"none"}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <IconButton></IconButton> */}
          <Button disabled className="code-run">{props.language}</Button>
        {/* </Tabs> */}
      </AppBar>
      <Box className={"box"}>
        <CodeEditor
          height={props.dimensions.height}
          value={props.solution}
          onChange={props.onChange}
          displayName="Solution 1"
          language={"text/" + props.language}
        />
      </Box>
    </SolutionMain>
  );
};

export default SolutionLayout;
