var $$ = function () {

};
$$.prototype = {
    extend: function (target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    }
};
$$ = new $$();