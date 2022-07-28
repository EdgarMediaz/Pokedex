import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [pokemonSearch, setPokemonSearch] = useState('')
    const [pokemons, setPokemons] = useState([])
    const [types, setTypes] = useState([])

    const navigate = useNavigate()

    useEffect(()=> {
        // pokemon limit is 1126
        axios
            .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=8/')
            .then(res => setPokemons(res.data.results))
        axios
            .get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, [])

    const search = () => {
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPokemons = (e) => {
        axios
            .get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    console.log(pokemons);

    return (
        <div>
            <header className="pokeball-header"></header>
            <h1>Pokedex</h1>
            <p>Welcome <b>{user}</b> Ketchup!</p>
            <select onChange={filterPokemons}>
                <option>Pokemon Type</option>
                {
                    types.map(type => (
                        <option value={type.url}>{type.name}</option>
                    ))
                }
            </select>
            <div className="search-box">
                <input type="text" 
                    value={pokemonSearch} 
                    onChange={e => setPokemonSearch(e.target.value)}
                    placeholder='Search Pokemon'
                />
                <button className='btn btn-primary' onClick={search}>
                    Search
                </button>
            </div>
            <div className='container-pokemon'>
            {
                pokemons.map(pokemon =>(
                    <PokemonCard key={pokemon.name ? pokemon.url : pokemon.pokemon.url} 
                    pokemonUrl={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
                ))
            }
            </div>
        </div>
    );
};

export default Pokedex;