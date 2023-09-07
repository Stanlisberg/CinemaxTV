import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/sidebar/pages/Home";
import Trending from "./components/sidebar/pages/Trending";
import Tv from "./components/sidebar/pages/Tv";
import Bookmark from "./components/sidebar/pages/Bookmark"; 
import Popular from "./components/sidebar/pages/Popular";
import Search from "./components/sidebar/pages/Search";
import MovieInfo from "./components/allMovieInfo/MovieInfo";
import PopularInfo from "./components/allMovieInfo/PopularInfo";
import TrendingInfo from './components/allMovieInfo/TrendingInfo'
import TvInfo from "./components/allMovieInfo/TvInfo";
import SearchInfo from "./components/allMovieInfo/SearchInfo";
// import { BiHome } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux"; 
import type { RootState, AppDispatch } from "./redux/store";
import { SkeletonTheme } from "react-loading-skeleton";
// import { modalHide } from "./redux/modalSlice";
// import { sideLeave } from "./redux/sidebarSlice";
 

function App() {
  // const modal = useSelector((state: RootState) => state.modal.value);
  const dark = useSelector((state: RootState) => state.dark.value);
  // const dispatch : AppDispatch = useDispatch()

  // console.log(dark)
  // console.log(modal);
  return (
    <>
      <div className={
        dark ?
        'app-dark' :
        'app-sun'
      }>
        {/* {modal === true && (
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
               className=' border rounded-md shadow-xl text-center text-lg text-[#e91e63] border-[#e91e63] px-4 ml-6 py-1 hover:text-[#fff] hover:bg-[#e91e63]'
               onClick={() => {
                dispatch(modalHide())
                dispatch(sideLeave())
              }}
                >
                Close 
              </button>
            </div> 
          </>
        )} */}
       <SkeletonTheme baseColor="lightgrey" highlightColor="#525252">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movie" element={<Popular />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:movieId" element={<MovieInfo />} />
            <Route path="/popular/:popularId" element={<PopularInfo />} />
            <Route path="/trending/:trendingId" element={<TrendingInfo />} />
            <Route path="/search/:searchId" element={<SearchInfo />} />
            <Route path="/tv/:tvId" element={<TvInfo />} />
          </Routes>
        </Router>
      </SkeletonTheme>
      </div>
    </>
  );
}

export default App;
