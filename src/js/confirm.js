var ConfirmWindow = function (rootElement, type) {
  this.rootElement = rootElement;
  PopupWindow.apply(this, arguments);
  this.rootElement.querySelector('.Confirm-window').classList.add(this.styleTypes[type]);
  this.openBtn = document.getElementById('ConfirmButton');
  this.closeBtn = this.rootElement.querySelector('.Confirm-closeButton');
  this.yesButton = this.rootElement.querySelector('.Confirm-yesButton');
  this.noButton = this.rootElement.querySelector('.Confirm-noButton');
  this.infoArea = document.getElementById('confirmInfo');
  this.confirmEvent();
  this.changeButtonNames();
};

ConfirmWindow.prototype = Object.create(PopupWindow.prototype);
ConfirmWindow.prototype.constructor = ConfirmWindow;

ConfirmWindow.prototype.confirmEvent = function () {
  this.yesButton.addEventListener('click', function () {
    this.infoArea.innerHTML = 'Success!';
    this.toggleOpen();
  }.bind(this));
  this.noButton.addEventListener('click', function () {
    this.infoArea.innerHTML = 'Fatal error!';
    this.toggleOpen();
  }.bind(this));
  return this;
};

ConfirmWindow.prototype.ButtonsNames = {
  yesButton: 'Yes!',
  noButton: 'No('
};
