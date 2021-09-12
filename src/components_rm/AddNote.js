import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

function AddNote() {
  const dispatch = useDispatch();

  const [content, setContent] = useState();

  const noteInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch.notes.addNewNote(content);

    noteInput.current.value = '';

    setContent('');
  };

  return (
    <form
      className="col-md-12"
      style={{ marginBottom: 15 }}
      onSubmit={handleSubmit}
    >
      <div className="input-group mb-8">
        <input
          type="text"
          className="form-control"
          placeholder="Note content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          ref={noteInput}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddNote;
