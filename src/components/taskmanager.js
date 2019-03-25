import { Component } from "react";

class TasksManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }

    render(){
        return (
            <div>
                Tasks Manager
            </div>
        )
    }
}

export default TasksManager;