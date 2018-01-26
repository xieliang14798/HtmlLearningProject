var Cart = Class.extend({
    init: function () {
        this.products = [];
        this.sum = 0;
        this.allPrice = 0;
        this.config = {
            $cartsum: $('.cartsum'),
            $cartprice: $('#cartprice'),
            $shopping_cart: $('.shopping_cart')
        };
    },
    bindBasic: function () {
        //°ó¶¨
        this.config.$cartsum.html(this.getSum());
        this.config.$cartprice.html(this.getAllPrice());
    },
    bindList: function () {
        var str = ''
        for (var i = 0, len = this.products.length; i < len; i++) {
            str += '<div class="cart_box">'
            str += '<div class="message">'
            str += ' <div class="alert-close"> </div>'
            str += ' <div class="list_img"> <img src="' + this.products[i].images[0].small + '" class="img-responsive" alt=""/> </div>'
            str += ' <div class="list_desc"><h4><a href="#">' + this.products[i].name + '</a></h4><span class="actual">' + this.products[i].groupbuyPrice + '</span></div>'
            str += ' <div class="clearfix"></div>'
            str += '  <div class="clearfix"></div>'
            str += '  </div>'
            str += '   </div>'
        }
        this.config.$shopping_cart.html(str);
    },
    getSum: function () {
        this.sum = this.products.length;
        return this.sum;
    },
    getAllPrice: function () {
        this.allPrice = 0;
        for (var i = 0, len = this.products.length; i < len; i++) {
            this.allPrice += this.products[i].groupbuyPrice;
        }
        return this.allPrice;
    }
});