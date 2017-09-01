var React = require("react");

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="list-group">
        {this.renderComments()}
      </ul>
    )
  },

  renderComments: function() {
    return this.props.comments.slice(0, 20).map(function(comment) {
      return (
        <li key={comment.id} className="list-group-item comment-box">
          <span className="badge">
            {comment.ups}
          </span>
          <h5>{comment.author}</h5>
          {comment.comment}
        </li>
      )
    })
  }
});
