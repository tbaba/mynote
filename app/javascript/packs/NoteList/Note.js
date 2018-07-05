import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Note = props => {
  const note = props.note;
  const key = `note-${note.id}`;

  return (
    <ListItem button component="a" onClick={e => props.handleClick(e, note.id)}>
      <ListItemText primary={note.title} className="note-summary" />
    </ListItem>
  );
};

export default Note
