import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Users from "./containers/Users";
import AsyncComponent from "./hoc/AsyncComponent";

const AsyncPizza = AsyncComponent(() => {
	return imnport("./containers/Pizza.js");
});

export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to='/'>Users</Link>
					<Link to='/pizza'>Pizza</Link>
				</div>
				<div>
					<Route path='/' exact component={Users} />
					<Route path='/pizza' component={AsyncPizza} />
				</div>
			</div>
		);
	}
}
