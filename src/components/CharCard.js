import React from 'react';
import './CharCard.css';

class CharCard extends React.Component{
	render() {
		return (
			<div className="Char-card">
        <h2 className="Char-title-name">{ this.props.name }</h2>
        <img className="Char-image" src={ this.props.link} alt="character"/>
        <div className="Char-dates-container">
					<p>Pertenece a la casa { this.props.house }</p>
					<p>Está {this.props.alive? 'viv@	':'muert@'}</p>
				</div>
      </div>
		);
	}
}

export default CharCard;
