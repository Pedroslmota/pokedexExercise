import React, { Component } from 'react';
import PokeEntry from './PokeEntry';
import './Pokedex.css'
import PokemonData from './pokemon.json';

class Pokedex extends Component {
    static defaultProps = {
        PokemonData
    }
    render() {
        return (
            <div className='Pokedex'>
                <div className='Pokedex-Pokemon'>
                    {this.props.PokemonData.map((p) => (
                        <PokeEntry
                            key={p.id}
                            id={p.id}
                            name={p.name.english}
                            type={p.type}
                            exp={p.base.HP} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;