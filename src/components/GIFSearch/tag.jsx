import React, { useState } from 'react';
import useGif from '../../hooks/useGif';
import './GIFSearch.scss';

const Tag = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    const [tag, setTag] = useState('Dogs');
    const {gif, fetchGif} = useGif(tag, apiURL);

    return (
        <div className="gif-container">
            <h1 className="gif-heading">Random {tag} Gif</h1>
            <img className="gif-image" width="500" src={gif} alt="Random Gif" />
            <input className="gif-input" value={tag} onChange={(e) => setTag(e.target.value)} />
            <button className="gif-button" onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag;