import React from 'react';
import BookMain from './BookMain';
import resto from './Img/resto.JPG';


const Resto = () => {
    return (
        <div>
            <BookMain image={resto} roomName="Restaurant" links="/Roomdetail"/>
        </div>
    )
}

export default Resto
