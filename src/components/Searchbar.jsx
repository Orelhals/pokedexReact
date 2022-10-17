import React, {useState} from 'react'

export const Searchbar = () => {

    const [search, setSearch] = useState("dito")
    
    const onChangeHandler = (e) => {
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
    }
return (
    <div>
        <div>
            <input type="text" placeholder='Buscar pokemon' onChange={onChangeHandler} />
            {search}
        </div>
    </div>
)
}
