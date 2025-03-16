import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import ArticleMenu from "./components/ArticleMenu";
import LoginForm from "./components/Login";
import { useState } from "react";

function Menu() {
  const [isLoginActive, setIsLoginActive] = useState(false);

  return (
    <>
      <LoginForm setIsLoginActive={setIsLoginActive} />
      <div
        className="columns"
        style={{
          overflow: isLoginActive ? "hidden" : "auto",
          height: isLoginActive ? "100vh" : "fit-content",
          pointerEvents: isLoginActive ? "none" : "auto",
          filter: isLoginActive ? "blur(10px)" : "",
        }}
      >
        <Sidebar />
        <div className="main-content">
          <Banner />
          <ArticleMenu />
        </div>
      </div>
    </>
  );
}

export default Menu;
