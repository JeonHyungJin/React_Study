import React, { Component } from "react";

class ReadContent extends Component {
	render() {
		return (
			<article>
				<h2>{this.props.title}</h2>
				<h2>{this.props.desc}</h2>
			</article>
		);
	}
}

export default ReadContent;
