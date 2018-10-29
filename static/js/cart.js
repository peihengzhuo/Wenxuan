/**
 * Created by Administrator on 2017/8/7 0007.
 */
$(function(){
    refresh();
    function refresh() {

        //获取cookie中的购物车数据
        var arr = $.cookie("cart");
        if (arr) {
            arr = JSON.parse(arr);

            //先清空旧节点
            $("#list").empty();

            //如果购物车中有商品
            if (arr.length > 0) {

                //再添加新节点
                //遍历arr
                var total = 0; //总价
                for (var i=0; i<arr.length; i++) {
                    var obj = arr[i];

                    //创建节点
                    var str='<li class="select border-first">\
                        <div class="active-line">\
                        <div class="point">•</div>\
                    <div class="message">【参与满减】雅萌下单立减409元，不累计\
                    <a href="http://search.bl.com/fr/0.html?rn=6154&amp;atp=1" class="link">查看活动 &gt;</a>\
                        </div>\
                        <div class="item-price">\
                        </div>\
                        <div class="else-message"><span class="red"></span>\
                        </div>\
                        </div>\
                        <div class="item  border-last select">\
\
                        <div class="cart-table-line">\
                        <div class="chk-line"><div class="chk" onclick=" checkBox(this)">\
                        </div>\
                        </div><div class="item-box">\
                        <a target="blank" href="http://product.bl.com/1657916.html" title="YAMAN 雅萌电动射频嫩肤仪 黑色 清洁导入仪脸部按摩器 HRF-10T 日本进口">\
                        <img src="'+obj.src+'">\
                        </a>\
                        <div class="name">\
                        <i class="global"></i>\
                        <a target="blank" href="http://product.bl.com/1657916.html" title="YAMAN 雅萌电动射频嫩肤仪 黑色 清洁导入仪脸部按摩器 HRF-10T 日本进口">'+obj.detail+'</a>\
                    </div>\
                    <div class="message-line">\
                        </div></div>\
                        <div class="type-box"></div>\
                        <div class="item-price-box"><del></del><div class="price"></div>\
                    <div class="icon"><i></i></div>\
                        </div><div class="number-box"><div class="input-line"><em class="reduce disable">-</em>\
                         <input class="text"  type="text" value="'+obj.num+'"> <em class="add" onclick="upButton(this)">+</em></div>\
                         </div>\
                         <div class="price-box"><div class="price">'+obj.price+'</div></div><div class="action-box"><a class="add-favourite" href="javascript:void(0);" onclick="addFavorite(this)">移入收藏夹</a> <br>\
                        <a class="delete" href="javascript:void(0);" onclick="removeGoods(this)">删除</a>\
                        </div>\
                        </div>\
                        </div>\
                        </li>';
                    $(".cart-table-list").append(str);

                    //如果是选中的，则计算总价
                    if (obj.checked) {
                        total += obj.price * obj.num;
                    }
                }
                //显示总价
                $(".price strong").html(total);
            }
            else {
                $("#totalPrice").html(0);
                console.log("购物车中没有商品2");
            }
        }
        else {
            console.log("购物车中没有商品");
        }

    }

    //删除
    $("#list").on("click", ".delete", function(){
        //console.log("删除");
        var index = $(this).index("#list .delete");
        //console.log(index);

        //删除cookie中对应的商品
        var arr = JSON.parse($.cookie("cart"));
        arr.splice(index, 1); //删除数组arr中的第index个商品
        $.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});

        isAllCheck(); //是否全选了

        refresh(); //局部刷新界面
    })

    //+
    $("#list").on("click", ".add", function(){
        //console.log("+");
        var index = $(this).index("#list .add");

        //将cookie中对应的商品数量增加
        var arr = JSON.parse($.cookie("cart"));
        arr[index].num++;
        $.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});


        refresh(); //局部刷新节点
    })

    //-
    $("#list").on("click", ".sub", function(){
        var index = $(this).index("#list .sub");

        //将cookie中对应的商品数量减少
        var arr = JSON.parse($.cookie("cart"));
        arr[index].num--;
        if (arr[index].num < 1) {
            arr[index].num = 1;
        }
        $.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});

        refresh(); //局部刷新节点
    })

    //勾选
    $("#list").on("click", ".check", function(){
        var index = $(this).index("#list .check");

        //将cookie中对应的商品的选中状态改变
        var arr = JSON.parse($.cookie("cart"));
        arr[index].checked = !arr[index].checked;
        $.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});

        isAllCheck(); //判断是否全选了

        refresh(); //局部刷新节点
    })

    //点击全选
    $("#allCheck").click(function(){
        //console.log( $(this).prop("checked") );
        var arr = JSON.parse($.cookie("cart"));

        for (var i=0; i<arr.length; i++) {
            if ( $(this).prop("checked") ) {
                arr[i].checked = true;
            }
            else {
                arr[i].checked = false;
            }
        }
        $.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});

        refresh(); //局部刷新节点
    })


    //判断是否全选了
    isAllCheck();
    function isAllCheck(){
        var arr = JSON.parse($.cookie("cart"));
        var sum = 0;
        for (var i=0; i<arr.length; i++) {
            sum += arr[i].checked;
        }

        //全选了
        if (sum == arr.length && arr.length!=0) {
            $("#allCheck").prop("checked", true);
        }
        //没有全选
        else {
            $("#allCheck").prop("checked", false);
        }
    }

    //删除选中
    $("#deleteSelect").click(function(){

        var arr = JSON.parse($.cookie("cart"));

        var newArr = [];
        for (var i=0; i<arr.length; i++) {
            if (arr[i].checked == false) {
                newArr.push(arr[i]);
            }
        }
        $.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});

        isAllCheck(); //判断是否全选了

        refresh(); //局部刷新节点
    })

})