import {useState, useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'
import '../styles/banner.css'

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
    
    const [movie,setMovie] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            const request = await axios.get(requests.fetchNetflixOriginals)
            const randomIndex = Math.floor(Math.random() * request.data.results.length -1)
            setMovie(() => request.data.results[randomIndex])


        }
        fetchData()
        // return () => { read more abou this n use this, while port is set up n job search work on project with google maps api - industry work
        //     cleanup
        // }
    }, [])

    console.log(movie)
    const truncate = (str,n)=>{
        return str?.length > n ? str.substr(0,n-1) + "..." : str
    }
    return (
        <header className = "banner" style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage:`url(${base_url}${movie?.backdrop_path})`
        }}>
            <div className="banner__content">
                
                {/* always create an overview of your component */}
                {/* title */}
                <h2 className = "banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                    {/* find out more abou ?(optional chaining it is called) */}
                </h2>
                {/* div > 2 btns */}
                <div className= "banner_btns_container">
                    {/* rmbr *2 to add 2 of same simultaneously */}
                    <button className = "banner__button">Play</button>
                    <button className = "banner__button">My List</button>
                </div>
                {/* description */}
                <p  className = "banner_description">
                    {truncate(movie?.overview, 150)}
                </p>
                {/* Need to find out about redux n context api */}
                {/* need to find out about emmet commands so can speed up workflow */}
            </div>
            <div className = "banner__fade_bottom"/>
        </header>
    )
}

export default Banner
