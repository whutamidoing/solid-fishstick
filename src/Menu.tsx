import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import ArticleMenu from "./components/ArticleMenu";

function Menu() {
  return (
    <>
      <div className="columns">
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
