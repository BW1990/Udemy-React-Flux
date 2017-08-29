var React = require("react");
var Dropdown = require("./dropdown");

var options = {
  title: "Choose a dessert",
  items: [
    "Apple Pie",
    "Peach Cobbler",
    "Coconut Cream Pie"
  ]
};

// ask react to render the class
var element = React.createElement(Dropdown, options);

// when we ask react to render the class, we will tell it
// where to place the rendered element in the dom
React.render(element, document.querySelector(".target"));
