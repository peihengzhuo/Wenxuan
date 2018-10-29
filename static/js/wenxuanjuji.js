$(function(){
	var arr=[];
	$.get("http://127.0.0.1:8020/xiangmu/json/wenxuanjuji.json", function(data){
		arr = data;
		
		for(var i =0;i<arr.length;i++){
			var obj = arr[i];
			var str ="<li>"
					+"<a href='small.html?id="+obj.id+"' target=_blank>"
					+"<img src='"+obj.img+"' />"
					+"<span>"+obj.span+"</span>"
					+"<b>￥"+obj.b+"</b>"
					+"<i>￥"+obj.i+"</i>"
					+"</a>"
					+"<div class='description'>"
					+"<a href='#'>超热美剧《双峰》官方授权的“档案小说”！大牌编剧亲自操刀，集邪典Cult、亚文化、神秘主义、邪教、凶案于一身的玄妙巨作</a>"
					+"</div>"
					+"</li>" 
			 
			$(".pic-pop1").append(str);
			 
			
			
			
		}
		
	
	})
	
})
//$(function (){
//  var arr=[];
//
//      $.get("../json/wenxuanjuji.json", function(data){
//          arr = data;
//          for(var i=0;i<arr.length;i++){
//            var obj=arr[i];
//            var str='<li>\
//                <div class="pro-img">\
//                  <a target="_blank" data_wa_type="ad" data_wa_val="pcgl_-_pcgl_als_-_2 " href="http://product.bl.com/1254080.html">\
//                  <img src="'+obj.src+'" height="200" width="200" alt="DAISO 清洁海绵 30个">\
//                  </a>\
//                  </div>\
//                  <div class="pro-name">\
//                  <a href="http://product.bl.com/1254080.html" target="_blank" title="DAISO 清洁海绵 30个">'+obj.detail+'\
//              </a>\
//              </div>\
//              <div class="pro-money">\
//                  <div class="money-fl">￥<span style="font-size:18px;">'+obj.price+'</span>\
//                  </div>\
//                  </div>\
//                  </div>\
//                  </li>';
//          $(".like_class").append(str);
//          }
//      })
//
//})

