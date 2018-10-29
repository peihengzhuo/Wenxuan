$(function(){
				
				var params = location.search;
				//console.log(params); //?id=102
				
				var id =  fn(params, "id");
				//console.log(id);
				
				//http://127.0.0.1:8020/xiangmu/json/wenxuanjuji.json
				$.get("http://127.0.0.1:8020/xiangmu/json/wenxuanjuji.json", function(d){
					var arr = d;
					for (var i=0; i<arr.length; i++) {
						var obj = arr[i]; 
						if (obj.id == id) {
							fn2(obj);
						}
					}
				})
				
				function fn2(obj){
					console.log( JSON.stringify(obj) );
					
					$("img").attr("src", obj.img);
					$("p").eq(0).html(obj.name); 
					$("p").eq(1).html(obj.unit + obj.price); 

					var str1 = "<div id='smallImg'>"
								+"<img src='"+obj.smallImg+"' />"
								+"<div id='smallArea'></div>"
								+"</div>"
								+"<div id='bigArea'>"
								+"<img src='"+obj.bigImg+"' id='bigImg'/>"
						 		+"</div>"
								+"<div class='rit_title'>"
								+"<h1>"+obj.h1+"</h1>"
							+"<h3>"+obj.h3+"</h3>"
								+"</div>"
							$("#smallImg").find("img").attr("src",obj.smallImg)	
							
							$("#bigArea").find("#bigImg").attr("src",obj.bigImg)	
							//$("#smallImg").find("img").attr("src",obj.smallImg)	
							$(".rit_title").find("h1").html(obj.h1)
							$(".rit_title").find("h3").html(obj.h3)	
							$(".wxjia").find(".price").html(obj.b)
							
				} 
				
				
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