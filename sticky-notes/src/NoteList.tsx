import React from "react";
import type { Note } from "./types";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.map((note) => (
        <div
          key={note.id}
          style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}
        >
          <span>{note.text}</span>
          <button onClick={() => onDelete(note.id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
