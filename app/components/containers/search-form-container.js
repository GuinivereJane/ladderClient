import React from 'react';
import { browserHistory } from 'react-router'

import {connect} from 'react-redux';
import SearchForm from '../views/search-form';
import store from '../../store';
import {searchUpdate} from '../../actions/search-layout-actions';

export class SearchFromContainer extends React.Component {
	constructor(){
		super()
		this.handlePlayerChange=this.handlePlayerChange.bind(this);
		this.handleShopChange=this.handleShopChange.bind(this);
		this.handleShopSubmit=this.handleShopSubmit.bind(this);
		this.handlePlayerSubmit=this.handlePlayerSubmit.bind(this);
	}
	

	
	handlePlayerChange(e){
		e.preventDefault();

		//in this line filter this.props.players for search values
		let search = this.props.players.filter((value)=>{
			let searchString=e.target.value;
			let fullname = `${value.firstname} ${value.lastname}`
			return fullname.substring(0,searchString.length).toUpperCase() == searchString.toUpperCase();
		});
		store.dispatch(searchUpdate(search));
	}

	handleShopChange(e){
		e.preventDefault();
		//in this line filter this.props.players for search values
		let search = this.props.shops.filter((value)=>{
			let searchString=e.target.value;

			return value.name.substring(0,searchString.length).toUpperCase() == searchString.toUpperCase();
		});
		store.dispatch(searchUpdate(search));
	}

	handleShopSubmit(e){
		e.preventDefault();
		let search = this.props.shops.filter((value)=>{
			return value.name == e.target.search.value
		});
		const path = `/shops/${search[0].id}`
    browserHistory.push(path)
	}

	handlePlayerSubmit(e){
	e.preventDefault();
				console.log(e.target.search.value);

		let search = this.props.players.filter((value)=>{
			return `${value.firstname} ${value.lastname}` == e.target.search.value
		});
		const path = `/players/${search[0].id}`
    browserHistory.push(path)
	}

	render(){
		let handleChange = ()=>{};
		let handleSubmit = ()=>{};
		let dataOptions ={};

		dataOptions = <div/>;

		

		if (this.props.searchType == "players"){
			handleChange = this.handlePlayerChange
			handleSubmit = this.handlePlayerSubmit
			dataOptions = this.props.searchResults.map((option)=>{
      	return ( <option key={option.id} value={`${option.firstname} ${option.lastname}`}/>);
    	});
		}
		
		if (this.props.searchType == "shops"){
			handleChange = this.handleShopChange
			handleSubmit = this.handleShopSubmit
			dataOptions = this.props.searchResults.map((option)=>{
      	return ( <option key={option.id} value={option.name}/>);
    	});

		}
		return (
			<SearchForm searchResults={this.props.searchResults} 
									submit={handleSubmit}
									change={handleChange}
									dataOptions={dataOptions}
									/>
		);
	}
}

const mapStateToProps = function(store) {
	return {
  	shops: store.shopState.shops,
  	players: store.playerState.players,
  	searchResults :store.searchState.searchResults
	};
};

export default connect(mapStateToProps)(SearchFromContainer);