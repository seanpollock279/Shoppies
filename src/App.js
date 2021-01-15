import React, { useReducer, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '@shopify/polaris/dist/styles.css';

import './App.css';

import Film from "./Components/film";
import Search from './Components/Search';
import Header from './Components/Header';
import Noms from './Components/Noms';

const OMDB_API = 'http://www.omdbapi.com/?s=man&apikey=94435687';

const initialState = {
  loading: true,
  movies: [],
  nominations: [
    // // Title: '',
    // // Year: '',
    // Poster: '',
    // // imdbID: ''
  ],
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [list, setList] = useState(initialState.nominations);
  const [mov, setMov] = useState(undefined);

  function handleChange(event) {
    setMov(event.target.value);
  }
  
  function handleAdd(event) {
    const newList = list.concat({ mov, id: uuidv4() });
    // console.log(mov, "handleChange")
    setList(newList);

    console.log(newList);
    console.log(event.target.value);
  }

    useEffect(() => {
    
        fetch(OMDB_API)
            .then(response => response.json())
            .then(jsonResponse => {
        
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.Search
        	});
      	});
  	}, []);

    const search = searchValue => {
    	dispatch({
      	type: "SEARCH_MOVIES_REQUEST"
    	});
	
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=94435687`)
      	.then(response => response.json())
      	.then(jsonResponse => {
        	if (jsonResponse.Response === "True") {
          	dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.Search
          	});
        	} else {
          	dispatch({
                type: "SEARCH_MOVIES_FAILURE",
                error: jsonResponse.Error
          	});
          }
      	});
	  };

    const { movies, errorMessage, loading, nominations } = state;

    return (
    <>
    <Header />
    <div className="App">
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Film key={`${index}-${movie.Title}`} handleChange={handleChange} movie={movie} handleAdd={handleAdd} />
          ))
        )}
        
      </div>
      {nominations.map((nom) => (
          <Noms nom={nom} />
        ))
      }
    </div>
    </>
  );
};

export default App;
