import axios from 'axios';

const moviesApi = {
    title: (x) => {
        const url = await axios.get('http://localhost:3002/movies')
        const response = url.data;
        return data[x].title
    },
    poster: (x) => {
        const url = await axios.get('http://localhost:3002/movies')
        const response = url.data;
        return data[x].poster_path
    },
    overview: (x) => {
        const url = await axios.get('http://localhost:3002/movies')
        const response = url.data;
        return data[x].overview
    }
}