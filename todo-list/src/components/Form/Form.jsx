import React from 'react';

function Form({text, setText, handleSubmit}) {
    return (
        <form className='mb-3' onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">
          List: {text}
        </label>
        <div className="col-sm-10">
          <input
            type="action"
            className="form-control"
            id="action"
            placeholder="action"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
      </form>
    );
}

export default Form;