import React, { useEffect, useContext, useRef } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote, deleteNote, editNote, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updatenote = (note) => {
    ref.current.click();
  };
  const ref = useRef(null);
  return (
    <>
      <Addnote />
      <button
        type="button"
        ref={ref}
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return (
            <NoteItem note={note} key={note._id} updatenote={updatenote} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
