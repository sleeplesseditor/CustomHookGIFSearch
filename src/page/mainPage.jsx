import React from 'react';
import './page.scss';

import Random from '../components/GIFSearch/random';
import Tag from '../components/GIFSearch/tag';

const MainPage = () => {

    return (
        <div className="page-container">
            <Random />
            <Tag />
        </div>
    )
}

export default MainPage;