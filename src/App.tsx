import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/sidebar/sidebar"
import Navbar from "./components/Navbar"
import Home from "./components/sidebar/pages/Home"
import Trending from "./components/sidebar/pages/Trending"
import Tele from "./components/sidebar/pages/Tele"
import Bookmark from "./components/sidebar/pages/Bookmark"
import Movie from "./components/sidebar/pages/Movie"

function App() {

  return (
    <>
     <div className='app'>
        <Navbar />
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Trending />} />
            <Route path="/" element={<Movie/>} />
            <Route path="/" element={<Tele />} />
            <Route path="/" element={<Bookmark />} />
          </Routes>
        </Router>
     </div>
    </>
  )
}

export default App
