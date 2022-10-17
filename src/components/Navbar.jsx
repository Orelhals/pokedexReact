import styled from 'styled-components';
import React from 'react';

const NavStyles = styled.nav`
    img {
        width: 160px;
    }
`;

export const Navbar = () => {
return (
    <NavStyles>
        <div>
            <img src="	https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo-poke" />
        </div>
    </NavStyles>
)
}
