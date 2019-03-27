import React, {Component} from "react";
import Task from "./task";

class TasksManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    handleChange(e){
        console.log(e.target.value)
        this.setState({value:e.target.value})
    }

    handleKeyDown(e){
        console.log(e.which)
        if(e.which===13 && this.state.value.trim().length>0){
            this.addTask()
        }
    }

    addTask(){
        this.setState({
            tasks: [...this.state.tasks, this.state.value], 
            value:""
        })
    }

    render(){
        let tasks = this.state.tasks;
        return (
            <div>
                <h1>Tasks Manager ({tasks.length})</h1>
                <input type="text" value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
                <button>+</button>
                {
                    tasks.map((el, i)=> {
                        return (
                            <Task key={i} title={el}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default TasksManager;