import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>

          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              props.deleteNote(note._id);
            }}
          >
            Delete
          </button>

          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              props.editNote(note._id);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
