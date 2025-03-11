import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Page from "./Page.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/Page/" element={<Page />} />
    </Routes>
  );
}

export default App;
