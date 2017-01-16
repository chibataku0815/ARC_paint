(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

require('./menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./menu":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#menu';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Menu);

    this.el = $(el);
    this.triggerClass = options.triggerEl || '.menu-trigger';
    this.animationClass = options.animationClass || 'anim';
    this.openClass = options.openClass || 'open';
    this.timeout = options.timeout || 250;
    this.init();
  }

  _createClass(Menu, [{
    key: 'init',
    value: function init() {
      this.trigger = this.el.find(this.triggerClass);
      this.isOpen = false;
      this.initEvents();
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      this.trigger.click(this.toggleMenu.bind(this));
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
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
    }
  }]);

  return Menu;
}();

new Menu();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7SUNETSxJO0FBQ0osa0JBQXdDO0FBQUEsUUFBNUIsRUFBNEIsdUVBQXZCLE9BQXVCO0FBQUEsUUFBZCxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3RDLFNBQUssRUFBTCxHQUFVLEVBQUUsRUFBRixDQUFWO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLFFBQVEsU0FBUixJQUFxQixlQUF6QztBQUNBLFNBQUssY0FBTCxHQUFzQixRQUFRLGNBQVIsSUFBMEIsTUFBaEQ7QUFDQSxTQUFLLFNBQUwsR0FBaUIsUUFBUSxTQUFSLElBQXFCLE1BQXRDO0FBQ0EsU0FBSyxPQUFMLEdBQWUsUUFBUSxPQUFSLElBQW1CLEdBQWxDO0FBQ0EsU0FBSyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLLE9BQUwsR0FBZSxLQUFLLEVBQUwsQ0FBUSxJQUFSLENBQWEsS0FBSyxZQUFsQixDQUFmO0FBQ0EsV0FBSyxNQUFMLEdBQWMsS0FBZDtBQUNBLFdBQUssVUFBTDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLEtBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixJQUFyQixDQUFuQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJLE9BQU8sSUFBWDtBQUNBLFVBQUcsS0FBSyxNQUFSLEVBQWdCO0FBQ2QsYUFBSyxFQUFMLENBQVEsV0FBUixDQUFvQixLQUFLLGNBQXpCO0FBQ0EsbUJBQVcsWUFBVztBQUNwQixlQUFLLEVBQUwsQ0FBUSxXQUFSLENBQW9CLEtBQUssU0FBekI7QUFDRCxTQUZELEVBRUcsS0FBSyxPQUZSO0FBR0QsT0FMRCxNQUtPO0FBQ0wsYUFBSyxFQUFMLENBQVEsUUFBUixDQUFpQixLQUFLLGNBQXRCO0FBQ0EsbUJBQVcsWUFBVztBQUNwQixlQUFLLEVBQUwsQ0FBUSxRQUFSLENBQWlCLEtBQUssU0FBdEI7QUFDRCxTQUZELEVBRUcsS0FBSyxPQUZSO0FBR0Q7QUFDRCxXQUFLLE1BQUwsR0FBYyxDQUFDLEtBQUssTUFBcEI7QUFDRDs7Ozs7O0FBRUgsSUFBSSxJQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJy4vbWVudSc7XG4iLCJjbGFzcyBNZW51IHtcbiAgY29uc3RydWN0b3IoZWwgPSAnI21lbnUnLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmVsID0gJChlbCk7XG4gICAgdGhpcy50cmlnZ2VyQ2xhc3MgPSBvcHRpb25zLnRyaWdnZXJFbCB8fCAnLm1lbnUtdHJpZ2dlcic7XG4gICAgdGhpcy5hbmltYXRpb25DbGFzcyA9IG9wdGlvbnMuYW5pbWF0aW9uQ2xhc3MgfHwgJ2FuaW0nO1xuICAgIHRoaXMub3BlbkNsYXNzID0gb3B0aW9ucy5vcGVuQ2xhc3MgfHwgJ29wZW4nO1xuICAgIHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAyNTA7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMudHJpZ2dlciA9IHRoaXMuZWwuZmluZCh0aGlzLnRyaWdnZXJDbGFzcyk7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgfVxuXG4gIGluaXRFdmVudHMoKSB7XG4gICAgdGhpcy50cmlnZ2VyLmNsaWNrKHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmKHRoaXMuaXNPcGVuKSB7XG4gICAgICBzZWxmLmVsLnJlbW92ZUNsYXNzKHNlbGYuYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5lbC5yZW1vdmVDbGFzcyhzZWxmLm9wZW5DbGFzcyk7XG4gICAgICB9LCBzZWxmLnRpbWVvdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmVsLmFkZENsYXNzKHNlbGYuYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5lbC5hZGRDbGFzcyhzZWxmLm9wZW5DbGFzcyk7XG4gICAgICB9LCBzZWxmLnRpbWVvdXQpO1xuICAgIH1cbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgfVxufVxubmV3IE1lbnUoKTtcbiJdfQ==
