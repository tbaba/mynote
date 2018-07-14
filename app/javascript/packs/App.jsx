import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import GlobalHeader from "./GlobalHeader";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";
import NoteModal from "./NoteModal";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteOpened: false,
      newNoteModalOpened: false,
      notes: [],
      currentNote: {},
    }

    this.handleCurrentNoteChanged = this.handleCurrentNoteChanged.bind(this);
    this.handleModalOpen  = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalOpen() {
    this.setState({ newNoteModalOpened: true });
  }

  handleModalClose() {
    this.setState({ newNoteModalOpened: false });
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
    const { notes, currentNote, newNoteModalOpened } = this.state;

    return (
      <div className="container">
        <GlobalHeader />
        <Grid container spacing={24}>
          <Grid item xs={3} sm={2}>
            <NoteList notes={notes} handleClick={this.handleCurrentNoteChanged} />
            <Button onClick={this.handleModalOpen}>
              New Note
            </Button>
          </Grid>
          <Grid item xs={9} sm={10}>
            <NoteDetail currentNote={currentNote} />
          </Grid>
        </Grid>
        <NoteModal
          open={newNoteModalOpened}
          onClose={this.handleModalClose}
        />
      </div>
    );
  }
}
