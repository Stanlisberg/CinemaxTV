import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/sidebar/pages/Home"
import Trending from "./components/sidebar/pages/Trending"
import Tele from "./components/sidebar/pages/Tele"
import Bookmark from "./components/sidebar/pages/Bookmark"
import Movie from "./components/sidebar/pages/Movie"

function App() {

  return (
    <>
     <div className='app'>
       <Router>
          <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/movie" element={<Movie/>} />
              <Route path="/tv" element={<Tele />} />
              <Route path="/bookmark" element={<Bookmark />} />
            </Routes>
        </Router>
     </div>
    </>
  )
}

export default App
