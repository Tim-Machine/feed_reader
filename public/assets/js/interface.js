(function() {
  var rederinterface,
    _this = this;

  rederinterface = (function() {

    function rederinterface(elm) {
      var _this = this;
      this.elm = elm;
      this.displayHandler = function() {
        return rederinterface.prototype.displayHandler.apply(_this, arguments);
      };
      this.mouseTracking = function() {
        return rederinterface.prototype.mouseTracking.apply(_this, arguments);
      };
      $(this.elm).sidr();
      this.mouseTracking();
      $("abbr.timeago").timeago();
    }

    rederinterface.prototype.action = function(act, target) {
      return $.sidr(act, target);
    };

    rederinterface.prototype.openMenu = function() {
      return this.action('open', this.elm);
    };

    rederinterface.prototype.closeMenu = function() {
      return this.action("close", this.elm);
    };

    rederinterface.prototype.mouseTracking = function() {
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

    rederinterface.prototype.displayHandler = function() {
      var $item;
      $item = $('.itemWrapper');
      $item.on('click', function(e) {
        e.preventDefault();
        return $(this).find('.content').slideToggle();
      });
      return item.find('a').on('click', function(e) {
        return e.preventDefault();
      });
    };

    return rederinterface;

  })();

  rederinterface = new rederinterface("sidr");

  rederinterface.displayHandler();

}).call(this);
