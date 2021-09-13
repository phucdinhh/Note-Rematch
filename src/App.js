import React from 'react';
import './App.css';

import ShowNote from './components_rm/ShowNote';
import AddNote from './components_rm/AddNote';
import { useSelector } from 'react-redux';

function App() {
  const notes = useSelector((state) => state.notes.allNotes);
  return (
    <div className="row" style={{ marginTop: '3%' }}>
      <AddNote />
      {notes.map((note) => (
        <ShowNote noteContent={note.content} noteId={note.id}/>
      ))}
    </div>
  );
}

export default App;
