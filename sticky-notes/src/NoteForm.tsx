import React, { useState } from "react";

interface NoteFormProps {
  onAdd: (text: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "12px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note..."
        style={{ padding: "8px", width: "260px" }}
      />
      <button type="submit" style={{ marginLeft: "8px", padding: "8px 12px" }}>
        Add
      </button>
    </form>
  );
};

export default NoteForm;
