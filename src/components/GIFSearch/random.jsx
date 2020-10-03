import React from 'react';
import useGif from '../../hooks/useGif';
import './GIFSearch.scss';

const Tag = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    const {gif, fetchGif} = useGif(null, apiURL);

    return (
        <div className="gif-container">
            <h1 className="gif-heading">Random Gif</h1>
            <img className="gif-image" width="500" src={gif} alt="Random Gif" />
            <button className="gif-button" onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag;