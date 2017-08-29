var React = require("react");
var ThumbnailList = require("./thumbnail-list");

var options = {
  thumbnailData: [
    {
      title: "Show Courses",
      number: 12,
      header: "Learn React",
      description: "React is a fantastic new library for making fast, dynamic pages.",
      imageUrl: "https://cdn.worldvectorlogo.com/logos/react.svg"
    },
    {
      title: "See Tutorials",
      number: 25,
      header: "Learn Gulp",
      description: "Gulp will speed up your development work flow.",
      imageUrl: "https://avatars2.githubusercontent.com/u/6200624?v=4&s=400"
    },
  ]
};

// ask react to render the class
var element = React.createElement(ThumbnailList, options);

// when we ask react to render the class, we will tell it
// where to place the rendered element in the dom
React.render(element, document.querySelector(".target"));
