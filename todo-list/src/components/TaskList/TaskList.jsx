import React from 'react';
import Task from '../Task/Task'

function TaskList({list, changeTaskStatus, deleteTask}) {
    return (
        <div className="col-sm-10">
        {list.map((post) => (
          <div key = {post.id} className="form-check">
            <Task text={post.text} changeTaskStatus={changeTaskStatus} id={post.id} taskStatus={post.taskStatus} deleteTask={deleteTask}/>
          </div>
        ))
        }
      </div>
    );
}

export default TaskList;
