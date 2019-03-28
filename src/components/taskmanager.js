import React, {Component} from "react";
import Task from "./task";

class TasksManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [{title:"a task", done:false}, {title: "another task", done: true}],
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.addTask = this.addTask.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
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

    updateTaskStatus(status, index){
        console.log(status);
        console.log(index);
        this.setState((state)=>{
            let updatedTasks = state.tasks.map((el, i)=>{
                if(i === index){
                    el.done = status
                }
                return el;
            })
            return {tasks: updatedTasks}
        })


     }

    addTask(){
        this.setState({
            tasks: [...this.state.tasks, {title:this.state.value, done:false}], 
            value:""
        })
    }
    deleteTask(index){
        this.setState((state)=>{
            let updatedTasks = state.tasks.filter((el, i)=>{
                return i!=index;
            })
            return {tasks: updatedTasks}
        })
     }

    render(){
        let tasks = this.state.tasks;
        let completedTasks = tasks.filter(el=>{
            return (el.done==true)
        })

        let tasklist = tasks.map((el, i)=> {
            return (
                <Task key={i} data-index={i} item={el} deleteTask={this.deleteTask} onChange={this.updateTaskStatus}/>
            )
        });
        return (
            <div>
                <h1>Tasks Manager ({completedTasks.length}/{tasks.length})</h1>
                <input type="text" value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
                <button>+</button>
                {tasks.length>0?tasklist: <p>No tasks, add some Tasks</p>}
            </div>
        )
    }
}

export default TasksManager;