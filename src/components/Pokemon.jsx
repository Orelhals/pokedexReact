import React from 'react'

export const Pokemon = ({pokemon}) => {
    console.log(pokemon)
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            {pokemon.name}
        </div>
    )
}
