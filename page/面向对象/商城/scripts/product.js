var Product = Class.extend({
    init: function () {
        this.name = '';
        this.description = '';
        this.normalPrice = 0;
        this.groupbuyPrice = 0;
        this.buySum = 0;
        this.image = [];
        this.config = {
            $etalage: $('#etalage'),
            $dropdownlist: $('.dropdownlist'),
            $pname: $('#pname'),
            $description: $('#description'),
            $price: $('#price'),
            $groupPrice: $('#groupPrice'),
            $buyCount: $('#buyCount')
        };
    },
    bindDOMImage: function () {
        var str = ''
        for (var i = 0, len = this.images.length; i < len; i++) {
            str += '<li>'
            str += '<img class="etalage_thumb_image" src="' + this.images[i].small + '" class="img-responsive" />'
            str += '<img class="etalage_source_image" src="' + this.images[i].small + '" class="img-responsive" />'
            str += '</li>'
        }
        this.config.$etalage.html(str)

        /*jquery插件实现的幻灯片特效*/
        this.config.$etalage.etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,
            show_hint: true,
            click_callback: function (image_anchor, instance_id) {
                alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
            }
        });
        // This is for the dropdown list example:
        this.config.$dropdownlist.change(function () {
            etalage_show($(this).find('option:selected').attr('class'));
        });
    },
    bindDOMDetail: function () {
        /*绑定元素*/
        this.config.$pname.html(this.name);
        this.config.$description.html(this.description);
        this.config.$price.html(this.normalPrice);
        this.config.$groupPrice.html(this.groupbuyPrice);
        this.config.$buyCount.html(this.buySum);
    }
});