import React, { Component} from "react";

class Task extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
       // this.setState({done:!this.state.done})
       this.props.onChange(e.target.checked, this.props["data-index"]);
    }

    render(){
        return (
            <div className={this.props.item.done?"task-done":""}>
                <input checked={this.props.item.done} onChange={this.handleChange} type="checkbox" />
                {this.props.item.title}
                {/* <button>X</button> */}
            </div>
        )
    }
}

export default Task;