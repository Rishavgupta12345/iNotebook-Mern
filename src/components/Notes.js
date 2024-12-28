import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote, deleteNote, editNote } = context;
  return (
    <>
      <Addnote />
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return (
            <NoteItem
              note={note}
              key={note._id}
              deleteNote={deleteNote}
              editNote={editNote}
              addNote={addNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
