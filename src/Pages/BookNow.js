import React from 'react';
import BookMain from './BookMain';
import acClassic from './room/acClassic.JPG';
import executive from './room/executive.JPG';
import executiveAc from './room/executiveAc.JPG';
import family from './room/family.JPG';
import premium from './room/premium.JPG';
import premiumDelux from './room/premiumDelux.JPG';
import royalAc from './room/royalAc.JPG';

const BookNow = () => {
    return (
        <div>
            <BookMain image={acClassic} roomName="Ac Classic" size="Size 19m2" bed="1 Large Double Bed"/>
            <BookMain image={executive} roomName="Executive" size="Size 21m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={executiveAc} roomName="Executive Ac" size="Size 21m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={family} roomName="Family" size="Size 33m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={premium} roomName="Premium" size="Size 27m2" bed="1 Large Double Bed" links="/Roomdetail"/>
            <BookMain image={premiumDelux} roomName="Premium Delux" size="Size 27m2" bed="1 Single Bed" links="/Roomdetail"/>
            <BookMain image={royalAc} roomName="Royal Ac" size="Size 27m2" bed="1 Single Bed" links="/Roomdetail"/>
        </div>
    )
}

export default BookNow;