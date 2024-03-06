import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse=()=>{
  //Fetch data from TMDB API and update store
   
  useNowPlayingMovies();
  usePopularMovies();
    return (
      <div>
        <Header/>
         <MainContainer/>
         <SecondContainer/>
        {/*
          Maincontainer
          -VideoBackground
          -VideoTitle
          SecondaryContainer
          -MovieLIst *n
          -Cards*n
*/}
      
</div>
)

}
export default Browse;
