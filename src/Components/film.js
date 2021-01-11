import React from 'react';
import '@shopify/polaris/dist/styles.css';
import './Styles/film.css';

import { AppProvider, Card } from '@shopify/polaris';

const PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export default function film({ movie }) {
    const poster = movie.Poster === 'N/A' ? PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <AppProvider>
            <div className="filmContainer">
                <h2 className="movie__title">{movie.Title}</h2>
                <Card className="movie__card">
                    <img className="movie__poster" src={poster} />
                </Card>
                <p className="movie__year">({movie.Year})</p>
            </div>
        </AppProvider>
    );
}
