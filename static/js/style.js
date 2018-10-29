//轮播
//onload = function(){
//				
//				var obox = document.getElementById("box");
//				var olist = document.getElementById("list");
//				var aLi = olist.getElementsByTagName("li");
//				var olist2 = document.getElementById("list2");
//				var aLi2 = olist2.getElementsByTagName("li");
//				
				
//				
//				var size = aLi.length
//				//将第一个li显示
//				aLi[0].style.display = "block";
//				
//				//自动轮播
//				
//				var i = 0;
//				
//				var timer = setInterval( function(){
//					i++;
//					move()
//					
//				},2000 )
//				
//				function move(){
//					
//					if(i>=5){
//						i = 0;
//					}
//					if(i<0){
//						i = 4;
//					}
//					
//					for(var j =0;j<aLi.length;j++){
//						aLi2[j].className = ""						
//						if (j == i){
//							
//								aLi[i].style.display="block"
//							
//							aLi2[i].className = "active"
//						}
//						else {
//							//console.log(aLi[j])
//							
//								aLi[j].style.display="none"
//							
//						}
//					} 
//				}  
//				
//				//移入事件ali2deli
//				for(var j = 0;j<aLi2.length;j++){
//					aLi2[j].index = j
//					aLi2[j].onmouseenter = function(){
//						i = this.index;
//						move();
//					}
//					
//				}
//				
//				//移入盒子关闭定时器
//				obox.onmouseenter = function(){
//					
//					clearInterval(timer);
//			
//					
//				}
//				obox.onmouseleave = function(){
//					
//					timer = setInterval( function(){
//						i++;
//						move()
//						
//					} ,2000)
//				}
//				 
//				
//
//				
//
//
////轮播
//				
//			}
	$(function(){
				
				//先获取轮播图的数据
				$.get("json/lunbotu1.json", function(data){
					//console.log(d);  
				
					var arr = data; 
					var lis="";
					var lis2=""
					for (var i=0; i<arr.length; i++) {
						
						lis+="<li style='background:url("+arr[i].img+")center'></li>" 
//						$("<li></li>").appendTo("#list1");
//						var li = $("<li>"+ (i+1) +"</li>").appendTo("#list2");
//						$("#list1 li").css("background","url("+obj.img +")")
						
lis2+="<li style='background:url("+arr[i].img2+")'></li>"
						
							
						
					}
					
					$("#list1").append(lis)
					$("#list2").append(lis2)
					$("#list2 li").first().addClass("active");
					//轮播
					lunbo();
				})
				
				//jq轮播图
				function lunbo(){
					
					var list1 = $("#list1");
					var list2 = $("#list2");
					var li1 = $("#list1 li");
					var li2 = $("#list2 li");
					li1.eq(0).show().siblings().hide();
					//复制第一张图到最后
//					li1.first().clone(true).appendTo(list1);
					
					//
					var size = $("#list1 li").size();
					
					 
					//开启定时器
					var i = 0;
					var timer = setInterval(function(){
						i++;
						move();
					}, 2000);
					
					function move(){
						if (i == size) {
							i=0;
						}
						li1.eq(i).stop().css("display","block").siblings().stop().css("display","none");
						li2.eq(i).addClass("active").siblings().removeClass("active");
						
					}
					
					
					
					li2.mouseenter(function(){
						i = $(this).index();
						move();
					})
					
					$("#banner").hover(function(){
						clearInterval(timer);
					}, 
					function(){
						timer = setInterval(function(){
							i++;
							move();
						}, 2000);
					})
				}
				
			})