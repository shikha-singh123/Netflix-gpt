import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse=()=>{
  //Fetch data from TMDB API and update store
   const showGptSearch=useSelector((store)=>
    store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useHorrorMovies();
  useUpcomingMovies();
    return (
      <div>
        <Header/>{

          showGptSearch?(<GptSearch/>):(
            <>
               <MainContainer/>
               <SecondContainer/>
          </>
          )
        }
        
  
      
</div>
)

}
export default Browse;
