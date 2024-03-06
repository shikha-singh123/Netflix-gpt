import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const trendingMovies = useSelector(store => store.movies.trendingMovies);
  const dispatch = useDispatch();

  const getTrendingMovies = async () =>{
    const data=await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?page=1', 
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

   useEffect(() =>{
      !trendingMovies && getTrendingMovies();
   },[])
}

export default useTrendingMovies;