import { BiSolidError } from "react-icons/bi";
import { mobileEnter, mobileLeave } from "../../../redux/mobileSlice";
import { toggleEnter, toggleLeave } from "../../../redux/toggleSlice";
import { removeMenu, showMenu } from "../../../redux/changeIconSlice";
import { FaTimes } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { onDark, offDark } from "../../../redux/darkMode.Slice";

function Bookmark() {
  const dark = useSelector((state: RootState) => state.dark.value);
  const icon = useSelector((state: RootState) => state.icon.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="min-h-screen my-auto flex justify-center items-center mx-auto px-5 lg:ml-20">
      <nav
        className={
          dark
            ? "fixed left-0 top-0 flex items-center justify-between w-full text-white bg-[#222] pt-4 pb-4 pl-4 pr-4 lg:pt-2 lg:pb-2 lg:justify-between lg:w-[100%] lg:pl-24 lg:pr-[60px] z-10"
            : "fixed left-0 top-0 flex items-center justify-between w-full bg-[#dee2e6] pt-4 pb-4 pl-4 pr-4 lg:pt-2 lg:pb-2 lg:justify-between lg:w-[100%] lg:pl-24 lg:pr-[60px] z-10"
        }
      >
        <div className="lg:justify-center lg:items-center lg:flex">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Bookmarks
          </p>
          <button className="text-white cursor-pointer h-8 text-sm rounded-md border-none mt-3 mb-3 ml-5 pt-1 pb-1 pl-3 pr-3 hidden lg:grid bg-[#e91e63]">
            Genre
          </button>
        </div>
        {icon ? (
          <div className="flex">
            <>
              {dark ? (
                <div className="flex justify-center items-center text-[20px] font-[600]">
                  <div className=" hidden lg:grid mr-2">Light Mode</div>
                  <div className="hover:bg-[#111] hover:rounded-[50%]">
                    <IoIosSunny
                      className="cursor-pointer"
                      size={34}
                      color="#fff"
                      onClick={() => dispatch(offDark())}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center text-[20px] font-[600]">
                  <div className=" hidden lg:grid mr-2">Dark Mode</div>
                  <div className="hover:bg-[slategray] hover:rounded-[50%]">
                    <WiMoonAltWaningGibbous6
                      className="cursor-pointer"
                      size={34}
                      color="#222"
                      onClick={() => {
                        dispatch(onDark());
                        console.log("hey");
                      }}
                    />
                  </div>
                </div>
              )}
            </>
            <div className="flex cursor-pointer">
              <CgMenuGridO
                className="lg:hidden"
                size={34}
                color="#e91e63"
                onClick={() => {
                  dispatch(mobileEnter());
                  dispatch(toggleLeave());
                  dispatch(showMenu());
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex">
            <>
              {dark ? (
                <div className="flex justify-center items-center text-[20px] font-[600]">
                  <div className=" hidden lg:grid mr-2">Dark Mode</div>
                  <div className="hover:bg-[#111] hover:rounded-[50%]">
                    <IoIosSunny
                      className="lg:hidden cursor-pointer"
                      size={34}
                      color="#fff"
                      onClick={() => dispatch(offDark())}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center text-[20px] font-[600]">
                  <div className=" hidden lg:grid mr-2">Dark Mode</div>
                  <div className="hover:bg-[slategrey]  hover:rounded-[50%]">
                    <WiMoonAltWaningGibbous6
                      className="lg:hidden cursor-pointer"
                      size={34}
                      color="#222"
                      onClick={() => dispatch(onDark())}
                    />
                  </div>
                </div>
              )}
            </>
            <div className="flex cursor-pointer">
              <FaTimes
                className="lg:hidden"
                color="#e91e63"
                size={34}
                onClick={() => {
                  dispatch(mobileLeave());
                  dispatch(toggleEnter());
                  dispatch(removeMenu());
                }}
              />
            </div>
          </div>
        )}
      </nav>
      <div className="font-mono text-3xl lg:text-4xl text-center text-[#e91e63] font-[800] flex flex-col-reverse justify-center items-center">
        Sorry, Bookmarks Not Ready Yet!
        <BiSolidError size={60} color="#e91e63" className="" />
        <div>

        </div>
      </div>
    </div>
  );
}

export default Bookmark;
