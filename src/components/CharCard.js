import React from 'react';
import './CharCard.css';
import Hufflepuff from '../images/muerte.png';

class CharCard extends React.Component{
	render() {
		return (
			<div className="Char-card">
				<h2 className="Char-title-name">{ this.props.name }</h2>
				<div className="Char-image-container" title={this.props.actor} 	style={{backgroundImage: `url(${this.props.link})`}}><img className="Char-image" src={ this.props.link} alt={ this.props.name } />
				</div>
				<div className="Char-dates-container">
					<div className={`CharHouses ${this.props.house}`} title={this.props.house}><span className="CharHouseText">Pertenece a la casa { this.props.house }</span></div>
					<p className="CharAliveContainer">{this.props.alive? '':<img className="imagen-muerte" src={Hufflepuff} alt="is death"/>}</p>
				</div>
			</div>
		);
	}
}

export default CharCard;
