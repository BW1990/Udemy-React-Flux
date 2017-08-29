var React = require("react");
var Thumbnail = require("./thumbnail");

module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps, index) {
      return (
        <Thumbnail {...thumbnailProps} key={index} />
      );
    });

    return <div>{list}</div>
  }
});
