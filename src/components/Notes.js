import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote, deleteNote, editNote } = context;
  return (
    <div className="row my-3">
      <h1>Your Notes</h1>
      {notes.map((note) => {
        return (
          <NoteItem
            note={note}
            key={note._id}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        );
      })}
    </div>
  );
};

export default Notes;
