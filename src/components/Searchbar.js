import React, {Component} from "react";

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		}
	}
	onInputChange(event) {
		this.setState({
			searchTerm: event.target.value
		});

	}
	clickedInput() {
		this.props.onSearchTermChange(this.state.searchTerm);
	}
	render() {
		return ( 
			<div className="search-bar">
				<input 
					placeholder = "Search for a smol doggo!"
					value = {this.state.searchTerm}
					onChange={this.onInputChange.bind(this)} />
				<span className="submitbtn" onClick={this.clickedInput.bind(this)}>
					<i className="fa fa-paw searchpaw" aria-hidden="true"></i>
					Submit
				</span>

			</div>
		);
	}
}
export default Searchbar;