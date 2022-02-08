import EditorMain from "./components/EditorMaster";
import EditorTopBar from "./components/EditorTopBar";
import EditorProvider from "./EditorContext";
import { Main } from "./styles/Main";

const App = () => {
 
    return (
      <EditorProvider>
      <Main>
      <div className="row-editor">
        <EditorTopBar/>
        <EditorMain />
      </div>
    </Main>
    </EditorProvider>
    );
}

export default App;
