import {useEffect, useState} from "react";
import axios from 'axios';
import Movie from '../components/movie.js';

function Home(){
    const [loading, setloading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies  = async() => {
    const response = await axios.get("https://api.tvmaze.com/search/shows?q=space")
        setMovies(response.data);
        setloading(false);
    }
    useEffect(()=>{
        getMovies()
    },[]);
    console.log(movies)


    return <div>
    {loading ? <h1>Loading...</h1>:<div>{movies.map(movie => 
        <Movie 
            key={movie.show.id}
            id={movie.show.id}
            name={movie.show.name}
            summary={movie.show.summary}
            images={movie.show.image}
        />
        )}
        </div>
    }
    </div>;
}
export default Home;