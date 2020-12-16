
$(function (){
    //1.全选和取消全选
    $(".checkAll").click(function (){
        if($(this).attr("checked")){
            //修改为取消选中
            $(this).removeAttr("checked")
                .attr("src","../images/cart/product_normal.png")

            $(".checkItem").removeAttr("checked")
                .attr("src","../images/cart/product_normal.png")
        }else {
            $(this).attr("checked", "true")
                .attr("src","../images/cart/product_true.png")

            $(".checkItem").attr("checked", "true")
                .attr("src","../images/cart/product_true.png")
        }
    })

    //2.反选
    $(".checkItem").click(function (){
        if($(this).attr("checked")){
            $(this).removeAttr("checked")
                .attr("src","../images/cart/product_normal.png")
        }else {
            $(this).attr("checked", "true")
                .attr("src","../images/cart/product_true.png")
        }

        //被选中的商品数量等于商品元素的个数 则全选
        if($(".checkItem[checked]").length == $(".checkItem").length){
            //全选
            $(".checkAll").attr("checked", "true")
                .attr("src","../images/cart/product_true.png")
        }else {
            $(".checkAll").removeAttr("checked")
                .attr("src","../images/cart/product_normal.png")
        }

        //3.加减数量
        $(".plus").click(function (){
            console.log("点击了")
            var value = $(this).prev().val()
            value++
            $(this).prev().val(value)
            //价格的联动 单价*数量 修改总金额

        })

        $(".minus").click(function (){
            console.log("点击了")
            var value = $(this).next().val()
            if (value > 1){ value -- }
            $(this).next().val(value)
        })

    })







})