import React, {Component} from "react";
import Task from "./task";

class TasksManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: ["task one", "task two"]
        }
    }

    render(){
        let tasks = this.state.tasks;
        return (
            <div>
                <h1>Tasks Manager ({tasks.length})</h1>
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