import { useState, useEffect } from 'react';
import axios from 'axios';

const useGif = (tag, url) => {
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return { gif, fetchGif, url }
}

export default useGif;