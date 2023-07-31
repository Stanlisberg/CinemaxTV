import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/sidebar/pages/Home"
import Trending from "./components/sidebar/pages/Trending"
import Tv from "./components/sidebar/pages/Tv"
import Bookmark from "./components/sidebar/pages/Bookmark"
import Popular from "./components/sidebar/pages/Popular"

function App() {

  return (
    <>
     <div className='app'>
     <div className='set'>Modal</div> 
       <Router>
          <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/movie" element={<Popular/>} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/bookmark" element={<Bookmark />} />
            </Routes>
        </Router>
     </div>
    </>
  )
}

export default App
