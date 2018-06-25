import React from "react";
import PropTypes from "prop-types";
import Note from "./NoteList/Note";

export default class NoteList extends React.Component {
  render() {
    const { notes } = this.props;
    return (
      <ul className="NoteList">
        {
          notes.map(note => {
            const key = `note-${note.id}`;
            return <Note key={key} note={note} />;
          })
        }
      </ul>
    )
  }
}
