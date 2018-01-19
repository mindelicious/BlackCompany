function Component(selector) {
  this.selector = selector;
}

Component.prototype.init = function() {
  console.log("Component: " + this.selector + " initialized");
};

Component.prototype.getDOMElement = function() {
  return document.querySelector(this.selector);
};

Component.prototype.render = function() {
  console.log("Component: " + this.selector + " rendered");
};