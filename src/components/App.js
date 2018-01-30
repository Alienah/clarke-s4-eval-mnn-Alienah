import React, { Component } from 'react';
import './App.css';
import CharCard from './CharCard';

class App extends Component {
	constructor(props) {
		super(props);

		this.handleFilterByNameOnchange = this.handleFilterByNameOnchange.bind(this);

		this.state = {
			characters: [],
			filteredCharShowed: false
		};

	}
	componentDidMount() {
		fetch('http://hp-api.herokuapp.com/api/characters')
			.then(response => response.json())
			.then(json => {
				const list = json;
				this.setState({
					characters: list
				});
			//console.log(list);
			})
	}
	paintCharacters() {
		let charactersShowed = this.state.characters;

		if(this.state.filteredCharShowed){
      charactersShowed =
        this.state.characters.filter(function (objectPotter) {
					return objectPotter.name.includes("Harry")});
						console.log(this.inputValue);
    }
//console.log(this.inputValue);

		return (
			<ul className="App-list">{
				charactersShowed.map(
					objectPotter =>
						<li>
							<CharCard
								name={objectPotter.name}
								link={objectPotter.image}
								house={objectPotter.house}
								alive={objectPotter.alive}
							/>
						</li>)}
			</ul>);
	}
	handleFilterByNameOnchange(e) {
		const inputValue = e.target.value.toLowerCase();
		// if (inputValue.includes) {
		//
		// }
		//console.log(inputValue);
		this.setState({
			filteredCharShowed: !this.state.filteredCharShowed
		});
	}
  render() {
		console.log(this.inputValue);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Harry Potter Characters</h1>
        </header>
        <main>
					<input className="App-search" onChange={this.handleFilterByNameOnchange}/>
					<button className="App-filter-button">Filtrar</button>
					{this.paintCharacters()}
				</main>
      </div>
    );
  }
}

export default App;
