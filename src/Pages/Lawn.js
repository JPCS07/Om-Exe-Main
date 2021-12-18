import React from 'react';
import BookMain from './BookMain';
import lawn from './Img/lawn.JPG';

const Lawn = () => {
    return (
        <div>
            <BookMain image={lawn} roomName="Lawns" links="/Roomdetail"/>      
        </div>
    )
}

export default Lawn;
