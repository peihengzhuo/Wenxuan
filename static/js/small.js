$(function(){
				
				//等比公式
				//小图width/大图width == 小区域width/大区域width
				$("#smallArea").width( $("#smallImg").width() * $("#bigArea").width() / $("#bigImg").width() );
				$("#smallArea").height( $("#smallImg").height() * $("#bigArea").height() / $("#bigImg").height() );
				
				//放大系数
				var scale = $("#bigImg").width() / $("#smallImg").width();
				
				//在小图中移动
				$("#smallImg").mousemove(function(e){
					$("#smallArea").show(); //显示小区域
					$("#bigArea").show(); //显示大区域
					
					
					var x = e.pageX - $("#smallImg").offset().left - $("#smallArea").width()/2;
					var y = e.pageY - $("#smallImg").offset().top - $("#smallArea").height()/2;
					
					//控制不超出左右边界
					if (x < 0){
						x = 0;
					}
					else if (x > $("#smallImg").width()-$("#smallArea").width()){
						x = $("#smallImg").width()-$("#smallArea").width();
					}
					//控制不超出上下边界
					if (y < 0){
						y = 0
					}
					else if (y > $("#smallImg").height()-$("#smallArea").height()) {
						y = $("#smallImg").height()-$("#smallArea").height();
					}
					
					//小区域移动
					$("#smallArea").css({left:x, top:y});
					
					//大图移动
					$("#bigImg").css({left: -scale*x,top: -scale*y});
				})
				
				//移除小图
				$("#smallImg").mouseleave(function(){
					$("#smallArea").hide(); //隐藏小区域
					$("#bigArea").hide(); //隐藏大区域
				})
				
				
			
				
				
			      //获取传过来的id
			        var params = location.search;
			        // console.log(params); //?id=1
			
			        var id = fn(params, "id");
			        // console.log(id);
			         
			
			        // 
			        var arr=[];
			        $.get("http://127.0.0.1:8020/xiangmu/json/wenxuanjuji.json", function(d){
			            var arr = d;
			            for (var i=0; i<arr.length; i++) {
			                var obj = arr[i];
			                // console.log(obj.id,id);
			                if (obj.id == id) {
			                    fn2(obj);
			                   }
			               }
			            function fn2(obj){
//			            	console.log( JSON.stringify(obj) );
			
				            $(".pic-pop1 li a img").attr("src", obj.img);
				             $("p").eq(0).html(obj.name);
				             $("p").eq(1).html(obj.unit + obj.price);
				        	}
			            /*加减号*/
	
						var $down = $('.reduce-btn');
						var $txt = $('.buy-much');
						var $up = $('.add-btn');
						
						var num = 1;
						$down.click(function() {
						
							if(num == 1) {
								
								return "";
							}else{
								num--;
						
							
							}
							$txt.val(num);
						})
						
						$up.click(function() {
							num++;
							$txt.val(num);
						})
					
					
                    $("#cart").click(function(){
                        //存取商品详情
                        //点击的商品
	                    var obj2={
						        id:obj.id,
						        img:obj.img,
						        b:obj.b,
						        h1:obj.h1,
						        
						        checked:true
						}

                        
//						console.log(obj2)

                        //将当前的商品对象加入cookie购物车
                        var goodsArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
                        
                        
                        var isExist = false; //默认cookie中不存在和我当前点击的相同商品
                        for (var i=0; i<goodsArr.length; i++) {
                            if (goodsArr[i].id == obj.id) {
                                goodsArr[i].num+=parseInt($(".buy-much").val()); //数量加1
                                isExist = true; //说明存在相同的
                                
							$('.num').val(goodaArr[i].num);
                            } 
                        }
                        if (isExist == false){
                            obj2.num = 1;
                            obj2.checked = true; //默认是选中的
                            goodsArr.push(obj2);
                        }

                        $.cookie("cart", JSON.stringify(goodsArr), {expires:30, path:"/"});
                        console.log( $.cookie("cart") );
                        
	 					location.href = "gouwuche.html"
                       
                    })
			      
			        })
			
			        
			
			        //得到指定的某个参数
			        function fn(params, id){
			            // ?id=102&name=zhang&pwd=123456
			            params = params.substring(1); //id=102&name=zhang&pwd=123456
			            var arr = params.split("&");
			            for (var i=0; i<arr.length; i++) {
			                var str = arr[i]; //"id=102" , name=zhang, pwd=123456
			                var arr2 = str.split("=");
			                if (arr2[0] == id) {
			                    return arr2[1];
			                }
			            }
			            return "";
			        }
			
			  
				
				  
})






	
  