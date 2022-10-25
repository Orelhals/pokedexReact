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
                <div>
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
