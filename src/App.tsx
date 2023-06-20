import "./App.css";
import { ReactFlowProvider } from "reactflow";
import Main from "./layouts/Main";

function App() {
  return (
    <ReactFlowProvider>
      <Main />
    </ReactFlowProvider>
  );
}

export default App;
