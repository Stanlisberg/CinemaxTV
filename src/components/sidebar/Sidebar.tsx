import { useState, useRef } from "react";
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

  const sidebarRef = useRef<any>()
  // console.log(sidebarRef.current);
 
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    // if (sidebarRef.current.className === 'sidebarOpen') {
      setIsHovered(false);
    // }
  };

  const handleMouseLeave = () => {
    if (sidebarRef.current.className === 'sidebarOpen') {
      setIsHovered(true); 
    }
  };

  const elementStyle = {
    /* Define the initial styling */
    // padding: '10px',
    background: isHovered ? 'blue' : '',
    // color: '#fff',
    width: isHovered? '30px' : ''
  };


  //-----------Open sidebar state
  const [openSidebar, setOpenSidebar] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [trendingHover, setTrendingHover] = useState(false);
  const [movieHover, setMovieHover] = useState(false);
  const [tvHover, setTvHover] = useState(false);
  const [bookHover, setBookHover] = useState(false);
  const [settingHover, setSettingHover] = useState(false);

  //-----------Active  Button State
  const [activeButton, setActiveButton] = useState<number | null>(null);

  //------------Active Fuction
  const handleActiveButton = (id: number) => [setActiveButton(id)];

  //----------HandleSidebar Function
  const handleSidebar = () => {
    setOpenSidebar(true);
  };

  //-----------Hover Function
  const handleArrowHoverEnter = () => {
    setArrowHover(true);
  };
  const handleArrowHoverLeave = () => {
    setArrowHover(false);
  };

  const handleSearchHoverEnter = () => {
    setSearchHover(true);
  };
  const handleSearchHoverLeave = () => {
    setSearchHover(false);
  };

  const handleHomeHoverEnter = () => {
    setHomeHover(true);
  };
  const handleHomeHoverLeave = () => {
    setHomeHover(false);
  };

  const handleTrendingHoverEnter = () => {
    setTrendingHover(true);
  };
  const handleTrendingHoverLeave = () => {
    setTrendingHover(false);
  };

  const handleMovieHoverEnter = () => {
    setMovieHover(true);
  };
  const handleMovieHoverLeave = () => {
    setMovieHover(false);
  };

  const handleTvHoverEnter = () => {
    setTvHover(true);
  };
  const handleTvHoverLeave = () => {
    setTvHover(false);
  };

  const handleBookHoverEnter = () => {
    setBookHover(true);
  };
  const handleBookHoverLeave = () => {
    setBookHover(false);
  };

  const handleSettingHoverEnter = () => {
    setSettingHover(true);
  };
  const handleSettingHoverLeave = () => {
    setSettingHover(false);
  };

  return (
    <div>
      <div 
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={elementStyle}
         className={openSidebar ? "sidebar-open" : "sidebar-close"}
        //  onMouseLeave={change} 
        //  onMouseOver={changeAg}
         ref={sidebarRef}>
        <div className="logo-div">
          <TbTriangleSquareCircle
            size={50}
            color="#e91e63"
            className={openSidebar ? "logo-open" : "logo-close"}
          />
          {openSidebar && <p className="logo-text">CinemaxTV</p>}
        </div>
        <div
          className={openSidebar ? " side-wrapper-open" : "side-wrapper-close"}
        >
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleSearchHoverEnter}
            onMouseLeave={handleSearchHoverLeave}
            onClick={() => {
              handleActiveButton(1);
              handleSidebar();
            }}
          >
            <BiSearchAlt
              size={25}
              // onClick={handleSidebar}
              className={activeButton === 1 ? "active search" : "search"}
            />
            {searchHover && (
              <p className="icon-name-close icon-name-open">Search</p>
            )}
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
            className={openSidebar ? "icon-open arrow-open" : "icon-close"}
            onMouseOver={handleArrowHoverEnter}
            onMouseLeave={handleArrowHoverLeave}
            onClick={handleSidebar}
          >
            <MdOutlineKeyboardDoubleArrowRight size={25} className="icon" />
            {arrowHover ? (
              <p className="icon-name-close icon-name-open">Expand</p>
            ) : (
              ""
            )}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleHomeHoverEnter}
            onMouseLeave={handleHomeHoverLeave}
            onClick={() => handleActiveButton(2)}
          >
            <BiHome size={25} className={activeButton === 2 ? "active" : ""} />
            {homeHover ? (
              <p className="icon-name-close icon-name-open">Home</p>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">Home</p>}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleTrendingHoverEnter}
            onMouseLeave={handleTrendingHoverLeave}
            onClick={() => handleActiveButton(3)}
          >
            <AiOutlineFire
              size={25}
              className={activeButton === 3 ? "active" : ""}
            />
            {trendingHover ? (
              <p className="icon-name-close icon-name-open">Trending</p>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">Trending</p>}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleMovieHoverEnter}
            onMouseLeave={handleMovieHoverLeave}
            onClick={() => handleActiveButton(4)}
          >
            <BiCameraMovie 
              size={25} 
              className={activeButton === 4 ? "active" : ""} 
            />
            {movieHover ? (
              <p className="icon-name-close icon-name-open">Movies</p>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">Movies</p>}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleTvHoverEnter}
            onMouseLeave={handleTvHoverLeave}
            onClick={() => handleActiveButton(5)}
          >
            <RiSlideshow3Line 
              size={25} 
              className={activeButton === 5 ? "active" : ""} 
            />
            {tvHover ? (
              <p className="icon-name-close icon-name-open">Tv_shows</p>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">TV-Shows</p>}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleBookHoverEnter}
            onMouseLeave={handleBookHoverLeave}
            onClick={() => handleActiveButton(6)}
          >
            <BiBookBookmark 
              size={25} 
              className={activeButton === 6 ? "active" : ""}
            />
            {bookHover ? (
              <p className="icon-name-close icon-name-open">Bookmark</p>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">Bookmarks</p>}
          </div>
        </div>
        <div
          className={openSidebar ? "setting-open" : "setting-close"}
          onMouseOver={handleSettingHoverEnter}
          onMouseLeave={handleSettingHoverLeave}
          onClick={() => handleActiveButton(7)}
        >
          <IoMdSettings 
            size={25} 
            className={activeButton === 7 ? "active" : ""}
          />
          {settingHover ? (
            <p className="icon-setting-close icon-setting-open">Settings</p>
          ) : (
            ""
          )}
          {openSidebar && <p className="setting-text">Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
