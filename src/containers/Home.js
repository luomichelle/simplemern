import React, { Component } from 'react';
import Navbar from "../components/Navbar";

class Home extends Component{

    render(){
        return (
            <div>
                <Navbar />
                <h1>This is a header</h1>
            </div>
        )
    }

}
export default Home;