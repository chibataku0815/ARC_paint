'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    var el = arguments.length <= 0 || arguments[0] === undefined ? '#menu' : arguments[0];
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Menu);

    this.el = $(el);
    this.triggerClass = options.triggerEl || '.menu-trigger';
    this.animationClass = options.animationClass || 'anim';
    this.openClass = options.openClass || 'open';
    this.timeout = options.timeout || 250;
    this.init();
  }

  Menu.prototype.init = function init() {
    this.trigger = this.el.find(this.triggerClass);
    this.isOpen = false;
    this.initEvents();
  };

  Menu.prototype.initEvents = function initEvents() {
    this.trigger.click(this.toggleMenu.bind(this));
  };

  Menu.prototype.toggleMenu = function toggleMenu() {
    var self = this;
    if (this.isOpen) {
      self.el.removeClass(self.animationClass);
      setTimeout(function () {
        self.el.removeClass(self.openClass);
      }, self.timeout);
    } else {
      self.el.addClass(self.animationClass);
      setTimeout(function () {
        self.el.addClass(self.openClass);
      }, self.timeout);
    }
    this.isOpen = !this.isOpen;
  };

  return Menu;
}();

new Menu();
