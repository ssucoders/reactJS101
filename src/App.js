import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {name: "saif"}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  
  render(){
    return(
      <div className="App">
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <h1> Welcome, {this.state.name}! to SSUCoders</h1>
      </div>
    );
  }
}

export default hot(module)(App);