var PromptWindow = function (rootElement, type) {
  this.rootElement = rootElement;
  PopupWindow.apply(this, arguments);
  this.rootElement.querySelector('.Prompt-window').classList.add(this.styleTypes[type]);
  this.openBtn = document.getElementById('PromptButton');
  this.closeBtn = this.rootElement.querySelector('.Prompt-closeButton');
  this.yesButton = this.rootElement.querySelector('.Prompt-yesButton');
  this.noButton = this.rootElement.querySelector('.Prompt-noButton');
  this.infoArea = document.getElementById('promptInfo');
  this.inputArea = document.querySelector('.Prompt-inputText');
  this.confirmEvent();
  this.changeButtonNames();
};

PromptWindow.prototype = Object.create(PopupWindow.prototype);
PromptWindow.prototype.constructor = PromptWindow;

PromptWindow.prototype.confirmEvent = function () {
  this.yesButton.addEventListener('click', function () {
    if (this.inputArea.value) {
      this.infoArea.innerHTML = this.inputArea.value;
    } else {
      this.infoArea.innerHTML = '(empty)';
    }
    this.toggleOpen();
  }.bind(this));
  this.noButton.addEventListener('click', function () {
    this.toggleOpen();
  }.bind(this));
  return this;
};

PromptWindow.prototype.ButtonsNames = {
  yesButton: 'Ok!',
  noButton: 'Oh, god! Why?'
};
