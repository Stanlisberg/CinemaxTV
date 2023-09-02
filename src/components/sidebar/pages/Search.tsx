import { useEffect } from 'react'
import { fetchSearch } from '../../../redux/searchSlice';
import type { RootState, AppDispatch } from '../../../redux/store';
import { useDispatch, useSelector } from "react-redux";


function Search() {
    const { searchData } = useSelector((state: RootState) => state.search);
    const dispatch: AppDispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchSearch())
    },[])

    console.log(searchData)

  return (
    <div className="text-[30px] font-bold border border-black fixed left-0 lg:left-[80px] h-screen w-[1170px] z-20 bg-[teal] ">
      Big Seven
    </div>
  );
}

export default Search;
