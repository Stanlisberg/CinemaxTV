import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { TbTriangleSquareCircle } from "react-icons/tb";
// import logo from '../../assets/logo2.png'
import "../../styles/sidebar.css";

function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [trendingHover, setTrendingHover] = useState(false);
  const [movieHover, setMovieHover] = useState(false);
  const [tvHover, setTvHover] = useState(false);
  const [bookHover, setBookHover] = useState(false);
  const [settingHover, setSettingHover] = useState(false);
  


  const handleSidebar = () => {
    setOpenSidebar(true);
  };

  const handleArrowHoverEnter = () => {
    setArrowHover(true)
  }
  const handleArrowHoverLeave = () => {
    setArrowHover(false)
  }

  const handleSearchHoverEnter= () => {
    setSearchHover(true)
  }
  const handleSearchHoverLeave= () => {
    setSearchHover(false)
  }

  const handleHomeHoverEnter= () => {
    setHomeHover(true)
  }
  const handleHomeHoverLeave= () => {
    setHomeHover(false)
  }

  const handleTrendingHoverEnter= () => {
    setTrendingHover(true)
  }
  const handleTrendingHoverLeave= () => {
    setTrendingHover(false)
  }

  const handleMovieHoverEnter= () => {
    setMovieHover(true)
  }
  const handleMovieHoverLeave= () => {
    setMovieHover(false)
  }

  const handleTvHoverEnter= () => {
    setTvHover(true)
  }
  const handleTvHoverLeave= () => {
    setTvHover(false)
  }

  const handleBookHoverEnter= () => {
    setBookHover(true)
  }
  const handleBookHoverLeave= () => {
    setBookHover(false)
  }

  const handleSettingHoverEnter= () => {
    setSettingHover(true)
  }
  const handleSettingHoverLeave= () => {
    setSettingHover(false)
  }

  return (
    <div>
      <div className={openSidebar ? "sidebar-open" : 'sidebar-close'}>
        <div className="logo-div">
          <TbTriangleSquareCircle
            size={50}
            color='#e91e63'
            className={openSidebar ? "logo-open" : 'logo-close'}
          />
          {openSidebar && <p className='logo-text'>CinemaxTV</p>}
        </div>
        <div className={openSidebar ? " side-wrapper-open" : "side-wrapper-close"}>
          <div 
            className={openSidebar?  "icon-open arrow-open" : 'icon-close'}
            onMouseOver={handleArrowHoverEnter}
            onMouseLeave={handleArrowHoverLeave}
            >
             <MdOutlineKeyboardDoubleArrowRight
                size={25}
                onClick={handleSidebar}
                className='icon'
            />
            {arrowHover ? <p className='icon-name'>Expand</p> : ''} 
          </div>
          <div 
            className={openSidebar?  "icon-open" : 'icon-close'}
            onMouseOver={handleSearchHoverEnter}
            onMouseLeave={handleSearchHoverLeave}
            >
            <BiSearchAlt size={25} className="search icon" />
            {searchHover && <p className='icon-name hey'>Search</p>} 
            {openSidebar && (
              <div className="input-div">
                <input
                  type="text"
                  className="input"
                  placeholder="Search Movies..."
                />
              </div>
            )}
          </div>
          <div 
           className={openSidebar?  "icon-open" : 'icon-close'}
           onMouseOver={handleHomeHoverEnter}
           onMouseLeave={handleHomeHoverLeave}>
            <BiHome size={25}  className='icon'/>
            {homeHover ? <p className='icon-name'>Home</p> : ''} 
            {openSidebar && <p className="icon-open-text">Home</p>}
          </div>
          <div 
           className={openSidebar?  "icon-open" : 'icon-close'}
           onMouseOver={handleTrendingHoverEnter}
           onMouseLeave={handleTrendingHoverLeave}>
            <AiOutlineFire size={25}  className='icon'/>
            {trendingHover ? <p className='icon-name'>Trending</p> : ''} 
            {openSidebar && <p className="icon-open-text">Trending</p>}
          </div>
          <div 
          className={openSidebar?  "icon-open" : 'icon-close'}
          onMouseOver={handleMovieHoverEnter}
          onMouseLeave={handleMovieHoverLeave}>
            <BiCameraMovie size={25}  className='icon'/>
            {movieHover ? <p className='icon-name'>Movies</p> : ''} 
            {openSidebar && <p className="icon-open-text">Movies</p>}
          </div>
          <div 
          className={openSidebar?  "icon-open" : 'icon-close'}
          onMouseOver={handleTvHoverEnter}
          onMouseLeave={handleTvHoverLeave}>
            <RiSlideshow3Line size={25}  className='icon'/>
            {tvHover ? <p className='icon-name'>Tv_shows</p> : ''} 
            {openSidebar && <p className="icon-open-text">TV-Shows</p>}
          </div>
          <div 
          className={openSidebar?  "icon-open" : 'icon-close'}
          onMouseOver={handleBookHoverEnter}
          onMouseLeave={handleBookHoverLeave}>
            <BiBookBookmark size={25}  className='icon'/>
            {bookHover ? <p className='icon-name'>Bookmark</p> : ''} 
            {openSidebar && <p className="icon-open-text">Bookmarks</p>}
          </div>
        </div>
        <div 
         className={openSidebar?  "setting-open" : 'setting-close'}
         onMouseOver={handleSettingHoverEnter}
         onMouseLeave={handleSettingHoverLeave}>
            <IoMdSettings size={25}  className='setting-icon'/>
            {settingHover ? <p className='icon-name'>Settings</p> : ''} 
            {openSidebar && <p className="setting-text">Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
