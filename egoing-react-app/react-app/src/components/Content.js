import React, { Component } from "react";

class Content extends Component {
	render() {
		return (
			<div>
				<h2>{this.props.title}</h2>
				<h2>{this.props.desc}</h2>
			</div>
		);
	}
}

export default Content;
