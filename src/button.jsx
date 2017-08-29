var React = require("react");

module.exports = React.createClass({

  render: function() {
    return (
      <button className={"btn " + this.props.className} type="button" onClick={this.props.onClick}>
        {this.props.title}
        <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
      </button>
    )
  }
});
