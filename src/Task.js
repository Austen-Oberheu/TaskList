import React, { Component } from 'react';

class Task extends Component {
    render() {
        return(
            <ul>
                {this.props.Tasks.map(task => (
                    <li key={task.id}>
                    <div class="checkbox">
                        <input type="checkbox" id={task.taskText}/>
                        <label for={task.taskText}></label>
                    </div>
                    <p>{task.taskText}</p>
                    <input type="button" onClick={(e) => {this.props.DeleteTask(task, e)}} className="delete-button" value="X"/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Task;