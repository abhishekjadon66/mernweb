import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note, updateNote } = props;

  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <MdDeleteOutline
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
              style={{
                cursor: "pointer",
              }}
            />
            <BiEdit
              onClick={() => {
                updateNote(note);
              }}
              className="mx-4"
              style={{
                cursor: "pointer",
              }}
            />
          </div>

          <p className="card-text">{note.description} </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
