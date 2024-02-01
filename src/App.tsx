import "./App.css";

import { Navbar, Node } from "./components";
import { Files1 } from "../public/data/Files.data";

function App() {
  return (
    <>
      <Navbar />
      <Node node={Files1} />
    </>
  );
}

export default App;
