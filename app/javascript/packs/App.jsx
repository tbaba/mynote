import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import GlobalHeader from "./GlobalHeader";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteOpened: false,
      notes: [],
      currentNote: {},
    }

    this.handleCurrentNoteChanged = this.handleCurrentNoteChanged.bind(this);
  }

  handleCurrentNoteChanged(event, noteId) {
    const eventTarget = event.target;

    const currentNote = this.state.notes.filter(note => {
      if (note.id === Number(noteId)) {
        return note;
      }
    });
    this.setState({ currentNote: currentNote[0] });
  }

  componentDidMount() {
    fetch('/notes.json')
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState({ notes: json });
        this.setState({ currentNote: this.state.notes[0] });
      }).catch(error => {
        console.log(error);
      });
  }
  
  render() {
    const { notes, currentNote } = this.state;

    return (
      <div className="container">
        <GlobalHeader />
        <Grid container spacing={24}>
          <Grid item xs={3} sm={2}>
            <NoteList notes={notes} handleClick={this.handleCurrentNoteChanged} />
          </Grid>
          <Grid item xs={9} sm={10}>
            <NoteDetail currentNote={currentNote} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
