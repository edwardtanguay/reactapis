import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {

	constructor(props) {
		super(props);
		this.state = {
			news: []
		};
	}

	renderItems() {
		return this.props.items.map(item => (
			<NewSingle key={item.id} item={item} />
		));
	}

	componentDidMount() {
		const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=34c534a3b60d46ed81a257c952fbb3da';
		fetch(url) 
			.then(response => {
			
		})
	}

	render() {
		return (
			<ul>
				{this.renderItems()}
			</ul>
		);
	}
}

export default News;