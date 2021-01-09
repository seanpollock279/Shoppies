import React from 'react';

const PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export default function film({ movie }) {
    const poster = movie.Poster === 'N/A' ? PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div>
            <h2>{movie.Title}</h2>
            <div>
                <img src={poster} />
            </div>
            <p>({movie.Year})</p>
        </div>
    );
}
