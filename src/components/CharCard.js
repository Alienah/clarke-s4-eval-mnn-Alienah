import React from 'react';
import './CharCard.css';

class CharCard extends React.Component{
	render() {
		return (
			<div className="character-card">
        <h2 className="title-name">{ this.props.name }</h2>
        <img className="image" src={ this.props.link} />
        <div className="dates-container">
					<p>Pertenece a la casa { this.props.house }</p>
					<p>Está {this.props.alive? 'vivo':'muerto'}</p>
				</div>
      </div>
		);
	}
}

export default CharCard;
