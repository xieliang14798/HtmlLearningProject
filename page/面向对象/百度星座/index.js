var data = [
    {
        name: '白羊座',
        time: '3.21-4.19'
    }
    , {
        name: '金牛座',
        time: '4.20-5.20'
    }
    , {
        name: '双子座',
        time: '5.21-6.21'
    }
    , {
        name: '巨蟹座',
        time: '6.22-7.22'
    }
    , {
        name: '狮子座',
        time: '7.23-8.22'
    }
    , {
        name: '处女座',
        time: '8.23-9.22'
    }
    , {
        name: '天秤座',
        time: '9.23-10.23'
    }
    , {
        name: '天蝎座',
        time: '10.24-11.22'
    }
    , {
        name: '射手座',
        time: '11.23-12.21'
    }
    , {
        name: '摩羯座',
        time: '12.22-1.19'
    }
    , {
        name: '水瓶座',
        time: '1.20-2.18'
    }
    , {
        name: '双鱼座',
        time: '2.19-3.20'
    }
];

function Star(data, num) {
    this.data = data;
    this.num = num;
    this.box = $("<div class='item num-" + num + "'></div>");
    this.config = {
        container: $("#container")
    };
    var object = this;

    function bindDom() {
        var str = '';
        str += '<div class="image"></div>';
        str += '<div class="description">';
        str += '<p class="name">{{name}}</p>';
        str += '<p class="time">{{time}}</p>';
        str += '<div class="mark"></div>';
        str += '</div>';
        object.box.html(template.compile(str)(object.data)).appendTo(object.config.container);
    }

    function bindEvent() {
        object.box.on("click", function () {
            object.box.toggleClass("selected");
        }).on("mouseenter", function () {
            object.box.addClass("is-hover");
        }).on("mouseleave", function () {
            object.box.removeClass("is-hover");
        })
    }

    this.init = function () {
        bindDom();
        bindEvent();
    }
}

for (var i = 0; i < data.length; i++) {
    new Star(data[i], i).init();
}