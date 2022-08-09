import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getType from '../utils/getType';

const PokemonCard = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [pokemonUrl])

    console.log(pokemon);

    return (
        <div className="App">
            <div 
                className='card-pokemon' 
                onClick={() => navigate(`/pokedex/${pokemon.id}`)}
                style={{background: getType(pokemon.types?.[0]?.type?.name)}}
            >
                <img src={pokemon.sprites?.front_default} alt="" className='img-pokemon-card' />
                <h2>{pokemon.species?.name}</h2>
                <ul><b>Type:</b>{pokemon.types?.map(type => (
                    <li>{type.type.name}</li>
                ))}
                </ul>
                <div className="info-card">
                    <p>HP {pokemon.stats?.[0].base_stat}</p>
                    <p>ATK {pokemon.stats?.[1].base_stat}</p>
                    <p>DFN {pokemon.stats?.[2].base_stat}</p>
                    <p>SPD {pokemon.stats?.[5].base_stat}</p>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;