import React from 'react'
import styled from 'styled-components'

const PokemonCardStyle = styled.div`

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid black;
        padding: 10px;
        margin: 10px;
    }
`;

export const Pokemon = ({pokemon}) => {
    console.log(pokemon)
    return (
        <PokemonCardStyle>
            <div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                {pokemon.name}
            </div>
        </PokemonCardStyle>
    )
}
