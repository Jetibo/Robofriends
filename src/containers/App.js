import React, { Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
// import {robots} from './robots';
import './App.css';
import Scroll from '../components/Scroll.js';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			// robots: robots,
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users =>this.setState({robots: users }));
		// this.setState({ robots: robots })
		// })
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
		// console.log(filteredRobots);
	}

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		// if (robots.lenght === 0){
			return !robots.length ? 
			<h1>Loading...</h1> : 
			(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
						{/*<CardList robots={this.state.robots}/>*/}
					</Scroll>
				</div>
			);
	}
}
// To use destructuring to clean up const { robots, searchField } = this.state;
// 	render() {
// 		const filteredRobots = this.state.robots.filter(robot => {
// 			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
// 		})
// 		if (this.state.robots.lenght === 0){
// 			return <h1>Loading...</h1>
// 		} else {
// 			return (
// 				<div className='tc'>
// 					<h1 className='f1'>RoboFriends</h1>
// 					<SearchBox searchChange={this.onSearchChange}/>
// 					<Scroll>
// 						<CardList robots={filteredRobots}/>
// 						{/*<CardList robots={this.state.robots}/>*/}
// 					</Scroll>
// 				</div>
// 			);
// 		}
// 	}
// }

export default App;