'use strict';
$(function () {
    //导航栏颜色
    var headerBox = $("#jd_header_box");
    var jdBanner = $("#jd_banner");
    var offsetHeight = jdBanner.height();
    $(window).scroll(function () {
        var top = $(this).scrollTop() / offsetHeight;
        var opacity = top <= 1 ? top : 1;
        headerBox.css('background', 'rgba(201, 21, 35, ' + 0.85 * opacity + ')');
    });
    //秒杀
    var $skTime = $("#sk_time");
    var timeList = $skTime.find(".num");
    var time = 10 * 60 * 60;
    var timer;
    timer = setInterval(function () {
        time--;
        var hour = Math.floor(time / 3600);
        var minute = Math.floor(time / 60 % 60);
        var second = Math.floor(time % 60);
        timeList[0].innerText = hour >= 10 ? Math.floor(hour / 10) : 0;
        timeList[1].innerText = Math.floor(hour % 10);
        timeList[2].innerText = minute >= 10 ? Math.floor(minute / 10) : 0;
        timeList[3].innerText = Math.floor(minute % 10);
        timeList[4].innerText = second >= 10 ? Math.floor(second / 10) : 0;
        timeList[5].innerText = Math.floor(second % 10);
        if (time <= 0) {
            clearInterval(timer);
        }
    }, 1000);
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