import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="columns">
        <Sidebar />
        <div className="main-content">
          <Banner />
        </div>
      </div>
    </>
  );
}

export default App;
