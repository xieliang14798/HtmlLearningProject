window.onload = function () {
    var product = new Product();
    product.name = 'HM休闲服登山包44';
    product.description = '棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰';
    product.normalPrice = 180
    product.groupbuyPrice = 150
    product.buySum = 300;
    product.images = [
        {small: 'images/s11.jpg', big: 'images/s11.jpg'},
        {small: 'images/s12.jpg', big: 'images/s12.jpg'},
        {small: 'images/s13.jpg', big: 'images/s13.jpg'}
    ];
    product.bindDOMDetail();
    product.bindDOMImage();

    var cart = new Cart();
    cart.bindBasic();
    cart.bindList();

    $('#btnaddcart').on("click", function () {
        cart.products.push(product);
        cart.bindBasic();
        cart.bindList();
        $(window).scrollTop(0);
    })
};
