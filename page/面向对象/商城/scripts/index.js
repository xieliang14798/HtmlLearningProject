window.onload = function () {
    var product = new Product();
    product.name = 'HM���з���ɽ��44';
    product.description = '�����ģ������ģ���ɽһ��������һ������ã��Һã���Ҳ�ã�̫���ˣ�һ�����������������';
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
