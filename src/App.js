import './App.css';
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = (event) => {
    event.preventDefault();
    if (!newNote) {
      return;
    }

    setNotes([...notes, { title: newNote, isCompleted: false }]);
    setNewNote("");
  };

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleChecked = (index) => {
    setNotes(
      notes.map((note, i) => {
        if (i === index) {
          return { ...note, isCompleted: !note.isCompleted };
        }
        return note;
      })
    );
  };

  return (
    <div className='container-main'>
      <div className='app-container'>
        <h1 className='header'>Notes</h1>
        
        <div className='notes-container'>
        <ul className='notes'>
          {notes.map((note, index) => (
            <li className='note' key={index}>
              <input
                type="checkbox"
                checked={note.completed}
                onChange={() => handleChecked(index)}
              />
              <div className='title' style={{ textDecoration: note.isCompleted ? "line-through" : "" }}>{note.title}</div>
              <button onClick={() => handleDeleteNote(index)}>x</button>
            </li>
          ))}
        </ul>
        </div>
        <form className='new-note' onSubmit={handleAddNote}>
          <input
            type="text"
            value={newNote}
            onChange={handleChange}
            placeholder="Add new note"
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
      
  );
}

export default App;

