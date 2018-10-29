$(function(){
				
				 
				
//				[{"id":203,"img":"images/ss3.jpg","b":"￥33.0",
//				"h1":"收藏家 精装 斯蒂芬金 雨果奖尼尔盖曼推荐 正版畅销外国文学惊悚悬疑小说约翰福尔斯书籍典藏版法国中尉的女人作者成名作",
//				"checked":true,"num":3}]

				refresh();
				function refresh() {
					 
					//获取cookie中的购物车数据
					//console.log(1)
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
								var li = $("<li></li>").appendTo("#list");
								
								if (obj.checked) {
									$("<input class='check' type='checkbox' checked='checked' />").appendTo(li);
								}
								else {
									$("<input class='check' type='checkbox' />").appendTo(li);
								}
								
								$("<img src="+ obj.img +" />").appendTo(li);
								$("<span>"+ obj.h1 +"</span>").appendTo(li);
								$("<span>" + obj.b +"</span>").appendTo(li);
								$("<input class='sub' type='button' value='-' />").appendTo(li);
								$("<input class='num' type='text' value="+ obj.num +" />").appendTo(li);
								$("<input class='add' type='button' value='+' />").appendTo(li);
								$("<a class='delete' href='javascript:;'>删除</a>").appendTo(li);
								
								//如果是选中的，则计算总价
								if (obj.checked) {
									total += obj.b * obj.num;
								}
							}
							//显示总价
							$("#totalPrice").html(total);
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
				
				$(".continue").click(function(){
					
					location.href = "index.html"
					
				})
				
			})