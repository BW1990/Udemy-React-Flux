var React = require("react");
var Actions = require("../actions");
var ImageStore = require("../stores/image-store");
var ImagePreview = require("./image-preview");
var Reflux = require("reflux");

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],

  getInitialState: function() {
    return {
      images: []
    }
  },

  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },

  // called when rerendering
  componentWillReceiveProps: function(nextProps) {
    Actions.getImages(this.props.params.id);
  },

  render: function() {
    return (
      <div className="topic">
        {this.renderImages()}
      </div>
    )
  },

  renderImages: function() {
    return this.state.images.slice(0, 20).map(function(image) {
      return <ImagePreview {...image} key={image.id} />
    });
  },

  onChange: function(event, images) {
    this.setState({
      images: images
    });
  }
});
