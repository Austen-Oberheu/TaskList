import React, { Component } from 'react';

import Task from './Task';

var storedTasks = []; 

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TaskOrder: 0,
            TaskText: '',
            Tasks: []
        };

        this.AddTask = this.AddTask.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.DeleteTask = this.DeleteTask.bind(this);
    }

    componentDidMount() {
        storedTasks = JSON.parse(localStorage.getItem('task')) || [];
        for (var i = 0; i < storedTasks.length;)
        {
            const newTask = storedTasks[i];        
        this.setState(prevState => ({
            Tasks: prevState.Tasks.concat(newTask)
        }))
        i++;
    }

    }

    HandleChange(e) {
        this.setState({ TaskText: e.target.value });
    }

    AddTask(e) {
        e.preventDefault();
        if (this.state.TaskText !== '') {
            this.setState({
                TaskOrder: this.state.TaskOrder + 1
            });
            const newTask = {
                taskText: this.state.TaskText,
                id: Date.now(),
                taskOrder: this.state.TaskOrder + 1,
            };
            this.setState({
                TaskOrder: this.state.TaskOrder + 1
            })
            this.setState(prevState => ({
                Tasks: prevState.Tasks.concat(newTask),
                TaskText: ''
            }))
            //Get old tasks in local storage and append the new task to them
            storedTasks = JSON.parse(localStorage.getItem('task')) || [];
            storedTasks.push(newTask);
            localStorage.setItem('task', JSON.stringify(storedTasks));
        }

    }

    DeleteTask(item, e){
        //Removes tasks from the state.Tasks and from local storage
        e.preventDefault();
        const newState = this.state.Tasks.slice();
        if (newState.indexOf(item) > -1) {
          newState.splice(newState.indexOf(item), 1);
          this.setState({Tasks: newState})
          //removes task from cached storage
          localStorage.setItem('task', JSON.stringify(newState));
        }
    }

    render() {
        return (
            <div className="to-do">
                <h1>To Do List</h1>
                <div className="add-task">
                    <form onSubmit={this.AddTask}>
                        <input id="new-todo" onChange={this.HandleChange} placeholder="Enter Task Here" value={this.state.TaskText} />               
                    <button>Add Task</button>
                    </form>
                </div>
                <div className="tasks">
                    <Task Tasks={this.state.Tasks} DeleteTask={this.DeleteTask.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default List;