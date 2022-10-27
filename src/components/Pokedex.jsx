import React from 'react'
import styled from 'styled-components';
import { Pokemon } from './Pokemon';


const PokedexStyle = styled.div`

    .paginacao {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 10px;
    }

    .pokemon-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Pokedex = ({pokemons, loading}) => {
    return (
        <PokedexStyle>
            <div className="paginacao">
                <h2>Pokedex</h2>
                <div>Paginação</div>
            </div>
            {loading ? (
            <div>Carregando...</div>
            ) : (
                <div className="pokemon-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                        );
                    })}
                </div>
            )}
        </PokedexStyle>
    );
};
