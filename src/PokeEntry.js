import React, { Component } from 'react';
import './PokeEntry.css';

const poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class PokeEntry extends Component {
	render() {
		let imgSrc = `${poke_API}${this.props.id}.png`;

		return (
			<div className="PokeEntry">
				<h2 className="PokeEntry-Name">{this.props.name}</h2>
				<h6 className="PokeEntry-ID">{padToThree(this.props.id)}#</h6>
				<img className="PokeEntry-img" src={imgSrc} />
				<h5 className="PokeEntry-type">Type: {this.props.type}</h5>
				<h6 className="PokeEntry-exp">HP: {this.props.exp}</h6>
			</div>
		);
	}
}

export default PokeEntry;
