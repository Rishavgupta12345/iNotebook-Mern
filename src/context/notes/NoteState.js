import react from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
        _id: "1",
        title: "Title 1",
        description: "Description 1",
        },
        {
        _id: "2",
        title: "Title 2",
        description: "Description 2",
        },
        {
        _id: "3",
        title: "Title 3",
        description: "Description 3",
        },
    ];
    
    const [notes, setNotes] = react.useState(notesInitial);
    
    // Add a note
    const addNote = (title, description) => {
        const newNote = {
        _id: notes.length + 1,
        title,
        description,
        };
        setNotes([...notes, newNote]);
    };
    
    // Delete a note
    const deleteNote = (_id) => {
        const newNotes = notes.filter((note) => note._id !== _id);
        setNotes(newNotes);
    };
    
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
        {props.children}
        </NoteContext.Provider>
    );
    }

export default NoteState;