import React from "react";
import PropTypes from "prop-types";

export default class NoteDetail extends React.Component {
  render() {
    const note = this.props.currentNote;
    const key = `note-${note.id}-detail`;

    return (
      <div id={key}>
        <header>
          <h2>{note.title}</h2>
        </header>
        <div className="note-detail-body">
          {note.body}
        </div>
        <footer>
          <time>{note.created_at}</time>
        </footer>
      </div>
    );
  }
}
