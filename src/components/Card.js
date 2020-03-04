import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {

    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} alt="robots" width="200" height="200" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;