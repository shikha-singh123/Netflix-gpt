import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useHorrorMovies= () => {
  // Fetch Data from TMDB API and update store
  
  const horrorMovies = useSelector(store => store.movies.horrorMovies);
  const dispatch = useDispatch();

  const getHorrorMovies = async () =>{
    const data=await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27?page=1', 
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

   useEffect(() =>{
      !horrorMovies && getHorrorMovies();
   },[])
}

export default useHorrorMovies;