import React from "react";
import PropTypes from "prop-types";

export default class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.currentNote.title,
      body: this.props.currentNote.body,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange  = this.handleBodyChange.bind(this);
  }

  handleTitleChange(ev) {
    this.props.handleTitleChange(ev.target.value, this.props.currentNote.id);
  }

  handleBodyChange(ev) {
    this.props.handleBodyChange(ev.target.value, this.props.currentNote.id);
  }

  render() {
    const key = `note-${this.props.currentNote.id}-detail`;

    return (
      <div id={key}>
        <form>
          <header>
            <h2>
              <input
                type="text"
                value={this.state.title}
                className={`${key}__title`}
                onChange={this.handleTitleChange}
              />
            </h2>
          </header>
          <div className="note-detail-body">
            <textarea
              className={`${key}__body`}
              onChange={this.handleBodyChange}
              value={this.state.body}
            />
          </div>
          <footer>
            <time>{this.props.currentNote.created_at}</time>
          </footer>
        </form>
      </div>
    );
  }
}
