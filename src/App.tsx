import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Page from "./Page.tsx";
import User from "./UserProfile.tsx";
import Gallery from "./Gallery.tsx";
import Wish from "./Wish.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/page/" element={<Page />} />
      <Route path="/user/" element={<User />} />
      <Route path="/gallery/" element={<Gallery />} />
      <Route path="/wish-sim/" element={<Wish />} />
    </Routes>
  );
}

export default App;
