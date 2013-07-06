(function() {
  var interface,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  interface = (function() {

    function interface(elm) {
      this.elm = elm;
      this.mouseTracking = __bind(this.mouseTracking, this);
      $(this.elm).sidr();
      this.mouseTracking();
      $("abbr.timeago").timeago();
    }

    interface.prototype.action = function(act, target) {
      return $.sidr(act, target);
    };

    interface.prototype.openMenu = function() {
      return this.action('open', this.elm);
    };

    interface.prototype.closeMenu = function() {
      return this.action("close", this.elm);
    };

    interface.prototype.mouseTracking = function() {
      var _this = this;
      return $(document).mousemove(function(e) {
        if (e.pageX <= 150) {
          return $(_this).trigger({
            type: "openMenu"
          });
        } else {
          return $(_this).trigger({
            type: 'closeMenu'
          });
        }
      });
    };

    return interface;

  })();

  interface = new interface("sidr");

}).call(this);
