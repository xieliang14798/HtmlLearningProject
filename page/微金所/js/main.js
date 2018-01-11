'use strict';
$(function () {
// 初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip();

    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $("#main_ad > .carousel-inner > .item").each(function (i, item) {
            var $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? "image-xs" : "image-lg");
            $item.css("backgroundImage", "url('" + imgSrc + "')");
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '">');
            } else {
                $item.empty();
            }
        })
    }

    $(window).on("resize", resize).trigger("resize");
    var $navTabs = $(".nav-tabs");
    var width = 30;
    $navTabs.find("li").each(function (index, element) {
        width += element.clientWidth;
    })
    // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
    if (width > $(window).width()) {
        $navTabs.css("width", width).parent().css("overflow-x", "scroll");
    }
    var $newsTitle = $(".news-title");
    //新闻tab点击事件
    $(".news-nav").on("click", "li>a", function () {
        var $this = $(this);
        $newsTitle.text($this.data("title"));
    })
    //轮播图滑动事件
    var OFFSET = 50;
    $(".carousel").each(function (index, item) {
        var starX, endX;
        item.addEventListener("touchstart", function (e) {
            starX = e.touches[0].clientX;
            e.preventDefault();
        });
        item.addEventListener("touchmove", function (e) {
            endX = e.touches[0].clientX;
            e.preventDefault();
        });
        item.addEventListener("touchend", function (e) {
            var offsetX = endX - starX;
            if (offsetX > OFFSET) {
                //上一张
                $(this).carousel("prev");
            } else if (offsetX < -OFFSET) {
                //下一张
                $(this).carousel("next");
            }
            e.preventDefault();
        })

    })
});