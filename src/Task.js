import React, { Component } from 'react';

class Task extends Component {
    render() {
        return(
            <ul>
                {this.props.Tasks.map(task => (
                    <li key={task.id}> <input type="checkbox" className="complete-check" id={'check' + task.taskOrder}/>{task.taskText} 
                    <input type="button" onClick={(e) => {this.props.DeleteTask(task, e)}} className="delete-button" value="X"/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Task;