(function() {
    $("[data-slider-wrap]").each(function() {
       var _this = $(this),
          _slick = _this.find("[data-slider]");
 
       function typeInit(target, str, destroy) {
          var typedOptions = {
                strings: [str],
                typeSpeed: 10,
                cursorChar: ""
             },
             _typedjs = new Typed(target, typedOptions);
 
          if (destroy === true) {
             _typedjs.destroy();
          }
       } //typeInit END
 
       _slick
          .on("init", function(event, slick) {
             var _current = _slick.find("[data-slick-index='0']"),
                _input = _current.find("[data-typed]"),
                _inputNative = _input[0],
                _data = _input.data("typed");
 
             typeInit(_inputNative, _data);
          })
          .on("afterChange", function(event, slick, currentSlide) {
             var _getCurrent = _slick.find(
                   "[data-slick-index='" + currentSlide + "']"
                ),
                _getInput = _getCurrent.find("[data-typed]"),
                _getInputNative = _getInput[0],
                _getData = _getInput.data("typed"),
                 
                _getAll = $("[data-slick-index]"),
                _getAllInput = _getAll.find("[data-typed]"),
                _getAllInputNative = _getAllInput[0];
 
             //destroy
             typeInit(_getAllInputNative, _getData, true);
             _getAllInput
                .html("")
                .next().remove();
 
             //init
             typeInit(_getInputNative, _getData);
          });
 
       _slick.slick({
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 4000,
          arrows: true,
          dots: true
       });
    });
 })();