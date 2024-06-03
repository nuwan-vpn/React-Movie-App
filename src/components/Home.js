import React, { useState } from 'react';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//API
import API from '../API';

import NoImage from '../images/no_image.jpg';

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = '') => {
      try {
        setError(false);
        setLoading(true);
  
        const movies = await API.fetchMovies(searchTerm, page);
  
        setState(prev => ({
          ...movies,
          results:
            page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    useEffect(() => {
      fetchMovies(1);
    }, []);
  
    console.log(state);


  
    return <div>Home Page</div>;
  };
  
export default Home;