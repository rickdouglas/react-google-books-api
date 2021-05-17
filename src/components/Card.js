import React from 'react';

function Card(thumbnail, title, description, publishedDate, handleCard ) {
    
    
    
    return(
        <div>
            <button  onClick={handleCard}>close</button>
            <img src={thumbnail} />
            <span>{title}</span>
            <span>{description}</span>
            <span>{publishedDate}</span>
        </div>
    );
} 

export default Card;