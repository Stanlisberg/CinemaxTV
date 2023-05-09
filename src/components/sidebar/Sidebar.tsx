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
  return (
    <div>
      <div className="side-container">
        <TbTriangleSquareCircle size={50} color="#ad4806" className='logo'/>
        <div className="side-wrapper">
          {/* <img src={logo} alt='logo-image' /> */}
          <div className='icon'>
            <MdOutlineKeyboardDoubleArrowRight size={25} />
          </div>
          <div className='icon'>
            <BiHome size={25} />
          </div>
          <div className='icon'>
            <BiSearchAlt size={25} />
          </div>
          <div className='icon'>
            <AiOutlineFire size={25} />
          </div>
          <div className='icon'>
            <BiCameraMovie size={25} />
          </div>
          <div className='icon'>
            <RiSlideshow3Line size={25} />
          </div>
          <div className='icon'>
            <BiBookBookmark size={25} />
          </div>
          <div className='icon setting'>
            <IoMdSettings size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
