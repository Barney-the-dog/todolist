import React from 'react';

function Task(text, taskStatus, changeTaskStatus, id) {
    return (
        <div className='task'>
        <input
        className="form-check-input"
              type="checkbox"
              id="gridCheck1"
              onChange={() => changeTaskStatus(id)}
            />
            <label 
            className="form-check-label" 
            >
              {text}
              style={taskStatus ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}
            </label>
            </div>
    );
}

export default Task;