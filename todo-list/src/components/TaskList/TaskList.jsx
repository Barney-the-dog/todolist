import React from 'react';
import Task from '../Task/Task'

function TaskList({posts, changeTaskStatus}) {
    return (
        <div className="col-sm-10">
        {posts.map((post) => (
          <div key = {post.id} className="form-check">
            <Task text={post.text} changeTaskStatus={changeTaskStatus} id={post.id} taskStatus={post.taskStatus}/>
          </div>
        ))
        }
      </div>
    );
}

export default TaskList;