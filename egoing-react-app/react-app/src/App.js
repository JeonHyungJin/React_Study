import React, { Component } from "react";
import "./App.css";
import Toc from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: "read",
			selected_content_id: 3,
			subject: { title: "WEB", desc: "World Wid Web!" },
			welcome: { title: "welcome", desc: "Hello, React!" },
			contents: [
				{ id: 1, title: "HTML", desc: "HTML!" },
				{ id: 2, title: "CSS", desc: "CSS!" },
				{ id: 3, title: "JavaScript", desc: "JS!" },
			],
		};
	}

	render() {
		var _title,
			_desc = null;

		if (this.state.mode === "welcome") {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		} else if (this.state.mode === "read") {
			var i = 0;
			while (i < this.state.contents.length) {
				var data = this.state.contents[i];
				if (data.id === this.state.selected_content_id) {
					_title = data.title;
					_desc = data.desc;
					break;
				}
				i = i + 1;
			}
		}
		return (
			<div className="App">
				<Subject
					title={this.state.subject.title}
					desc={this.state.subject.desc}
					onChangePage={function () {
						this.setState({ mode: "welcome" });
					}.bind(this)}
				></Subject>
				<Toc
					onChangePage={function (id) {
						this.setState({
							mode: "read",
							selected_content_id: Number(id),
						});
					}.bind(this)}
					data={this.state.contents}
				></Toc>
				<Content title={_title} desc={_desc}></Content>
			</div>
		);
	}
}

export default App;
