import '../../../styles/home.css'
import { useEffect } from 'react';
import type { RootState, AppDispatch } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDiscover } from '../../../redux/homeSlice'


function Home () {
  const { homeData } = useSelector((state: RootState) => state.home)
  const dispatch: AppDispatch = useDispatch()

  const data = homeData;

  useEffect(() => {
    dispatch(fetchDiscover());
  }, []);

console.log(data)

  //---------For images concating--------
  const baseImgUrl = "https://image.tmdb.org/t/p"
  const size = "w500"
 

  return(
    <div className='home-container'>
      <div className='home-wrapper'>
        <nav className='home-nav'>
          <p>Discover Movies</p> 
          <button className='button'>Genre</button>
        </nav>

        <main className='data-content'>
          {(data as unknown as any[])?.map(item => (
            <div key={item.id}>
              <img className='data-card' src={`${baseImgUrl}/${size}${item.poster_path}`} width={210} height={300}/>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Home;