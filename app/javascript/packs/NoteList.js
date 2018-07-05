import "@babel/polyfill";
import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import Note from "./NoteList/Note";

export default class NoteList extends React.Component {
  render() {
    const { notes, handleClick } = this.props;
    return (
      <List component="nav">
        {
          notes.map(note => {
            const key = `note-${note.id}`;
            return <Note key={key} note={note} handleClick={handleClick} />;
          })
        }
      </List>
    )
  }
}
