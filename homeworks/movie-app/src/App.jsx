import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const handleFetchUpComingMovie = async () => {
    try {
      const endpoint =
        ' https://api.themoviedb.org/3/movie/upcoming?api_key=f5604f45a67acfff1cd1e7f5065da619';

      const apiResponse = await axios.get(endpoint);
      setUpcomingMovies(apiResponse.data.results);
    } catch (error) {}
  };

  const handleFetchNowPlayingMovie = async () => {
    try {
      const endpoint =
        ' https://api.themoviedb.org/3/movie/upcoming?api_key=f5604f45a67acfff1cd1e7f5065da619';

      const apiResponse = await axios.get(endpoint);
      setNowPlaying(apiResponse.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchUpComingMovie();
    handleFetchNowPlayingMovie();
  }, []);

  return <div></div>;
}

export default App;
