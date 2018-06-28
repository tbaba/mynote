import React from "react";
import PropTypes from "prop-types";

export default class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.currentNote.title,
      body: this.props.currentNote.body,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { target: { name, value } } = ev;
    this.props.handlechange(name, value, this.props.currentNote.id);
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
                onChange={this.handleChange}
              />
            </h2>
          </header>
          <div className="note-detail-body">
            <textarea
              className={`${key}__body`}
              onChange={this.handleChange}
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
