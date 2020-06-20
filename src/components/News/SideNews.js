import React, { Component } from 'react';
import axios from 'axios';
import SingleSideNews from './SingleSideNews';
import Error from './Error';

class SideNews extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sideNews: [],
			error: false
		};
	}

	renderItems() {
		if (!this.state.error) {
			return this.state.sideNews.map((item) => (
				<SingleSideNews key={item.url + 'nnn'} item={item} />
			));
		} else {
			return <Error/>
		}
	}

	componentDidMount() {
		const url = `http://newsapi.org/v2/everything?q=${this.props.news.query}&pageSize=5&language=${this.props.news.language}&sortBy=publishedAt&apiKey=34c534a3b60d46ed81a257c952fbb3da`;

		axios.get(url)
			.then(response => {
				console.log(response.data.articles);
				const articles = [{ source: 'nnn', title: 'ttt', url: 'uuu' }];
				console.log(articles);
				this.setState({
					sideNews: response.data.articles
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

export default SideNews;