import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {

	constructor(props) {
		super(props);
		this.state = {
			news: [],
			error: false
		};
	}

	renderItems() {
		if (!this.state.error) {
			return this.state.news.map(item => (
				<NewSingle key={item.url} item={item} />
			));
		} else {
			return <Error />
		}
	}

	componentDidMount() {
		const url = `http://newsapi.org/v2/everything?q=${this.props.news.query}&pageSize=100&language=${this.props.news.language}&sortBy=publishedAt&apiKey=34c534a3b60d46ed81a257c952fbb3da`;
		//const url = 'http://newsapi.org/v2/everything?q=marseille&pageSize=100&language=fr&from=2020-05-18&sortBy=publishedAt&apiKey=34c534a3b60d46ed81a257c952fbb3da';
		//const url = 'http://newsapi.org/v2/top-headlines?country=fr&apiKey=34c534a3b60d46ed81a257c952fbb3da';
		//https://newsapi.org/v2/everything?q=bitcoin&apiKey=34c534a3b60d46ed81a257c952fbb3da
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					news: data.articles,
					totalResults: data.totalResults
				})
			})
			.catch(error => this.setState({
				error: true
			}))
	}

	render() {
		return (
			<div className="row">
				{this.renderItems()}
			</div>
		);
	}
}

export default News;