import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchDetail } from "../../redux/movieDetailSlice";
import { FaPlay } from "react-icons/fa";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";

function MovieInfo() {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const navigate = useNavigate();
  const { movieId } = useParams();

  const { info } = useSelector((state: RootState) => state.movieDetail);
  const dispatch: AppDispatch = useDispatch();

  //-----Distructure for movie and video-------
  const { genres, videos } = info;

  const youtube = videos?.results?.find((item: any) => item.type === "Trailer");
  // console.log(youtube?.key)

  //---------For images, youtube and url concating--------
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";
  const youtubeUrl = `https://www.youtube.com/embed/${youtube?.key}`;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=videos`;

  useEffect(() => {
    dispatch(fetchDetail(url));
  }, []);

  return (
    <div className="mx-auto mt-0 lg:pl-20 lg:pr-20 lg:mt-0 z-50 min-h-[100vh]">
      <div className="px-3 mt-5">
        <button className="flex justify-center items-center hover:bg-[#e91e63] hover:text-[#fff] text-[#e91e63] border border-[#e91e63] px-2 py-[0px] md:px-[14px] md:py-[3px] rounded-md">
          <MdOutlineKeyboardBackspace className="" />
          <p
            className="ml-[4px] font-mono text-lg drop-shadow-xl"
            onClick={() => navigate("/")}
          >
            Back
          </p>
        </button>
        {showVideo === true ? (
          <div className="relative w-[100%] mt-4 border">
            <iframe
              className="frame w-[100%] sm:w-[85%] h-[190px]"
              src={youtubeUrl}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <div
              className="absolute top-0 right-0 sm:right-[123px] flex justify-center items-center rounded-md border px-[10px]  sm:px-4 sm:py-1 bg-[#e91e63] border-[#e91e63] h-8 text-white hover:bg-pink-700 cursor-pointer"
              onClick={() => setShowVideo(false)}
            >
              X
            </div>
          </div>
        ) : (
          <div className="relative mt-4 h-[100%] max-w-[100%]">
            <h1 className="absolute z-10 right-[0] left-[16px] bottom-[15%] text-[#e91e63] hidden text-xl font-bold lg:grid">
              {info.title}
            </h1>
            <img
              className="img object-cover rounded-md shadow-lg w-full sm:w-[85%]"
              src={`${baseImgUrl}/${size}${info.backdrop_path}`}
            />
            <div className="absolute top-0 left-0 w-full sm:w-[85%] h-full bg-black bg-opacity-60"></div>
            <a
              href="#"
              className="absolute left-[25px] md:left-[40px] top-[75%] py-[4px] px-[10px] md:top-[90%] text-[#fff] border border-[#e91e63] rounded-md cursor-pointer flex justify-center items-center drop-shadow-[0.2] transform translate-x-[-30%] translate-y-[-30%] hover:bg-[#e91e63] hover:text-[#fff]"
              onClick={() => setShowVideo(true)}
            >
              <FaPlay size={15} />
              <p
                className="ml-2 hidden md:grid font-mono text-lg"
              >
                {" "}
                Watch
              </p>
            </a>
          </div>
        )}
      </div>
      <div className="genre mx-[6px]">
        {genres?.map((item: any) => (
          <button
            key={item.id}
            className="border border-[#e91e63] py-[2px] px-3 mt-3 ml-[5px] md:px-4 md:py-[4px] rounded-md text-center text-[#fff] font-medium text-md bg-[#e91e63]"
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="lg:hidden ml-[15px] my-[12px] text-[#e91e63] font-bold text-[27px]">
        {info.title}
      </div>
      <div className="md:flex md:justify-between md:items-center mt-[20px] mx-[13px]">
        <div className="flex justify-start">
          <div className="border border-[#e91e63] flex justify-center items-center py-[28px] px-[25px] md:py-[35px] md:px-[30px] text-[#e91e63] text-2xl md:text-3xl rounded-md">
            {info.vote_average}
          </div>
          <div className="flex justify-center items-center">
            <div className="ml-[10px]">
              <p className="text-[#e91e63]">
                Realease Date:{" "}
                <span className="text-black">{info.release_date}</span>
              </p>
              <p className="text-[#e91e63]">
                Duration: <span className="text-black">{info.runtime}min</span>
              </p>
              <p className="text-[#e91e63]">
                Status: <span className="text-black">{info.status}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[15px] md:mt-[0px]">
          <button className="flex justify-center items-center border border-[#e91e63] hover:bg-[#e91e63] hover:text-[#fff] text-[#e91e63] py-[5px] px-2 md:py-[3px] md:px-2 rounded-md">
            <BiBookBookmark size={20} />
            <p className="ml-2 md:ml-3 font-mono text-[17px] md:text-[20px]">
              Bookmark
            </p>
          </button>
        </div>
      </div>
      <div className="mx-[13px] mt-[20px] text-justify text-lg">
        <div className="font-mono text-2xl">
          Movie <span className="text-[#e91e63]">Review:</span>
        </div>
        {info.overview}
      </div>
    </div>
  );
}

export default MovieInfo;