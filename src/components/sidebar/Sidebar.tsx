import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import type { RootState, AppDispatch } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { sideEnter, sideLeave } from "../../redux/sidebarSlice";

function Sidebar() {
  const sidebar = useSelector((state: RootState) => state.sidebar.value);
  const dispatch: AppDispatch = useDispatch();

  console.log(sidebar);

  const handleMouseLeave = () => {
    setOpenSidebar(false);
  };

  const navigate = useNavigate();

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
  const handleActiveButton = (id: number) => {
    setActiveButton(id);
    handleCloseSidebar();
  };

  //------------CloseSidebar Function
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };
  //----------HandleSidebar Function
  const handleSidebar = () => {
    setOpenSidebar(true);
  };

  //--------For default Home---
  useEffect(() => {
    if(window.location.pathname === '/') {
      handleActiveButton(2);
    } else if(window.location.pathname === '/trending') {
      handleActiveButton(3);
    } else if(window.location.pathname === '/movie') {
      handleActiveButton(4);
    } else if(window.location.pathname === '/tv') {
      handleActiveButton(5);
    } else if(window.location.pathname === '/bookmark') {
      handleActiveButton(6);
    }
  }, []);

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
        onMouseLeave={() => {
          handleMouseLeave()
          dispatch(sideLeave());
        }}
        onMouseEnter={() => dispatch(sideEnter())}
        className={openSidebar === false ? "sidebar-close hidden lg:grid " : "sidebar-open hidden lg:grid"}
      >
        <div className="logo-div">
          <TbTriangleSquareCircle
            size={50}
            color="#e91e63"
            className={openSidebar ? "logo-open" : "logo-close"}
          />
          {openSidebar && <p className="logo-text"> CINEMAX-TV</p>}
        </div>
        <div
          className={openSidebar ? " side-wrapper-open" : "side-wrapper-close"}
        >
          <div
            className={openSidebar ? "icon-open search-input" : "icon-close"}
            onMouseOver={handleSearchHoverEnter}
            onMouseLeave={handleSearchHoverLeave}
            onClick={() => {
              handleActiveButton(1);
              handleSidebar();
            }}
          >
            <BiSearchAlt
              size={25}
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
            onClick={() => {
              handleActiveButton(2);
              navigate("/");
            }}
          >
            <BiHome size={25} className={activeButton === 2 ? "active" : ""} />
            {homeHover ? (
              <div className="icon-name-close icon-name-open">Home</div>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">Home</p>}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleTrendingHoverEnter}
            onMouseLeave={handleTrendingHoverLeave}
            onClick={() => {
              handleActiveButton(3);
              navigate("/trending");
            }}
          >
            <AiOutlineFire
              size={25}
              className={activeButton === 3 ? "active open-icon" : ""}
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
            onClick={() => {
              handleActiveButton(4);
              navigate("/movie");
            }}
          >
            <BiCameraMovie
              size={25}
              className={activeButton === 4 ? "active" : ""}
            />
            {movieHover ? (
              <p className="icon-name-close icon-name-open">Movie_Icons</p>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">Movie Icons</p>}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleTvHoverEnter}
            onMouseLeave={handleTvHoverLeave}
            onClick={() => {
              handleActiveButton(5);
              navigate("/tv");
            }}
          >
            <RiSlideshow3Line
              size={25}
              className={activeButton === 5 ? "active" : ""}
            />
            {tvHover ? (
              <p className="icon-name-close icon-name-open">Tv_Shows</p>
            ) : (
              ""
            )}
            {openSidebar && <p className="icon-open-text">Tv Shows</p>}
          </div>
          <div
            className={openSidebar ? "icon-open" : "icon-close"}
            onMouseOver={handleBookHoverEnter}
            onMouseLeave={handleBookHoverLeave}
            onClick={() => {
              handleActiveButton(6);
              navigate("/bookmark");
            }}
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
