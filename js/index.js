
    $(function() {
        $("#cards").children().each(function(index) {
            // listen the click event on each card DIV element.
            $(this).mouseover(function() {
                // add the class "card-flipped".
                // the browser will animate the styles between current state and card-flipped state.
                $(this).addClass("flipped");
            });
            $(this).mouseout(function() {
                $(this).removeClass("flipped");
            })
        });
    });
    $('.dropdown-toggle').dropdown()
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {}
    });
    wow.init();
    $(function() {
        $(".lala").click(function() {
            if ($(".main-min-nav").is(":visible")) { //防止宽屏上点击
            $(".main-min-nav").hide(300);
            };
            if ($(".main-min-nav").is(":hidden")) { //防止宽屏上点击
            $(".main-min-nav").toggle(300);
            };
    });
    })
