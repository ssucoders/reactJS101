import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  
  render(){
    let username = "saif";

    var items = ["saif", "ubaid"];
    //arrow function
    items.map(el => console.log(el))

    return(
      <div className="App">
        <input type="text" />
        <h1> Welcome, {username}! to SSUCoders</h1>
      </div>
    );
  }
}

export default hot(module)(App);