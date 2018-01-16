'use strict';
$(function () {
    //轮播图滑动事件
    var OFFSET = 50;
    $(".jd_banner").each(function (index, item) {
        var starX, endX;
        var $ul = $(item).find("ul:first-child");
        var $ul2 = $(item).find("ul:last-child");
        item.addEventListener("touchstart", function (e) {
            starX = e.touches[0].clientX;
            e.preventDefault();
        })
        item.addEventListener("touchmove", function (e) {
            endX = e.touches[0].clientX;
            e.preventDefault();
        })
        item.addEventListener("touchend", function (e) {
            var i = 0;
            var $li = $ul.find("li");
            var length = $li.length - 1;
            $.each($li, function (index, element) {
                if ($(element).hasClass("active")) {
                    i = index;
                }
            });
            var offsetX = endX - starX;
            if (offsetX > OFFSET) {
                //上一张
                change(i - 1 >= 0 ? i - 1 : length);
            } else if (offsetX < -OFFSET) {
                //下一张
                change(i + 1 <= length ? i + 1 : 0)
            }
            e.preventDefault();
        });

        function change(index) {
            $ul.find("li:eq(" + index + ")").addClass("active")
                .siblings().removeClass("active");
            $ul2.find("li:eq(" + index + ")").addClass("active")
                .siblings().removeClass("active");
        }
    });
});