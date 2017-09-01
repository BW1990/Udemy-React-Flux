var Api = require("../../utils/api");
var Reflux = require("reflux");
var Actions = require("../actions");

module.exports = Reflux.createStore({
  // if any of the actions within actions get called,
  // call that method if available in Actions
  // triggering that action will call the matching method here
  listenables: [Actions],

  getTopics: function() {
    return Api.get("topics/defaults")
      .then(function(json) {
        this.topics = json.data;
        this.triggerChange();
      }.bind(this));
  },

  triggerChange: function() {
    this.trigger("change", this.topics);
  }
});
