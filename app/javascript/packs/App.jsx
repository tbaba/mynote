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
      notes: props.notes,
    }
  }

  componentWillMount() {
    this.setState({ currentNote: this.state.notes[0] });
  }
  
  render() {
    const { notes, currentNote } = this.state;
    return (
      <div className="container">
        <GlobalHeader />
        <NoteList notes={notes} />
        <NoteDetail currentNote={currentNote} />
      </div>
    );
  }
}
