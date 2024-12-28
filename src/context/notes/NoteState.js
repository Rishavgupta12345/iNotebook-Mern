import react from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = react.useState(notesInitial);

  // Get all notes
  const getNotes = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1OTVkZjg3MTgxZTQ4ZjYxNmE1NTNkIn0sImlhdCI6MTczNTAyMTI0M30.fDDxIGKhzo0y1sLvBrHUfnfwq1m_8uzP3ZoLi2dcilE",

      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1OTVkZjg3MTgxZTQ4ZjYxNmE1NTNkIn0sImlhdCI6MTczNTAyMTI0M30.fDDxIGKhzo0y1sLvBrHUfnfwq1m_8uzP3ZoLi2dcilE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "4",
      title,
      description,
      tag,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (_id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1OTVkZjg3MTgxZTQ4ZjYxNmE1NTNkIn0sImlhdCI6MTczNTAyMTI0M30.fDDxIGKhzo0y1sLvBrHUfnfwq1m_8uzP3ZoLi2dcilE",
      },
    });
    const json = response.json();
    console.log("deleting the note with id: ", _id);
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });
    setNotes(newNotes);

  };

  //Edit a note
  const editNote = async (_id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1OTVkZjg3MTgxZTQ4ZjYxNmE1NTNkIn0sImlhdCI6MTczNTAyMTI0M30.fDDxIGKhzo0y1sLvBrHUfnfwq1m_8uzP3ZoLi2dcilE",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.map((note) => {
      if (note._id === _id) {
        note.title = title;
        note.description = description;
        note.tag = tag;
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
