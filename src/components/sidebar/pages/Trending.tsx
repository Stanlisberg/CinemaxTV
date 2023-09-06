import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { RootState, AppDispatch } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrending } from "../../../redux/trendingSlice";
import { FaTimes } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import { mobileEnter, mobileLeave } from "../../../redux/mobileSlice";
import { toggleEnter, toggleLeave } from "../../../redux/toggleSlice";
import { removeMenu, showMenu } from "../../../redux/changeIconSlice";
import { onDark, offDark } from "../../../redux/darkMode.Slice";

function Trending() {
  const { trendingData, trendingLoading } = useSelector(
    (state: RootState) => state.trending
  );
  const sidebar = useSelector((state: RootState) => state.sidebar.value);
  const icon = useSelector((state: RootState) => state.icon.value);
  const dark = useSelector((state: RootState) => state.dark.value);
  const dispatch: AppDispatch = useDispatch();

  //-----Pagination States------
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  //----Skeleton array fill up---
  const arrayList = Array(20).fill(0);
  const data = trendingData;
  console.log(data);

  //----Pagination Function-----
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  //----Pagination effect------
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  //---Effect for loading and data---
  useEffect(() => {
    dispatch(fetchTrending());
  }, []);

  //---------For images concating--------
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  const backGroundRemoveMenu = () => {
    if (icon === false) {
      dispatch(toggleEnter());
      dispatch(removeMenu());
    }
  };

  return (
    <>
      <div className="flex justify-between" onClick={backGroundRemoveMenu}>
        <div
          className={
            sidebar === true
              ? "opacity-[0.5] ml-auto mr-auto max-w-full mt-6 lg:pl-20 lg:pr-20 lg:mt-4"
              : "ml-auto mr-auto mt-6 lg:pl-20 lg:pr-20 lg:mt-4"
          }
        >
          <nav
            className={
              dark
                ? "fixed left-0 top-0 flex items-center justify-between w-full text-white bg-[#222] pt-4 pb-4 pl-4 pr-4 lg:pt-2 lg:pb-2 lg:justify-between lg:w-[100%] lg:pl-24 lg:pr-[60px] z-10"
                : "fixed left-0 top-0 flex items-center justify-between w-full bg-[#dee2e6] pt-4 pb-4 pl-4 pr-4 lg:pt-2 lg:pb-2 lg:justify-between lg:w-[100%] lg:pl-24 lg:pr-[60px] z-10"
            }
          >
            <div className="lg:justify-center lg:items-center lg:flex">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Trending
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
          <div className="lg:w-[100%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 mt-16 md:px-4 md:mt-20 md:mb-16 lg:px-4 xl:px-0">
            {trendingLoading &&
              arrayList.map((_, index) => (
                <div className="z-0 mx-auto xl:mx-4" key={index}>
                  <Skeleton className="skeleton mx-auto w-[100px] h-[160px]" />
                </div>
              ))}
            {(currentItems && (currentItems as any[]))?.map((item, index) => (
              <>
                <Link to={`/trending/${item.id}`} key={index}>
                  <div key={index} className="mx-auto xl:mx-4 w-[98%]  h-[98%]">
                    <img
                      className="object-cover rounded-lg border-[1.5px] border-[#e91e63] image w-[100%]  h-[100%]"
                      src={`${baseImgUrl}/${size}${item.poster_path}`}
                    />
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page"
        nextLinkClassName="page"
        activeLinkClassName="page-active"
        breakLinkClassName="break"
      />
    </>
  );
}

export default Trending;
