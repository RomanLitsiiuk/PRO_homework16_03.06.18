var PopupWindow = function () {
  this.toggleOpen = this.toggleOpen.bind(this);
  this.changeButtonNames = this.changeButtonNames.bind(this);
};

PopupWindow.prototype.classNames = {
  active: 'isActive'
};

PopupWindow.prototype.toggleOpen = function () {
  this.isActive = !this.isActive;
  return this;
};

Object.defineProperty(PopupWindow.prototype, 'isActive', {
  get: function () {
    return this._isActive;
  },
  set: function (value) {
    this._isActive = value;
    this.assignClassNames();
  }
});

PopupWindow.prototype.assignClassNames = function () {
  this.rootElement.classList.toggle(this.classNames.active, this.isActive);
  return this;
};

PopupWindow.prototype.delegateEvents = function () {
  this.closeBtn.addEventListener('click', this.toggleOpen);
  this.escListener();
  this.clickListener();
  this.openBtn.addEventListener('click', this.toggleOpen);
  return this;
};

PopupWindow.prototype.changeButtonNames = function () {
  this.yesButton.innerHTML = this.ButtonsNames.yesButton;
  this.noButton.innerHTML = this.ButtonsNames.noButton;
};

PopupWindow.prototype.render = function () {
  return this.delegateEvents();
};

PopupWindow.prototype.escListener = function () {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && this.isActive) {
      this.toggleOpen();
    }
  }.bind(this));
};

PopupWindow.prototype.clickListener = function () {
  document.addEventListener('click', function (event) {
    if (event.target === this.rootElement) {
      this.toggleOpen();
    }
  }.bind(this));
};

PopupWindow.prototype.styleTypes = {
  warning: 'u-warning',
  danger: 'u-danger',
  success: 'u-success',
  info: 'u-info'
};
