import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import axios from 'axios';

class Giphy extends Component{
    constructor (props){
        super(props);
        this.state = {
            search: ""
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.search);
        this.setState({search:""})
    }
    handleChange(e){
        e.preventDefault();
        console.log(e.target.value)
        this.setState({search: e.target.value});
        //console.log(this.state.search)
    }

    getThatShit(giphy){
    	const url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
    	console.log(url)

    	axios.get(url)
    		.then(res => {
    			console.log('res',res);
    		})
    		.catch(err => console.log('err', err));
    	}

    render(){
        return (
            <div>
                <Navbar show={true} handleChange={this.handleChange.bind(this)} search={this.state.search} handleSubmit={this.handleSubmit.bind(this)} />
                <h1>This is a header</h1>
            </div>
        )
    }

}

export default Giphy;

