import React, { Component } from 'react';
import './App.css';
import CharCard from './CharCard';

class App extends Component {
	constructor(props) {
		super(props);

		this.handleFilterByNameOnchange = this.handleFilterByNameOnchange.bind(this);

		this.state = {
			characters: [],
			filteredActivated: false,
			input: ''
		};
	}

	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters')
		.then(response => response.json())
		.then(json => {
			this.setState({
				characters: json,
			});
		})
	}

	handleFilterByNameOnchange(e) {
		const inputValue = e.target.value.toLowerCase();
		this.setState({
			filteredActivated: !this.state.filteredActivated,
			input: inputValue
		});
	}

	paintCharacters() {
		let charactersShowed = this.state.characters;

		if(this.state.filteredActivated){
			charactersShowed = this.state.characters.filter(objectPotter => objectPotter.name.toLowerCase().includes(this.state.input));
		}

		return (
			<ul className="App-list">{
				charactersShowed.map(
					(objectPotter, id) => //Le damos una identidad  o clave a cada objeto, según instrucciones del warning de react
					<li key={id}>
						<CharCard
						name ={ objectPotter.name }
						link ={ objectPotter.image }
						house ={ objectPotter.house }
						alive ={ objectPotter.alive }
						/>
					</li>)}
					</ul>);
				}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">My <span className="harry">Harry Potter</span> Characters</h1>
				</header>
				<main className="App-main">
					<input value ={ this.state.input } className="App-search" onChange ={ this.handleFilterByNameOnchange }/>
					{ this.paintCharacters()	}
				</main>
			</div>
		);
	}
}

export default App;
