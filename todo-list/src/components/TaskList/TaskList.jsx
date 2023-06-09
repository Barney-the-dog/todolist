import React, { useContext } from 'react';
import Task from '../Task/Task'
import { globalContext } from '../../contexts/globalContext';

function TaskList() {

  const { state, dispatch } = useContext(globalContext)

  return (
        <div className="col-sm-10">
        {state.list.map((post) => (
          <div key = {post.id}>
            <Task text={post.text} 
            id={post.id} 
            status={post.status} 
            />
          </div>
        ))
        }
      </div>
    );
}

export default TaskList;