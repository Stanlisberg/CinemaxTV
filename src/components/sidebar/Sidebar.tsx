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

  const handleSidebar = () => {
    setOpenSidebar(true);
  };

  const handleHover = () => {

  }
  return (
    <div>
      <div className={openSidebar ? "sidebar-open" : 'sidebar-close'}>
        <div className="logo-div">
          <TbTriangleSquareCircle
            size={50}
            // color="#ad4806"
            color='#e91e63'
            className={openSidebar ? "logo-open" : 'logo-close'}
          />
          {openSidebar && <p className='logo-text'>CinemaxTV</p>}
        </div>
        <div className={openSidebar ? " side-wrapper-open" : "side-wrapper-close"}>
          {/* <img src={logo} alt='logo-image' /> */}
          <div className={openSidebar?  "icon-open arrow-open" : 'icon-close'}>
            <div className='icon-div'>
             <MdOutlineKeyboardDoubleArrowRight
                size={25}
                onClick={handleSidebar}
                className='icon'
            />
            </div>
          </div>
          <div className={openSidebar?  "icon-open" : 'icon-close'}>
            <BiSearchAlt size={25} className="search icon" />
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
          <div className={openSidebar?  "icon-open" : 'icon-close'}>
            <BiHome size={25}  className='icon'/>
            {openSidebar && <p className="icon-open-text">Home</p>}
          </div>
          <div className={openSidebar?  "icon-open" : 'icon-close'}>
            <AiOutlineFire size={25}  className='icon'/>
            {openSidebar && <p className="icon-open-text">Trending</p>}
          </div>
          <div className={openSidebar?  "icon-open" : 'icon-close'}>
            <BiCameraMovie size={25}  className='icon'/>
            {openSidebar && <p className="icon-open-text">Movies</p>}
          </div>
          <div className={openSidebar?  "icon-open" : 'icon-close'}>
            <RiSlideshow3Line size={25}  className='icon'/>
            {openSidebar && <p className="icon-open-text">TV Shows</p>}
          </div>
          <div className={openSidebar?  "icon-open" : 'icon-close'}>
            <BiBookBookmark size={25}  className='icon'/>
            {openSidebar && <p className="icon-open-text">Bookmarks</p>}
          </div>
        </div>
        <div className={openSidebar?  "setting-open" : 'setting-close'}>
            <IoMdSettings size={25}  className='setting-icon'/>
            {openSidebar && <p className="setting-text">Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
