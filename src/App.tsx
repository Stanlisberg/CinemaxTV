import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/sidebar/pages/Home";
import Trending from "./components/sidebar/pages/Trending";
import Tv from "./components/sidebar/pages/Tv";
import Bookmark from "./components/sidebar/pages/Bookmark";
import Popular from "./components/sidebar/pages/Popular";
import { BiHome } from "react-icons/bi";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

function App() {
  const modal = useSelector((state: RootState) => state.modal.value);

  console.log(modal);

  return (
    <>
      <div className="app">
        {modal === true && (
          <div className="modal-background">
            <div className="modal">
              <p className="ml-3">Settings</p>
              <div className="container">
                <div className="flex justify-between items-center">
                  <p>Dark Mode</p>
                  <p>
                    <BiHome />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Dark Mode</p>
                  <p>
                    <BiHome />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Dark Mode</p>
                  <p>
                    <BiHome />
                  </p>
                </div>
                <button> close</button>
              </div>
            </div>
          </div>
        )}
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movie" element={<Popular />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
