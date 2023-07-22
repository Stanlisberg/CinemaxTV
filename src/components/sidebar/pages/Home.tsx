import '../../../styles/home.css'
import { useEffect } from 'react';
import type { RootState, AppDispatch } from '../../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDiscover } from '../../../redux/homeSlice'


function Home () {

  const data = useSelector((state: RootState) => state.home)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    // Fetch the customers data when the component mounts
    dispatch(fetchDiscover());
  }, [dispatch]);

console.log(data)



//  const [data, setData] = useState()
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGQyNDQ2ZTg1ZmQ2Mzc3NGM5ZjNhODY2N2U1MmI3ZiIsInN1YiI6IjYxMDNhNWQ0NDI4NGVhMDA1ZDE5OTc2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FG38CkW-ijLIMRLiOIeoPLJeQV_0O2bSIK5vymhKKNE'
//     }
//   };
  

//   const fetchData =() => {
//     fetch('https://api.themoviedb.org/3/discover/movie', options)
//     .then(response => {
//       return response.json()
//       // throw new Error('There is an error!')
//     })
//     .then(response => {
//       const { results } = response

//       console.log(results)
//       setData(results)
//     })
//     .catch(err => console.error(err));
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

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
          {/* {(data as unknown as any[])?.map(item => (
            <>
              <img className='data-card' src={`${baseImgUrl}/${size}${item.poster_path}`} width={210} height={300}/>
            </>
          ))} */}
        </main>
      </div>
    </div>
  )
}

export default Home;