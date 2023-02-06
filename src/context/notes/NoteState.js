import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      name: "node-easy-notes-app",
      version: "1.0.0",
      title: "Title",
      description:
        "Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.",
    },
    {
      name: "node-easy-notes-app",
      version: "1.0.0",
      title: "Title",
      description:
        "Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.",
    },
    {
      name: "node-easy-notes-app",
      version: "1.0.0",
      title: "Title",
      description:
        "Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.",
    },
    {
      name: "node-easy-notes-app",
      version: "1.0.0",
      title: "Title",
      description:
        "Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.",
    },
    {
      name: "node-easy-notes-app",
      version: "1.0.0",
      title: "Title",
      description:
        "Never miss a thing in Life. Take notes quickly. Organize and keep track of all your notes.",
    },
  ];
;

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
