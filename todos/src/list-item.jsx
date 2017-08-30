var React = require("react");
var Firebase = require("firebase");

var rootUrl = "https://udemy-react-flux-91806.firebaseio.com/";

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },

  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + "items/" + this.props.item.key);
  },

  render: function() {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleDoneChange}
          />
        </span>
        <input
          type="text"
          disabled={this.state.done}
          className="form-control"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <span className="input-group-btn">
          {this.changesButtons()}
          <button
            className="btn btn-danger"
            onClick={this.handleDeleteClick}
          >
            Delete
          </button>
        </span>
      </div>
    )
  },

  changesButtons: function() {
    if (!this.state.textChanged) {
      return null;
    } else {
      return (
        [
          <button
            key="1"
            className="btn btn-success"
            onClick={this.handleSaveClick}
          >
            Save
          </button>,
          <button
            key="2"
            className="btn btn-warning"
            onClick={this.handleUndoClick}
          >
            Undo
          </button>
        ]
      )
    }
  },

  handleSaveClick: function() {
    this.fb.update({text: this.state.text});
    this.setState({
      textChanged: false
    });
  },

  handleUndoClick: function() {
    this.setState({
      text: this.props.item.text,
      textChanged: false
    });
  },

  handleDoneChange: function(event) {
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update);
  },

  handleDeleteClick: function() {
    this.fb.remove();
  },

  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  }
});
