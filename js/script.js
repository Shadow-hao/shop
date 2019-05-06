// $(document).ready(function(){
//     //点击增加按钮触发事件
//         $(".plus").click(function(){
//             var num = $(this).parent().children("span");
//     //单品数量增加
//             num.text(parseInt(num.text())+1);
//     //商品总数增加
//             var totalNum = parseInt($(".totalNum").text());
//             totalNum++
//             $(".totalNum").text(totalNum);
//     //计算总价
//             var goods_price = parseInt($(this).parent().parent().children(".goods_price").text());
//             $(".totalPrice").text(parseInt($(".totalPrice").text())+goods_price);
//         })    
$(document).ready(function () {
            //点击增加按钮触发事件
           $(".plus").click(function(){
               
            var num = $(this).parent().children("span");
          //  单品数量增加
             num.text(parseInt(num.text())+1);
             //商品总数增加
          
           var totalNum = parseInt($(".totalNum").text());
           totalNum++;
             $(".totalNum").text(totalNum);
            var p = $(this).parent().parent().parent().children('.am-u-sm-3').children(".goods_price").text();
         
              //计算总价
            var goods_price = parseFloat(p.substring(1));
            $count=parseFloat($(".totalPrice").text()) ;
            $count = ($count + goods_price).toFixed(2); 
            $(".totalPrice").text(parseFloat($count));
            console.log(goods_price);
            console.log($count)
           // console.log( $(".totalPrice").text(parseFloat($(".totalPrice").text())+goods_price));
           })
        });