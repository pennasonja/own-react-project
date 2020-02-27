import React, { Component } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import './services.css';

export default class Services extends Component {
    constructor(props){
		super(props);
		this.state = {
			palvelu: []
		};
	}
	componentDidMount() {
	const url = 'http://localhost:3000/palvelu'
			fetch(url)
    		axios.get(url).then(response => response.data)
    			.then((data) => {
      			this.setState({ palvelu: data })
      			console.log(this.state.palvelu)
     })
  
	}
	render() {
		if (this.state.loading) {
			return (
			<div>Ladataan sisältöä...</div>
			)
		} 
		else { 
			return (
				<div>
				<Fragment>
				<h3>Palvelut</h3>

				<table id="table" width='100%' >
				<tr>
					<th>Palvelu</th>
					<th>Kuvaus</th>
					<th>Hinta</th>    
				</tr>
				{this.state.palvelu.map((palvelu) => (
				<tr>
					<td>{ palvelu.palvelu }</td>
					<td>{ palvelu.kuvaus }</td>
					<td>{ palvelu.hinta }</td>
				</tr>
				))}
				</table>
				</Fragment>
				</div>
			);
		}
	}
}


