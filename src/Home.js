import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
	render() {
		return (
		<div> 
			<h3>Parasta palvelua ja hyvinvointia lemmikillesi!</h3>
		</div>
                
		);
    }
}
  /*constructor(props){
		super(props);
		this.state = {
			asiakas: []
		};
	}
	componentDidMount() {
		let url = "http://localhost:3000/users"
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				let users = data.map((users,index) => {
					return (
					<div key={index}>
					<tr>
					<td>{users.etunimi}</td>
					<td>{users.sukunimi}</td>
					<td>{users.sposti}</td>
					<td>{users.salasana}</td>
					</tr>
					</div>
					)
				})
				this.setState({users:users});
			})
	}
	render() {
		if (this.state.loading) {
			return (
			<div>Loading..</div>
			)
		} 
		else { 
			return (
			<div className="App">
			<table>
				<thead>
					<th>Id</th>
					<th>Nimi</th>
					<th>Osoite</th>
					<th>Postinumero</th>
				</thead>
			<tbody>{this.state.users}</tbody>
			</table>
			</div>
			);
		}
	}*/

