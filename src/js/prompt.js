var PromptWindow = function (rootElement) {
  this.rootElement = rootElement;
  PopupWindow.apply(this, arguments);
  this.openBtn = document.getElementById('PromptButton');
  this.closeBtn = this.rootElement.querySelector('.Prompt-closeButton');
  this.okButton = this.rootElement.querySelector('.Prompt-yesButton');
  this.noButton = this.rootElement.querySelector('.Prompt-noButton');
  this.infoArea = document.getElementById('promptInfo');
  this.inputArea = document.querySelector('.Prompt-inputText');
  this.confirmEvent();
};

PromptWindow.prototype = Object.create(PopupWindow.prototype);
PromptWindow.prototype.constructor = PromptWindow;

PromptWindow.prototype.confirmEvent = function () {
  this.okButton.addEventListener('click', function () {
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
