import React from 'react';

function Task({text, taskStatus, changeTaskStatus, id}) {
    return (
        <div className='task'>
        <input className="form-check-input"
               type="checkbox"
               id="gridCheck1"
               checked={taskStatus}
               onChange={() => changeTaskStatus(id)} />
        <label className="form-check-label" 
               style={taskStatus ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}} >
        {text}
        </label>
        </div>
    );
}

export default Task;