import React, { useRef } from 'react';
import './ShowNote.css';
import { useSelector, useDispatch } from 'react-redux';

function ShowNote(props) {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.allNotes);

  const inputEl = useRef(null);

  const handleChange = (id) => {
    dispatch.notes.editNote({
      id,
      content: inputEl.current.value,
    });
  };

  const handleRemoveNote = (noteID) => {
    dispatch.notes.removeNote(noteID);
  };

  return (
    <>
      <div className="col-md-4" style={{ marginTop: 10 }}>
        <div className="card bg-warning">
          <div className="card-body" style={{ height: 200 }}>
            <textarea
              ref={inputEl}
              value={props.noteContent}
              onChange={handleChange.bind(this, props.noteId)}
            />
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={handleRemoveNote.bind(this, props.noteId)}
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowNote;
