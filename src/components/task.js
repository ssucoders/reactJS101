import React, { Component} from "react";

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            done: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({done:!this.state.done})
    }

    render(){
        return (
            <div className={this.state.done?"task-done":""}>
                <input onClick={this.handleClick} type="checkbox" />
                {this.props.title}
                {/* <button>X</button> */}
            </div>
        )
    }
}

export default Task;