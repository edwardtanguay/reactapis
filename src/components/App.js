import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news1: {
				query: 'paris',
				language: 'fr'
			},
			news2: {
				query: 'berlin',
				language: 'de'
			}
		};
	}
	render() {
		return (
			<div className="App">
				<News news={this.state.news1} />
				<News news={this.state.news2} />
			</div>
		);
	}
}

export default App;
