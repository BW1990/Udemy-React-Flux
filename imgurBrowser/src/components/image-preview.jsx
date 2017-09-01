var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    }
  },

  render: function() {
    return (
      <Link
        className="image-preview"
        to={"images/" + this.props.id}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.animated && this.state.hovering ? this.video() : this.image()}
        {this.props.animated && !this.state.hovering ? this.icon() : null}
        {this.state.hovering ? this.inset() : null}
      </Link>
    )
  },

  image: function() {
    // preview url
    var link = "http://i.imgur.com/" + this.props.id + 'h.jpg';

    return <img src={link} />
  },

  video: function() {
    return (
      <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
        <source src={this.props.mp4} type="video/mp4"></source>
      </video>
    )
  },

  icon: function() {
    return (
      <span className="glyphicon glyphicon-play"></span>
    )
  },

  inset: function() {
    return (
      <div className="inset">
        Views: {this.props.views}
        <br />
        Upvotes: {this.props.ups}
      </div>
    )
  },

  onMouseEnter: function(event) {
    this.setState({
      hovering: true
    });
  },

  onMouseLeave: function(event) {
    this.setState({
      hovering: false
    });
  }
});
