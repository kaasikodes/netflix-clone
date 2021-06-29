import { useState, useEffect } from 'react'
import axios from '../axios'
import '../styles/row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'





const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const handleClick = (movie) => {
        if (trailerUrl) {

            setTrailerUrl('');
            
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                        .then( url => {
                            const urlParams = new URLSearchParams(new URL(url).search)
                            const id =  urlParams.get("v")
                            setTrailerUrl(id)

                        }).catch(err => console.log(err))
        }
        
    }
    useEffect(()=>{
        const fetchData = async () =>{
            const request = await axios.get(fetchUrl)
            setMovies(()=> request.data.results)
            return request;


        }
        fetchData()

    }, [fetchUrl])

    console.table(movies)

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,

        }
    }

    return (
        <div className = "row">
            <h2>{title}</h2>
            {/* use sass to create this classes later */}
            {/* what is cache n how does it work, how does rct do it */}
            <div className = "row__posters">
                {
                    movies.map((movie)=>{
                        return <img 
                            key={movie.id} 
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                            src= {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt= {movie.name} 
                            onClick = {()=> handleClick(movie)}

                        />

                    })
                }

            </div>

            {trailerUrl &&  <Youtube videoId = {trailerUrl} opts = {opts}/>}
            
        </div>
    )
}

Row.defaultProps = {
    isLargeRow: false
}

export default Row
