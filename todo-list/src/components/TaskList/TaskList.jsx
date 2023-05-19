import React, { useContext } from 'react';
import Task from '../Task/Task'
import { globalContext } from '../../contexts/globalContext';

function TaskList() {

  const { state, dispatch } = useContext(globalContext)

  const changeTaskStatus = (id) => {
    const newArr = state.list.map(el => {
        if(el.id === id) {
            el.taskStatus = !el.taskStatus
        }
        return {...el}
    })
    dispatch(newArr)
  }

// function deleteTask(id) {
//   dispatch({
//     type: 'DELETE_TASK',
//       payload: {
//         text,
//       }
//   })
//     // setList(state.list.filter((el) => id !== el.id));
//   }

  
    return (
        <div className="col-sm-10">
        {state.list.map((post) => (
          <div key = {post.id} className="form-check">
            <Task text={post.text} changeTaskStatus={changeTaskStatus} id={post.id} taskStatus={post.taskStatus} />
          </div>
        ))
        }
      </div>
    );
}

export default TaskList;
