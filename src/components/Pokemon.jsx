import React from 'react'
import styled from 'styled-components'

const PokemonCardStyle = styled.div`
    display: flex;
    border: 2px solid black;
    border-radius: 4px;
    margin: 10px;
    justify-content: space-around;
    box-shadow: 0 0 6px blueviolet;
    background-color: #e7cdde;

    .pokemon-card {
        display: flex;
        align-items: center;
        flex-direction: column;

        >div p, div h3 {
            font-size: 16px;
        }
    }

    .id-fav {
        margin-top: 25px;

        > p {
            font-size: 18px;
        }
    }
`;

const TypePokemon = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px;
    flex-direction: column;
    text-align: center;

    .types-button {
        background-color: #0e6f9f;
        color: white;
        border-radius: 4px;
        padding: 6px;
    }
`;

export const Pokemon = ({pokemon}) => {

    const onFavClick = () => {
        console.log("clicou!!!")
    }

    return (
        <PokemonCardStyle>
            <div className="pokemon-card">
                <div className="pokemon-img">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>  
            </div>
            <div>
                <TypePokemon>
                    <h3>{pokemon.name}</h3>
                    {pokemon.types.map((type, index) => {
                        return (
                            <div className="types-button" key={index}>{type.type.name}</div>
                        )
                })}
                </TypePokemon>
            </div>
            <div className="id-fav">
                <p><strong>#{pokemon.id}</strong></p>
                <button className="fav-button" onClick={onFavClick}>
                    &#128151;
                </button>
            </div>
        </PokemonCardStyle>
    )
}
