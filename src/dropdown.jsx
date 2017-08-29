var React = require("react");
var Button = require("./button");
var ListItem = require("./list-item");

module.exports = React.createClass({

  getInitialState: function() {
    return {
      open: false
    }
  },

  handleButtonClick: function() {
    this.setState({
      open: !this.state.open
    });
  },

  handleItemClick: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
  },

  render: function() {

    list = this.props.items.map(function(item, index) {
      return (
        <ListItem
          key={index}
          item={item}
          onClick={this.handleItemClick}
          className={this.state.itemTitle === item ? "active" : ""}
        />
      )
    }.bind(this));

    return (
      <div className="dropdown">
        <Button
          className="btn-default"
          title={this.state.itemTitle || this.props.title}
          subTitleClassName="caret"
          onClick={this.handleButtonClick}
        />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>{list}</ul>
      </div>
    )
  }
});
