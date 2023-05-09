import { useState} from 'react'
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
  }
  return (
    <div>
      <div className="sidebar-open">
        <TbTriangleSquareCircle size={50} color="#ad4806" className='logo-open'/>
        <div className="side-wrapper-open">
          {/* <img src={logo} alt='logo-image' /> */}
          <div className='icon-open arrow'>
            <MdOutlineKeyboardDoubleArrowRight size={25} onClick={handleSidebar}/>
          </div>
          <div className='icon-open'>
            <BiSearchAlt size={25} />
          </div>
          <div className='icon-open'>
            <BiHome size={25} />
          </div>
          <div className='icon-open'>
            <AiOutlineFire size={25} />
          </div>
          <div className='icon-open'>
            <BiCameraMovie size={25} />
          </div>
          <div className='icon-open'>
            <RiSlideshow3Line size={25} />
          </div>
          <div className='icon-open'>
            <BiBookBookmark size={25} />
          </div>
          {/* <div className='icon-open setting setting-open'>
            <IoMdSettings size={25} />
          </div> */}
        </div>
        <div className='icon-open setting setting-open'>
            <IoMdSettings size={25} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
