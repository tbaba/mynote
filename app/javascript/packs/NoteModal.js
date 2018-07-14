import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  modalForm: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    width: theme.spacing.unit * 50,
    padding: theme.spacing.unit * 4,
  }
});

class ModalContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;

    console.log(`submitted! { title: ${title}, body: ${body} }`);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    const { title, body } = this.state;
    const { classes, open, onClose } = this.props;

    return (
      <Modal
        aria-labelledby="New Note"
        aria-describedby="Create new note."
        open={open}
        onClose={onClose}
      >
        <div style={getModalStyle()} className={classes.modalForm}>
          <Typography variant="title" id="modal-title">
            New Note
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="noteTitle"
              label="Title"
              name="noteTitle"
              value={title}
              onChange={this.handleTitleChange}
              margin="normal"
              fullWidth
            />
            <TextField
              id="noteBody"
              label="Body"
              name="noteBody"
              value={body}
              onChange={this.handleBodyChange}
              margin="normal"
              fullWidth
              multiline
            />
            <Button variant="contained" size="large" color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    )
  }
};

const NoteModal = withStyles(styles)(ModalContent);

export default NoteModal;
