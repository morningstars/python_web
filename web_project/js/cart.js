$(function () {
    //1.全选和取消全选
    $(".checkAll").click(function () {
        if ($(this).attr("checked")) {
            //修改为取消选中
            $(this).removeAttr("checked")
                .attr("src", "../images/cart/product_normal.png")

            $(".checkItem").removeAttr("checked")
                .attr("src", "../images/cart/product_normal.png")
        } else {
            $(this).attr("checked", "true")
                .attr("src", "../images/cart/product_true.png")

            $(".checkItem").attr("checked", "true")
                .attr("src", "../images/cart/product_true.png")
        }
        sum()
    })

    //2.反选
    $(".checkItem").click(function () {
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked")
                .attr("src", "../images/cart/product_normal.png")
        } else {
            $(this).attr("checked", "true")
                .attr("src", "../images/cart/product_true.png")
        }

        //被选中的商品数量等于商品元素的个数 则全选
        if ($(".checkItem[checked]").length === $(".checkItem").length) {
            //全选
            $(".checkAll").attr("checked", "true")
                .attr("src", "../images/cart/product_true.png")
        } else {
            $(".checkAll").removeAttr("checked")
                .attr("src", "../images/cart/product_normal.png")
        }
        sum()
    })


    //3.加减数量
    $(".plus").click(function () {
        var value = $(this).prev().val()
        value++
        $(this).prev().val(value)

        getTotalPrice($(this), value)
        sum()

    })

    $(".minus").click(function () {
        var value = $(this).next().val()
        if (value > 1) {
            value--
        }
        $(this).next().val(value)
        getTotalPrice($(this), value)
        sum()
    })

    function getTotalPrice(that, value) {
        //价格的联动 单价*数量 修改总金额
        var price = that.parents(".item").find(".gPrice p").html().substr(1)
        var totalPrice = price * value
        that.parent().next().html("￥" + totalPrice.toFixed(2))
    }

    //4.删除商品
    $(".item .action").click(function () {
        $(this).parents(".item").remove()
        sum()
    })

    //5.总价格和总数量的联动
    function sum() {
        console.log("调用sum()")
        var num = 0
        var price = 0
        $(".checkItem[checked]").each(function () {
            var n = $(this).parents(".item").find(".gCount input").val()
            var p = $(this).parents(".item").find(".gSum").html().substr(1)

            num += Number(n)
            price += Number(p)

            console.log(num)
            console.log(price)
        })
        $("#total-num").html(num)
        $("#total-price").html(price.toFixed(2) + "元")
    }

})