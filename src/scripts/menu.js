class Menu {
  constructor(el = '#menu', options = {}) {
    this.el = $(el);
    this.triggerClass = options.triggerEl || '.menu-trigger';
    this.animationClass = options.animationClass || 'anim';
    this.openClass = options.openClass || 'open';
    this.timeout = options.timeout || 250;
    this.init();
  }

  init() {
    this.trigger = this.el.find(this.triggerClass);
    this.isOpen = false;
    this.initEvents();
  }

  initEvents() {
    this.trigger.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    var self = this;
    if(this.isOpen) {
      self.el.removeClass(self.animationClass);
      setTimeout(function() {
        self.el.removeClass(self.openClass);
      }, self.timeout);
    } else {
      self.el.addClass(self.animationClass);
      setTimeout(function() {
        self.el.addClass(self.openClass);
      }, self.timeout);
    }
    this.isOpen = !this.isOpen;
  }
}
new Menu();
