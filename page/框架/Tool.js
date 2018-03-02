var T = function () {
};
T.prototype = {
    // 将source里的属性拷贝到target里
    extend: function (target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    }
};
/*在框架中实例化，这样外面使用的使用就不用实例化了*/
T = new T();
/*基础选择器*/
T.extend(T, {
    //id选择器
    $id: function (id) {
        return document.getElementById(id);
    },
    //tag选择器
    $tag: function (tag, parent) {
        if (parent && T.isString(parent)) {
            parent = T.$id(parent);
        } else if (parent === null || typeof parent === 'undefined') {
            parent = document;
        }
        console.log(parent);
        return parent.getElementsByTagName(tag);
    },
    $class: function (className) {
        return document.getElementsByClassName(className);
    }
});
/*数据类型检测*/
T.extend(T, {
    isNumber: function (val) {
        return typeof val === 'number' && isFinite(val)
    },
    isBoolean: function (val) {
        return typeof val === "boolean";
    },
    isString: function (val) {
        return typeof val === "string";
    },
    isUndefined: function (val) {
        return typeof val === "undefined";
    },
    isObj: function (str) {
        if (str === null || typeof str === 'undefined') {
            return false;
        }
        return typeof str === 'object';
    },
    isNull: function (val) {
        return val === null;
    },
    isArray: function (arr) {
        if (arr === null || typeof arr === 'undefined') {
            return false;
        }
        return arr.constructor === Array;
    }

});
/*事件框架*/
T.extend(T, {
    on: function (id, type, fn) {
        var dom = T.isString(id) ? document.getElementById(id) : id;
        if (dom.addEventListener) {
            // 选择true，事件由外到里进行，选择false，事件由里到外进行
            return dom.addEventListener(type, fn, false);
        } else {
            dom.attachEvent('on' + type, fn);
        }
    },
    un: function (id, type, fn) {
        var dom = T.isString(id) ? document.getElementById(id) : id;
        if (dom.addEventListener) {
            return dom.removeEventListener(type, fn);
        } else {
            dom.detachEvent(type, fn);
        }
    },
    click: function (id, fn) {
        T.on(id, 'click', fn);
    },
    mouseover: function (id, fn) {
        T.on(id, 'mouseover', fn);
    },
    mouseout: function (id, fn) {
        T.on(id, 'mouseout', fn);
    },
    hover: function (id, fnOver, fnOut) {
        if (fnOver) {
            T.on(id, 'mouseover', fnOver);
        }
        if (fnOut) {
            T.on(id, 'mouseout', fnOut);
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        var e = T.getEvent(event);
        return e.target || e.srcElement;
    },
    // 阻止默认行为
    preventDefault: function (event) {
        event = T.getEvent(event);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //阻止冒泡
    stopPropagation: function (event) {
        event = T.getEvent(event);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    //事件委托
    delegate: function (pid, eventType, selector, fn) {
        var parent = T.$id(pid);

        function handle(e) {
            var target = T.getTarget(e);
            if (target.nodeName.toLowerCase() === selector || target.id === selector || target.className.indexOf(selector) != -1) {
                // 在事件冒泡的时候，回以此遍历每个子孙后代，如果找到对应的元素，则执行如下函数
                // 为什么使用call，因为call可以改变this指向
                // 大家还记得，函数中的this默认指向window，而我们希望指向当前dom元素本身
                fn.call(target);//将this指向所点击的dom元素
            }
        }

        parent[eventType] = handle;
    }
});