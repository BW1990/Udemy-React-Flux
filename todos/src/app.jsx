var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require("reactfire");
var Firebase = require("firebase");

// Components
var Header = require("./header");
var List = require("./list");

// variables
var rootUrl = "https://udemy-react-flux-91806.firebaseio.com/";

var App = React.createClass({
  // mixin is group of methods that sits on one object
  // that gets copied over to another object
  // therefore all methods that are available to ReactFire
  // will be available to our component
  mixins: [ ReactFire ],

  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },

  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + "items/");
    this.bindAsObject(this.fb, "items");
    this.fb.on("value", this.handleDataLoaded);
  },

  render: function() {
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            To-Do List
          </h2>
          <Header itemsStore={this.firebaseRefs.items} />
          <hr />
          <div className={"content " + (this.state.loaded ? "loaded" : "")}>
            <List items={this.state.items} />
            {this.deleteButton()}
          </div>
        </div>
      </div>
    )
  },

  deleteButton: function() {
    if (!this.state.loaded) {
      return null;
    } else {
      return (
        <div className="text-center clear-complete">
          <hr />
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDeleteDoneClick}
          >
            Clear Complete Todos
          </button>
        </div>
      )
    }
  },

  onDeleteDoneClick: function() {
    for (var key in this.state.items) {
      if (this.state.items[key].done === true) {
        this.fb.child(key).remove();
      }
    }
  },

  handleDataLoaded: function() {
    this.setState({
      loaded: true
    });
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
