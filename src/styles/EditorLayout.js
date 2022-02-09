import styled from "styled-components";

export const NavStyles = styled.div`
  flex-grow: 1;
  .nav {
    color: #fff !important;
    cursor: pointer;
    font-weight: 700 !important;
  }
  .container {
    background-color: #363459;
    padding-bottom: 16px;
  }
  img{
    float: left;
  }

  select {
    float: right;
    margin-left: 10px;
    width: 150px;
    height: 6vh;
    color: #fff;
    background-color: #262533;
    cursor: pointer;
    border: none;
    padding: 0px 8px;
    option {
      height: 40px;
    }
  },
  select:focus {
    outline: none;
  }
  .nav-element {
    width: 100% !important;
    background-color: #363459;
    border-radius: 0px !important;
  }
`
export const EditorLayout = styled.div`
  height: 47vh;
  border-top: solid 2px #262533;
  .splitter-vertical {
    width: 10px !important;
    background-color: #363459 !important;
    border: none !important;
  }
  .splitter-horizontal {
    height: 10px !important;
    background-color: #363459 !important;
    border: none !important;
  }
  .reflex-container > .reflex-splitter:hover {
    background-color: #947eb0 !important;
    transition: all 0.1s ease;
  }
  .reflex-element {
    overflow: hidden;
    background-color: #262533 !important;
  }
`;


export const SolutionMain = styled.div`
  color: #fff;
  border: solid 1px #262533;
  .MuiTab-root {
    font-weight: bold;
  }
  /* .box {
    margin-top: 20px;
  } */
  .appBar {
    background-color: #363459;
    height: 48px;
  }
  .MuiTab-root:hover {
    background-color: #947eb0 !important;
  }
  .difficulty {
    width: 17px !important;
    height: 17px !important;
    border-radius: 4px;
    display: inline-block;
    background-color: #008529;
  }
  .code-run {
    font-size: 14px;
    color: #fff !important;
    background-color: #262533;
    position: absolute;
    left: 0;
    height: 48px;
    border-radius: 0;
  }
  .code-run:hover {
    background-color: #262533;
    
  }
`;

export const EditorStyles = styled.div`
  color: #fff;
  cursor: text;
  .CodeMirror-gutters {
    background-color: #262533 !important;
  }
  .CodeMirror-cursors {
    color: #fff;
  }
  
  .CodeMirror {
    font-size: ${props => props.fontSize};
  }
  
  .CodeMirror-vscrollbar {
    display: none !important;
  }
  .CodeMirror {
    background-color: #262533 !important;
    color: #fff !important;
    height: ${props => props.height};
    caret-color: #fff !important;
  }
  .CodeMirror-gutter {
    background-color: #262533 !important;
    margin-right: 10px;
    color: #fff !important;
  }
  placeholder {
    color: #fff !important;
  }
}
`;
