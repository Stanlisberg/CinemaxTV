import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/sidebar/pages/Home";
import Trending from "./components/sidebar/pages/Trending";
import Tv from "./components/sidebar/pages/Tv";
import Bookmark from "./components/sidebar/pages/Bookmark"; 
import Popular from "./components/sidebar/pages/Popular";
import MovieInfo from "./components/movieInfo/MovieInfo";
import { BiHome } from "react-icons/bi";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { SkeletonTheme } from "react-loading-skeleton";
// import { modalHide } from "./redux/modalSlice";
// import { useDispatch } from "react-redux";
 

function App() {
  const modal = useSelector((state: RootState) => state.modal.value);
  // const dispatch: AppDispatch = useDispatch();

  console.log(modal);
  return (
    <>
      <div className="app">
        {modal === true && (
          <>
          <div className="modal-background"></div>
            <div className="modal">
              <div className="container text-lg">
               <p className="ml-6 text-3xl font-medium">Settings</p>
               <div className='border-t-2 border-black px-6 mt-4'>
                <div className="flex justify-between items-center">
                  <p>Dark Mode</p>
                  <p>
                    <BiHome />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Disable Transition</p>
                  <p>
                    <BiHome />
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Zoom Transition</p>
                  <p>
                    <BiHome />
                  </p>
                </div>
               </div>
              </div>
              <button
               className=' border rounded-md shadow-xl text-center text-lg text-[#e91e63] border-[#e91e63] px-4 ml-6 py-1 hover:text-[#fff] hover:bg-[#e91e63]'>Close 
              </button>
            </div> 
          </>
        )}
       <SkeletonTheme baseColor="lightgrey" highlightColor="#525252">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movie" element={<Popular />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/movie/:movieId" element={<MovieInfo />} />
          </Routes>
        </Router>
      </SkeletonTheme>
      </div>
    </>
  );
}

export default App;
