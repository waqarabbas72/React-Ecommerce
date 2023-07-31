import React from 'react'
import Card from './Card'
import bags from '../../images/6-2-women-bag-png-hd.png';
import clothing from '../../images/clothings.png';
import shoes from '../../images/shoes.png'

const data = [
    { name: 'Bags', btn: 'Shop Now', img: bags },
    { name: 'Clothing', btn: 'Shop Now', img: clothing },
    { name: 'Shoes', btn: 'Shop Now', img: shoes }
];

const Cards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:mx-10 my-6'>
            <Card data={data} />
        </div>
    )
};

export default Cards;
