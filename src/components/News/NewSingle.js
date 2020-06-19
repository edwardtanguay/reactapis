import React from 'react';

const NewSingle = ({ item }) => (
	// <div className="col s4">
	// 	<div className="card">
	// 		<div className="card-image">
	// 			<img src={item.urlToImage} alt={item.title} />
	// 			<span className="card-title">{item.source.name}</span>
	// 		</div>
	// 		<div className="card-content">
	// 			<p>{item.title}</p>
	// 		</div>
	// 		<div className="card-action">
	// 			<a href={item.url} target="_blank">Full article at {item.source.name}</a>
	// 		</div>
	// 	</div>
	// </div >
	<div className="article">
		<span>{item.source.name}:</span> <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
	</div>
);

export default NewSingle;