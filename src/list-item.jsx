var React = require("react");

module.exports = React.createClass({
  handleItemClick: function() {
      this.props.onClick(this.props.item);
  },

  render: function() {
    return (
      <li className={this.props.className}><a onClick={this.handleItemClick}>{this.props.item}</a></li>
    )
  }
});
