import React from 'react';

class Search extends React.Component{
	render() {
		return(
			<div>
				<input className="App-search" onChange ={ this.props.onChangeFilterFunction }/>
				<select onChange = {this.props.onChangeFilterHouseFunction}>
					<option value="">Todas</option>
					<option value="Gryffindor">Gryffindor</option>
					<option value="Slytherin">Slytherin</option>
					<option value="Hufflepuff">Hufflepuff</option>
					<option value="Ravenclaw">Ravenclaw</option>
				</select>
			</div>
		);
	}
}

export default Search;
