import React from 'react';
import StandardCard from '../common/standardCard';

const Item = ({ id, onMouseOut,
    onMousesOver, onClick, image, price, name, description }) => {
    return (
        <div>
            <StandardCard
                onMouseOut={onMouseOut}
                onMousesOver={onMousesOver}
                image={image}
                onClick={onClick}
                price={price}
                name={name}
                description={description}
                id={id}
            />
        </div>
    );
}
export default Item