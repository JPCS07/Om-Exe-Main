import React from 'react';
import BookMain from './BookMain';
import hall from './Img/hall.jpg';

const Hall = () => {
    return (
        <div>
            <BookMain image={hall} roomName="Multipurpose Hall" links="/Roomdetail"/>      
        </div>
    )
}

export default Hall;
