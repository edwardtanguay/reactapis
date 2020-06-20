import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import SideNews from './News/SideNews';

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
			},
			news3: {
				query: 'europe',
				language: 'fr'
			}
		};
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="navbar-fixed">
					<nav>
						<div className="nav-wrapper indigo lighten-4">
							<a href="/" className="brand-logo center">News</a>
						</div>
					</nav>
				</div>
				<div className="row">
					<div className="col s8">
						<News news={this.state.news1} />
						<News news={this.state.news2} />
					</div>
					<div className="col s4">
						<SideNews news={this.state.news3} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
