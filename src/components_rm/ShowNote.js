import React, { useState } from 'react';
import './ShowNote.css';
import { useSelector, useDispatch } from 'react-redux';

function ShowNote() {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.allNotes);

  const [noteContent, setNoteContent] = useState()

  const handleChange = (e, id) => {
    setNoteContent(e.target.value)
    dispatch.notes.editNote(id, noteContent);
  };

  const handleRemoveNote = (noteID) => {
    dispatch.notes.removeNote(noteID);
  };

  return (
    <>
      {notes.map((note) => (
        <div className="col-md-4" style={{ marginTop: 10 }}>
          <div className="card bg-warning">
            <div className="card-body" style={{ height: 200 }}>
              <textarea
                value={note.content}
                onChange={handleChange.bind(this, note.id)}
              />
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger btn-sm float-right"
                onClick={handleRemoveNote.bind(this, note.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShowNote;
