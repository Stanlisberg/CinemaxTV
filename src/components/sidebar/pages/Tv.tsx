import type { RootState, AppDispatch } from "../../../redux/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTv } from "../../../redux/tvSlice";
import { FiMenu } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";

function Tv() {
  const { tvData } = useSelector((state: RootState) => state.tv);
  const sidebar = useSelector((state: RootState) => state.sidebar.value);
  const dispatch: AppDispatch = useDispatch();
  const [status, setStatus] = useState(true);

  //-----Pagination States------
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  //----Skeleton array fill up---
  const arrayList = Array(20).fill(0);
  const data = tvData;
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

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTv());
      setStatus(false);
    }, 1000);
  }, [dispatch]);

  //------For images concating--------
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  return (
    <>
      <div className="flex">
        <div
          className={
            sidebar === true
              ? "sidebar-opac ml-auto mr-auto max-w-full mt-6 lg:pl-20 lg:pr-20 lg:mt-4"
              : "ml-auto mr-auto mt-6 lg:pl-20 lg:pr-20 lg:mt-4"
          }
        >
          <nav className="fixed left-0 top-0 flex items-center justify-between w-full bg-[#dee2e6] pt-4 pb-4 pl-4 pr-4 lg:pt-2 lg:pb-2 lg:justify-start lg:w-[100%] lg:pl-24">
            <div className="lg:justify-center lg:items-center lg:flex">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Tv Shows
              </p>
              <button className="text-white cursor-pointer h-8 text-sm rounded-md border-none mt-3 mb-3 ml-5 pt-1 pb-1 pl-3 pr-3 hidden lg:grid bg-[#e91e63]">
                Genre
              </button>
            </div>
            <div className="flex">
              <CgMenuGridO
                className="lg:hidden mr-3"
                color="#e91e63"
                size={25}
              />
              <FiMenu className="lg:hidden" size={25} />
            </div>
          </nav>
          <div className="lg:w-[100%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 mt-16 md:px-4 md:mt-20 md:mb-16 lg:px-4 xl:px-0">
            {status &&
              arrayList.map((_, index) => (
                <>
                  <div className="z-0 mx-auto xl:mx-4" key={index}>
                    <Skeleton className="skeleton mx-auto w-[260px] h-[400px] sm:w-[300px] sm:h-[420px] md:w-[210px] md:h-[310px] lg:w-[190px] lg:h-[280px] xl:w-[205px] xl:h-[300px]" />
                  </div>
                </>
              ))}
            {(currentItems && (currentItems as any[]))?.map((item, index) => (
              <>
                <Link to={`/tv/${item.id}`} key={index}>
                  <div
                    key={index}
                    className="mx-auto xl:mx-4 w-[100%]  h-[100%]"
                  >
                    <img
                      className="object-cover rounded-lg"
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
      />
    </>
  );
}

export default Tv;
