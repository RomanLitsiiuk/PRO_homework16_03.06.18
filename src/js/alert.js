var AlertWindow = function (rootElement) {
  this.rootElement = rootElement;
  PopupWindow.apply(this, arguments);
  this.openBtn = document.getElementById('AlertButton');
  this.closeBtn = this.rootElement.querySelector('.Alert-closeButton');
  this.okButton = this.rootElement.querySelector('.Alert-button');
  this.confirmEvent();
};

AlertWindow.prototype = Object.create(PopupWindow.prototype);
AlertWindow.prototype.constructor = AlertWindow;

AlertWindow.prototype.confirmEvent = function () {
  this.okButton.addEventListener('click', this.toggleOpen);
  return this;
};