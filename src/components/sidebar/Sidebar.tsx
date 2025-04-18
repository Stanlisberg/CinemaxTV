import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { BiBookBookmark } from "react-icons/bi";
// import { IoMdSettings } from "react-icons/io";
import { TbTriangleSquareCircle } from "react-icons/tb";
import "../../styles/sidebar.css";
import type { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { sideEnter, sideLeave } from "../../redux/sidebarSlice";
// import { modalShow } from "../../redux/modalSlice";
import { mobileLeave } from "../../redux/mobileSlice";
import { removeMenu } from "../../redux/changeIconSlice";
import { toggleEnter } from "../../redux/toggleSlice";
// import { setInputData } from "../../redux/inputSlice";

function Sidebar() {
  const dispatch: AppDispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.modal.value);
  const mobile = useSelector((state: RootState) => state.mobile.value);
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const dark = useSelector((state: RootState) => state.dark.value);

  const navigate = useNavigate();

  const handleMouseLeave = () => {
    setOpenSidebar(false);
  };

  const enterContainer = () => {
    if (modal === true) {
      dispatch(sideEnter());
    }
  };

  // ------Local Storage setup for stored search item--------
  interface SearchInter {
    searchInput: string;
  }

  let searchInput: SearchInter;
  const searchInputData = (e: any) => {
    searchInput = e.target.value;
  };

  const searchFormSubmit = (e: any) => {
    navigate("/search");
    window.location.reload();
    localStorage.setItem("myData", `${searchInput}`);

    e.preventDefault();
  };

  //-----------Open sidebar state-------------
  const [openSidebar, setOpenSidebar] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [searchHover, setSearchHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);
  const [trendingHover, setTrendingHover] = useState(false);
  const [movieHover, setMovieHover] = useState(false);
  const [tvHover, setTvHover] = useState(false);
  const [bookHover, setBookHover] = useState(false);
  // const [settingHover, setSettingHover] = useState(false);

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

  //--------For default active button---
  useEffect(() => {
    if (window.location.pathname === "/") {
      handleActiveButton(2);
    } else if (window.location.pathname === "/trending") {
      handleActiveButton(3);
    } else if (window.location.pathname === "/movie") {
      handleActiveButton(4);
    } else if (window.location.pathname === "/tv") {
      handleActiveButton(5);
    } else if (window.location.pathname === "/bookmark") {
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

  // const handleSettingHoverEnter = () => {
  //   setSettingHover(true);
  // };
  // const handleSettingHoverLeave = () => {
  //   setSettingHover(false);
  // };

  return (
    <>
      <div className="">
        <div
          onMouseLeave={() => {
            handleMouseLeave();
            dispatch(sideLeave());
            enterContainer();
          }}
          onMouseEnter={() => dispatch(sideEnter())}
          className={
            openSidebar === false
              ? dark
                ? "sidebar-close hidden lg:grid text-[whitesmoke] bg-[#000000]"
                : "sidebar-close hidden lg:grid bg-[#f1f3f5] "
              : dark
              ? "sidebar-open hidden lg:grid text-[whitesmoke] bg-[#000000] "
              : "sidebar-open hidden lg:grid bg-[#f1f3f5] "
          }
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
            className={
              openSidebar ? " side-wrapper-open" : "side-wrapper-close"
            }
          >
            <div
              className={
                openSidebar
                  ? dark
                    ? "icon-open search-input search-icon"
                    : "icon-open search-input"
                  : dark
                  ? "icon-close icon-bg"
                  : "icon-close"
              }
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
                <p
                  className={
                    dark
                      ? "icon-name-close icon-name-open mobile-color"
                      : "icon-name-close icon-name-open"
                  }
                >
                  Search
                </p>
              )}
              {openSidebar && (
                <div className="input-div">
                  <form onSubmit={searchFormSubmit}>
                    <input
                      type="text"
                      className="input"
                      placeholder="Search Movies..."
                      onChange={searchInputData}
                    />
                  </form>
                </div>
              )}
            </div>
            <div
              className={
                openSidebar
                  ? dark
                    ? "icon-open arrow-open"
                    : "icon-open arrow-open"
                  : dark
                  ? "icon-close icon-bg"
                  : "icon-close"
              }
              onMouseOver={handleArrowHoverEnter}
              onMouseLeave={handleArrowHoverLeave}
              onClick={handleSidebar}
            >
              <MdOutlineKeyboardDoubleArrowRight size={25} className="icon" />
              {arrowHover ? (
                <p
                  className={
                    dark
                      ? "icon-name-close icon-name-open mobile-color"
                      : "icon-name-close icon-name-open"
                  }
                >
                  Expand
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className={
                openSidebar
                  ? dark
                    ? "icon-open icon-bg"
                    : "icon-open"
                  : dark
                  ? "icon-close icon-bg"
                  : "icon-close"
              }
              onMouseOver={handleHomeHoverEnter}
              onMouseLeave={handleHomeHoverLeave}
              onClick={() => {
                handleActiveButton(2);
                navigate("/");
              }}
            >
              <BiHome
                size={25}
                className={activeButton === 2 ? "active" : ""}
              />
              {homeHover ? (
                <div
                  className={
                    dark
                      ? "icon-name-close icon-name-open mobile-color"
                      : "icon-name-close icon-name-open"
                  }
                >
                  Home
                </div>
              ) : (
                ""
              )}
              {openSidebar && <p className="icon-open-text">Home</p>}
            </div>
            <div
              className={
                openSidebar
                  ? dark
                    ? "icon-open icon-bg"
                    : "icon-open"
                  : dark
                  ? "icon-close icon-bg"
                  : "icon-close"
              }
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
                <p
                  className={
                    dark
                      ? "icon-name-close icon-name-open mobile-color"
                      : "icon-name-close icon-name-open"
                  }
                >
                  Trending
                </p>
              ) : (
                ""
              )}
              {openSidebar && <p className="icon-open-text">Trending</p>}
            </div>
            <div
              className={
                openSidebar
                  ? dark
                    ? "icon-open icon-bg"
                    : "icon-open"
                  : dark
                  ? "icon-close icon-bg"
                  : "icon-close"
              }
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
                <p
                  className={
                    dark
                      ? "icon-name-close icon-name-open mobile-color"
                      : "icon-name-close icon-name-open"
                  }
                >
                  Movie_Actors
                </p>
              ) : (
                ""
              )}
              {openSidebar && <p className="icon-open-text">Movie Actors</p>}
            </div>
            <div
              className={
                openSidebar
                  ? dark
                    ? "icon-open icon-bg"
                    : "icon-open"
                  : dark
                  ? "icon-close icon-bg"
                  : "icon-close"
              }
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
                <p
                  className={
                    dark
                      ? "icon-name-close icon-name-open mobile-color"
                      : "icon-name-close icon-name-open "
                  }
                >
                  Tv_Shows
                </p>
              ) : (
                ""
              )}
              {openSidebar && <p className="icon-open-text">Tv Shows</p>}
            </div>
            <div
              className={
                openSidebar
                  ? dark
                    ? "icon-open icon-bg"
                    : "icon-open"
                  : dark
                  ? "icon-close icon-bg"
                  : "icon-close"
              }
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
                <p
                  className={
                    dark
                      ? "icon-name-close icon-name-open mobile-color"
                      : "icon-name-close icon-name-open"
                  }
                >
                  Bookmark
                </p>
              ) : (
                ""
              )}
              {openSidebar && <p className="icon-open-text">Bookmarks</p>}
            </div>
          </div>
          {/* <div
            className={
              openSidebar
                ? dark
                  ? "setting-open icon-bg"
                  : "setting-open"
                : dark
                ? "setting-close icon-bg"
                : "setting-close"
            }
            onMouseOver={handleSettingHoverEnter}
            onMouseLeave={handleSettingHoverLeave}
            onClick={() => {
              handleActiveButton(7);
              dispatch(modalShow());
            }}
          >
            <IoMdSettings
              size={25}
              className={activeButton === 7 ? "active" : ""}
            />
            {}
            {settingHover ? (
              <p
                className={
                  dark
                    ? "icon-setting-close icon-setting-open text-[whitesmoke]"
                    : "icon-setting-close icon-setting-open"
                }
              >
                Settings
              </p>
            ) : (
              ""
            )}
            {openSidebar && <p className="setting-text">Settings</p>}
          </div> */}
        </div>
      </div>

      {/*------------ Mobile Menu section ------------------*/}
      {mobile === true ? (
        <div
          onMouseLeave={() => {
            handleMouseLeave();
            dispatch(sideLeave());
            enterContainer();
          }}
          onMouseEnter={() => dispatch(sideEnter())}
          className={
            toggle === true
              ? dark
                ? "hidden"
                : "hidden"
              : dark
              ? "sidebar-open lg:hidden fixed text-[whitesmoke] bg-[#000000]"
              : "sidebar-open lg:hidden fixed bg-[#f1f3f5]"
            // ? "hidden" : "sidebar-open lg:hidden fixed"
          }
        >
          <div className="logo-div">
            <TbTriangleSquareCircle
              size={50}
              color="#e91e63"
              className="logo-open cursor-pointer"
              onClick={() => {
                navigate("/");
                dispatch(toggleEnter());
                dispatch(mobileLeave());
                dispatch(sideLeave());
                dispatch(removeMenu());
              }}
            />
            <p className="logo-text"> CINEMAX-TV</p>
          </div>
          <div className=" side-wrapper-open">
            <div
              className={
                dark ? "icon-open search-icon" : "icon-open search-input"
              }
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
              <div className="input-div">
                <form onSubmit={searchFormSubmit}>
                  <input
                    type="text"
                    className="input"
                    placeholder="Search Movies..."
                    onChange={searchInputData}
                  />
                </form>
              </div>
            </div>
            <div
              className="icon-open arrow-open"
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
              className={dark ? "icon-open icon-bg" : "icon-open"}
              onMouseOver={handleHomeHoverEnter}
              onMouseLeave={handleHomeHoverLeave}
              onClick={() => {
                handleActiveButton(2);
                navigate("/");
                dispatch(toggleEnter());
                dispatch(mobileLeave());
                dispatch(sideLeave());
                dispatch(removeMenu());
              }}
            >
              <BiHome
                size={25}
                className={activeButton === 2 ? "active" : ""}
              />
              {homeHover ? (
                <div
                  className={
                    dark
                      ? "icon-name-close icon-name-open bg-[#222]"
                      : "icon-name-close icon-name-open"
                  }
                >
                  Home
                </div>
              ) : (
                ""
              )}
              <p className="icon-open-text">Home</p>
            </div>
            <div
              className={dark ? "icon-open icon-bg" : "icon-open"}
              onMouseOver={handleTrendingHoverEnter}
              onMouseLeave={handleTrendingHoverLeave}
              onClick={() => {
                handleActiveButton(3);
                navigate("/trending");
                dispatch(toggleEnter());
                dispatch(mobileLeave());
                dispatch(sideLeave());
                dispatch(removeMenu());
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
              <p className="icon-open-text">Trending</p>
            </div>
            <div
              className={dark ? "icon-open icon-bg" : "icon-open"}
              onMouseOver={handleMovieHoverEnter}
              onMouseLeave={handleMovieHoverLeave}
              onClick={() => {
                handleActiveButton(4);
                navigate("/movie");
                dispatch(toggleEnter());
                dispatch(mobileLeave());
                dispatch(sideLeave());
                dispatch(removeMenu());
              }}
            >
              <BiCameraMovie
                size={25}
                className={activeButton === 4 ? "active" : ""}
              />
              {movieHover ? (
                <p className="icon-name-close icon-name-open">Movie_Actors</p>
              ) : (
                ""
              )}
              <p className="icon-open-text">Movie Actors</p>
            </div>
            <div
              className={dark ? "icon-open icon-bg" : "icon-open"}
              onMouseOver={handleTvHoverEnter}
              onMouseLeave={handleTvHoverLeave}
              onClick={() => {
                handleActiveButton(5);
                navigate("/tv");
                dispatch(toggleEnter());
                dispatch(mobileLeave());
                dispatch(sideLeave());
                dispatch(removeMenu());
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
              <p className="icon-open-text">Tv Shows</p>
            </div>
            <div
              className={dark ? "icon-open icon-bg" : "icon-open"}
              onMouseOver={handleBookHoverEnter}
              onMouseLeave={handleBookHoverLeave}
              onClick={() => {
                handleActiveButton(6);
                navigate("/bookmark");
                dispatch(toggleEnter());
                dispatch(mobileLeave());
                dispatch(sideLeave());
                dispatch(removeMenu());
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
              <p className="icon-open-text">Bookmarks</p>
            </div>
          </div>
          {/* <div
            className={
              dark
                ? "setting-open icon-bg hover:cursor-pointer"
                : "setting-open"
            }
            onMouseOver={handleSettingHoverEnter}
            onMouseLeave={handleSettingHoverLeave}
            onClick={() => {
              handleActiveButton(7);
              dispatch(modalShow());
              dispatch(toggleEnter());
              dispatch(mobileLeave());
              dispatch(sideLeave());
              dispatch(removeMenu());
            }}
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
            <p className="setting-text">Settings</p>
          </div> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Sidebar;
