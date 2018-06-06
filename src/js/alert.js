var AlertWindow = function (rootElement, type) {
  this.rootElement = rootElement;
  PopupWindow.apply(this, arguments);
  this.rootElement.querySelector('.Alert-window').classList.add(this.styleTypes[type]);
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