function Product() {
    /*图片*/
    this.image = "";
    /*折扣*/
    this.discount = "";
    /*商品名称*/
    this.name = "";
    /*价格*/
    this.price = "";
    /*原价*/
    this.original = "";
    /*倒计时*/
    this.countdown = "";
}

Product.prototype = {
    bindDom: function () {
        var str = '';
        str += '<dl>';
        str += '<dt><a><img src="' + this.image + '" width="384" height="225" /></a></dt>';
        str += '<dd>';
        str += '<span><a><em>' + this.discount + '折/</em>' + this.name + '</a > </span>';
        str += '</dd>';
        str += '<dd class="price">';
        str += '<em>￥' + this.price + '</em>';
        str += '<del>￥' + this.original + '</del>';
        str += '<i>销量：' + this.countdown + '</i>';
        str += '</dd>';
        str += '</dl>';
        return str;
    },
    bindEvents: function () {

    }
};
window.onload = function () {
    var p1 = new Product();
    p1.image = 'img/boutque01_r2_c2.jpg';
    p1.discount = '4.48';
    p1.name = 'Avon雅芳小红裙套装（香体乳150ml+沐浴露150ml)';
    p1.price = '43.00';
    p1.original = '96.00';
    p1.countdown = '0天2时19分6秒';
    var p2 = new Product();
    p2.image = 'img/boutque02_r2_c2.jpg';
    p2.discount = '3.97';
    p2.name = '单子水漾优白BB霜60g单子水漾优白BB霜60g 自然色倍润型';
    p2.price = '27.00';
    p2.original = '68.00';
    p2.countdown = '0天2时19分6秒';
    var p3 = new Product();
    p3.image = 'img/boutque09_r2_c2.jpg';
    p3.discount = '2.93';
    p3.name = 'emma1997艾玛身体乳定制礼盒';
    p3.price = '146.00';
    p3.original = '499.00';
    p3.countdown = '0天2时19分6秒';
    var products = [p1, p2, p3, p1, p2, p3,p1, p2, p3];
    var str = '';
    for(var i = 0,len=products.length;i<len;i++) {
        str+= products[i].bindDom()
        console.log(str);
    }
    var container = document.getElementById("container");
    container.innerHTML = str;
}