import { useEffect, useState, useRef } from "react";
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};
  
export const useHomeFetch = () =>{
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    const fetchMovies = async (page, searchTerm = '') => {
      try {
        setError(false);
        setLoading(true);
        const movies = await API.fetchMovies(searchTerm, page);
        setState(movies);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
  
    useEffect(() => {
      fetchMovies(1);
    }, []);

    return { state, loading, error };
};