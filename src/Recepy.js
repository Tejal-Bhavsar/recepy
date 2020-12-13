import React from 'react'

export default function Recepy({title,calories,image,ingredients}) {
    return (
        <div>
            <div className="recepy">
                <h1>{title}</h1>
                <img src={image} />
                <p>ingredients</p>
                <ol>{ingredients.map(ingredient => 
                    (<li>{ingredient.text}</li>))}</ol>
                <p>calories: {calories}</p>
            </div>
        </div>
    )
}
