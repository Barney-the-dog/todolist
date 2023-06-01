import React from 'react';
import { globalContext} from '../../contexts/globalContext';
import { useContext, useState } from "react";

function Task({text, status, id}) {

  const { dispatch} = useContext(globalContext);

  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  function deleteTask(id) {
    dispatch({
      type: 'DELETE_TASK',
      payload: id,
    })
  }

  function changeStatus(id) {
    dispatch({
      type: 'CHANGE_STATUS',
      payload: id,
    })
  }

  function editTask(id, text) {
    setEdit(id);
    setValue(text);
  }

  function submitEdit(event) {
    event.preventDefault();
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        id,
        value,
      }
    })
    setEdit(null)
  }
  
  return (
    <>
     {edit === id ? (
         <form className='mb-3 add__field' onSubmit={submitEdit}>
         <label htmlFor="exampleInput" className="form-label"></label>
         <input
           className="form-control"
           onChange={(event) => setValue(event.target.value)}
           value={value}
         />
         <button type="submit" className="btn btn-primary">Change data</button>
       </form>
     ) : (
       <div className="mb-3 form-check">
         <input
           type="checkbox"
           className="form-check-input"
           checked={status}
           onChange={() => changeStatus(id)} />
           <label
             className={status? "form-check-label complited" : "form-check-label"}
             htmlFor="exampleCheck1">
           {text}
         </label>
         <button className="btn btn-primary form-check-btn" onClick={() => editTask(id, text)}>
           Edit
         </button>
         <button className="btn btn-primary form-check-btn" onClick={() => deleteTask(id)}>
           Delete
         </button>
       </div>
     )}
   </>
 );
}

export default Task;