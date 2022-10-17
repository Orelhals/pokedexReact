import React, {useState} from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
    border: none;
    box-shadow: 2px 2px black;
    border-radius: 4px;
    font-size: 14px;
    background-color: #0e6f9f ;
    color: white;
    height: 30px;
    padding: 10px 12px;

`;

const SearchStyle = styled.div`
    display: flex;
    margin: 0px auto;
    padding: 0 20px;
    align-items: center;

    > .input-search {
        margin-right: 20px;
        background-color: white;

        > input {
            padding: 10px;
            border-radius: 4px;
            border: none;
        }
    }
`;

export const Searchbar = () => {

    const [search, setSearch] = useState("dito")
    
    const onChangeHandler = (e) => {
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonSearch = () => {
        console.log("clicou", search)
    }
return (
    <SearchStyle>
        <div className='input-search'>
            <input type="text" placeholder='Buscar pokemon' onChange={onChangeHandler} />
        </div>
        <div>
            <ButtonStyle onClick={onButtonSearch}>Buscar</ButtonStyle>
            
        </div>
    </SearchStyle>
)
}
