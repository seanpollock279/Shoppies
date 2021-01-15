import React from 'react';
import '@shopify/polaris/dist/styles.css';
import './Styles/film.css';

import { AppProvider, Card } from '@shopify/polaris';

const PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export default function Noms( { nom }) {

    const poster = nom === 'N/A' ? PLACEHOLDER_IMAGE : nom;
    return (
        <AppProvider>
                <Card className="movie__card">
                    <img className="movie__poster" src={poster} />
                </Card>
        </AppProvider>
    );
}
