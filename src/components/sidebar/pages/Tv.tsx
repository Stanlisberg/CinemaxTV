import type { RootState, AppDispatch } from '../../../redux/store'
import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTv } from '../../../redux/tvSlice'
import { FiMenu} from 'react-icons/fi'
import { CgMenuGridO } from 'react-icons/cg'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function Tv () {
  const { tvData } = useSelector((state: RootState) => state.tv)
  const sidebar = useSelector((state: RootState) => state.sidebar.value);
  const dispatch: AppDispatch = useDispatch()
  const [status, setStatus] = useState(true)


  const arrayList = Array(20).fill(0);
  const data = tvData;
  console.log(data)

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPopular());
      setStatus(false);
    }, 1000);
  }, [dispatch]);

  //---------For images concating--------
  const baseImgUrl = "https://image.tmdb.org/t/p"
  const size = "w500"
 

  return(
    <div className='flex'>
      <div className={sidebar === true ? 'sidebar-opac ml-auto mr-auto max-w-full mt-6 lg:pl-20 lg:pr-20 lg:mt-4': 'ml-auto mr-auto mt-6 lg:pl-20 lg:pr-20 lg:mt-4'}>
        <nav className='fixed left-0 top-0 flex items-center justify-between w-full bg-[#dee2e6] pt-4 pb-4 pl-4 pr-4 lg:pt-2 lg:pb-2 lg:justify-start lg:w-[100%] lg:pl-24'>
          <div className='lg:justify-center lg:items-center lg:flex'>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Tv Shows</p> 
            <button className='text-white cursor-pointer h-8 text-sm rounded-md border-none mt-3 mb-3 ml-5 pt-1 pb-1 pl-3 pr-3 hidden lg:grid bg-[#e91e63]'>Genre</button>
          </div>
            <div className='flex'>
              <CgMenuGridO className='lg:hidden mr-3' color='#e91e63' size={25}/>
              <FiMenu className='lg:hidden' size={25}/>
            </div>
        </nav>
        <div className='lg:w-[100%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 mt-16 md:px-4 md:mt-20 md:mb-16 lg:px-4 xl:px-0'>
          {(data as unknown as any[])?.map(item => (
            <div key={item.id} className='mx-auto xl:mx-4 w-[100%]  h-[100%]'>
              <img className=' object-cover rounded-lg' src={`${baseImgUrl}/${size}${item.poster_path}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tv