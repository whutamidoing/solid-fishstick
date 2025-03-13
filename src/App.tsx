import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Page from "./Page.tsx";
import User from "./UserProfile.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/Page/" element={<Page />} />
      <Route path="/User/" element={<User />} />
    </Routes>
  );
}

export default App;
