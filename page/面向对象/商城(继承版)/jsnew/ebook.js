function eBook() {
    Base.call(this, arguments);
    /*作者*/
    this.author = '张三'
    /*出版社*/
    this.publisher = '清华大学出版社'
    /*出版时间*/
    this.publishDate = '2016-09-09'
    /*页数*/
    this.pages = 0
    /*分类*/
    this.type = 'IT - 前端开发 - JS'
}

// eBook.prototype=new Base();
(function () {
    // 创建一个没有实例方法的类
    var Super = function () {
    };
    // eBook.prototype = Base.prototype;不能直接这样，因为这样子类和父类的原型是共享同一内存的
    Super.prototype = Base.prototype;
    eBook.prototype = new Super();
})();
eBook.prototype.constructor = eBook;
eBook.prototype.bindDOMDetail = function () {
    /*拼接的形式*/
    var str = ''
    str += '<h1>' + this.name + '</h1>'
    str += '<ul class="rating">'
    str += '<li><a href="#" id="buyCount">' + this.buySum + '</a>人购买</li>'
    str += '<div class="clearfix"></div>'
    str += '</ul>'
    str += '<div class="price_single">'
    str += '<span class="reducedfrom" >$' + this.normalPrice + '</span>'
    str += '<span class="actual" >$' + this.youhuijia + '</span>'
    str += '<a href="#">优惠价</a>'
    str += '</div>'
    str += '<h2 class="quick">作者:</h2>'
    str += '<p class="quick_desc" >' + this.author + '</p>'
    str += '<h2 class="quick">出版日期:</h2>'
    str += '<p class="quick_desc" >' + this.publishDate + '</p>'
    str += '<h2 class="quick">出版社:</h2>'
    str += '<p class="quick_desc" >' + this.publisher + '</p>'
    str += '<h2 class="quick">页数:</h2>'
    str += '<p class="quick_desc" >' + this.pages + '</p>'
    str += '<h2 class="quick">分类:</h2>'
    str += '<p class="quick_desc" >' + this.type + '</p>'

    $('.bookdetail').html(str)
};
eBook.prototype.init = function () {
    this.bindDOMDetail();
    this.bindDOMImage();
}