import React from "react";
import PropTypes from "prop-types";

const Note = props => {
  const note = props.note;
  const key = `note-${note.id}`;

  return (
    <li id={key}>
      <h2>{note.title}</h2>
    </li>
  );
};

export default Note
