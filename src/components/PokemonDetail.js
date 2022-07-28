import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [id])

    return (
        <div>
            <header className="pokeball-header"></header>
            <h1>PokemonDetail</h1>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <p># <b>{id}</b></p>
            <h2>{pokemon.species?.name}</h2>
            <p>Weight: {pokemon.weight} Height: {pokemon.height}</p>
            <div className="container-type-abilities">
                <ul className="box-types">
                    <h3>Type</h3>
                    {pokemon.types?.map(type => (
                        <li>{type.type.name}</li>
                    ))}
                </ul>
                <ul className='box-abilities'>
                    <h3>Abilities</h3>
                    {pokemon.abilities?.map(ability => (
                        <li>{ability.ability.name}</li>
                    ))}
                </ul>
            </div>
            <div className="container-progress-bar">
                <h3>Stats</h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: 1000 }} >HP {pokemon.stats?.[0].base_stat}</div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: 1000 }} >ATK {pokemon.stats?.[1].base_stat}</div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: 1000 }} >DFN {pokemon.stats?.[2].base_stat}</div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: 1000 }} >SPD {pokemon.stats?.[5].base_stat}</div>
                </div>
            </div>
            <h3>Moves</h3>
            <div className="container-moves">
                {pokemon.moves?.map(move => (
                    <li>{move.move.name}</li>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetail;