import React, { Component } from 'react';
import './App.css';
import CharCard from './CharCard';
import Search from './Search';

class App extends Component {
	constructor(props) {
		super(props);

		this.handleFilterByNameOnchange = this.handleFilterByNameOnchange.bind(this);
		this.handleFilterByHouseOnChange = this.handleFilterByHouseOnChange.bind(this);

		this.state = {
			characters: [],
			input: '',
			selected: ''
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

			input: inputValue
		});
	}
	handleFilterByHouseOnChange(e) {
		const selectValue = e.target.value;
		this.setState({
			selected: selectValue
		})
	}


	paintCharacters() {
		// let charactersShowed = this.state.characters;


		let charactersShowed = this.state.characters.filter(objectPotter => objectPotter.name.toLowerCase().includes(this.state.input))
			.filter(objectPotter=> objectPotter.house.includes(this.state.selected));


		return (
			<ul className="App-list">{
				charactersShowed.map(
					(objectPotter) => //Le damos una identidad  o clave a cada objeto, según instrucciones del warning de react
						<li key={objectPotter.name}>
						<CharCard
						name ={ objectPotter.name }
						link ={ objectPotter.image }
						house ={ objectPotter.house }
						alive ={ objectPotter.alive }
						actor ={ objectPotter.actor }
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
					<div className="App-background"></div>
					<Search
						onChangeFilterFunction ={ this.handleFilterByNameOnchange }
						onChangeFilterHouseFunction = {this.handleFilterByHouseOnChange}
					/>
					{ this.paintCharacters()	}
				</main>
			</div>
		);
	}
}

export default App;
