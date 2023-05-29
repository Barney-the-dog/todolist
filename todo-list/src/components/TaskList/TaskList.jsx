import React, { useContext } from 'react';
import Task from '../Task/Task'
import { globalContext } from '../../contexts/globalContext';

function TaskList() {

  const { state, dispatch } = useContext(globalContext)

  return (
        <div className="col-sm-10">
        {state.list.map((post) => (
          <div key = {post.id} className="form-check">
            <Task text={post.text} 
            changeTaskStatus={changeTaskStatus} 
            id={post.id} status={post.status} 
            deleteTask={deleteTask}/>
          </div>
        ))
        }
      </div>
    );
}

export default TaskList;