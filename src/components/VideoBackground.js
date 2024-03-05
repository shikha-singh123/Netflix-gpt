import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground=({movieId})=>{
    const trailerView=useSelector(store=>store.movies?.trailerView);

    // const [trailerId,setTrailerId]=useState(null);
    //fetch trailer video && updating the store with trailer data
    useMovieTrailer(movieId);
 
    return (
        <div className="w-screen">
        <iframe className="w-screen aspect-video" 
        src={"https://www.youtube.com/embed/"+trailerView?.key+"?autoplay=1&mute=1"}
         title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen></iframe>
        </div>
        
    ) 


}
export default VideoBackground;