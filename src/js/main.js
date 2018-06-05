var PopupWindow = function () {
  this.toggleOpen = this.toggleOpen.bind(this);
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
  document.addEventListener('click', function (event) {
    if (event.target === this.rootElement) {
      this.toggleOpen();
    }
  }.bind(this));
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && this.isActive) {
      this.toggleOpen();
    }
  }.bind(this));
  this.openBtn.addEventListener('click', this.toggleOpen);
  return this;
};

PopupWindow.prototype.render = function () {
  return this.delegateEvents();
};
