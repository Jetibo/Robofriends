// import React, {Component }  from 'react';
import React from 'react';

// class Card extends Component {
// 	render() {
// 		return (
// 		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
// 			<div>
// 				<h2> {this.props.name}</h2>
// 				<p>{this.props.email}</p>
// 			</div>
// 		</div>
// 	);
// 	}
// } 

const Card =({name, email, id}) => {
	// const {name, email, id} = props; //destructuring
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;