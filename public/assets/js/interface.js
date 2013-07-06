(function() {
  var interface,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  interface = (function() {

    function interface(elm) {
      this.elm = elm;
      this.closeDisplay = __bind(this.closeDisplay, this);
      this.openDisplay = __bind(this.openDisplay, this);
      this.displayHandler = __bind(this.displayHandler, this);
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

    interface.prototype.displayHandler = function() {
      var _this = this;
      console.log("loaded");
      return $('.itemWrapper').on('click', function(event) {
        var elm, open;
        elm = $(event.target);
        if (!elm.hasClass('.itemWrapper')) {
          open = elm.parents('.itemWrapper').data('isopen');
        } else {
          open = elm.data('isopen');
        }
        if (open === true) {
          return $(_this).trigger({
            type: 'closeDisplay',
            elm: event.target
          });
        } else {
          return console.log(elm.trigger({
            type: 'openDisplay'
          }));
        }
      });
    };

    interface.prototype.openDisplay = function(elm) {
      console.log(elm(+'??'));
      $(elm).find('content').show();
      return $(elm).data('open', true);
    };

    interface.prototype.closeDisplay = function() {
      $(this).slideUp();
      return $(this).data('open', false);
    };

    return interface;

  })();

  interface = new interface("sidr");

  interface.displayHandler();

}).call(this);
