import React from "react";
import PropTypes from "prop-types";
import GlobalHeader from "./GlobalHeader";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteOpened: false,
      notes: [],
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  componentDidMount() {
    fetch('/notes.json')
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState({ notes: json });
        this.setState({ currentNote: this.state.notes[0], noteOpened: true });
      }).catch(error => {
        this.setState({ noteOpened: false });
        console.log(error);
      });
  }

  handleTitleChange(title, noteId) {
    this.state.notes.filter(note => note.id === noteId).forEach(note => {
      note.title = title;
    });
  }

  handleBodyChange(body, noteId) {
    this.state.notes.filter(note => note.id === noteId).forEach(note => {
      note.body = body;
    });
  }
  
  render() {
    const { notes, currentNote, noteOpened } = this.state;

    return (
      <div className="container">
        <GlobalHeader />
        <NoteList notes={notes} />
        {noteOpened && <NoteDetail currentNote={currentNote} handleTitleChange={this.handleTitleChange} handleBodyChange={this.handleBodyChange} />}
      </div>
    );
  }
}
