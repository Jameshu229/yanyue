/**
 * Created by hp-pc on 2015/3/23.
 */
$(document).ready(function(){
    //alert("aaaa")
    //随机得到一张图片
     var id=(parseInt(Math.random()*16)*1).toString();
    //定义一个数组存储数据
     var names =new Array("才人","常在","德妃","瑞妃","妃","贵妃","贵人","皇后","皇太后","惠嫔","良妃","女皇","嫔","淑妃","太后","贤妃");
     var money=(10+parseInt(Math.random()*90)*1);
    //匹配输入的值是否为中文
     var nameReg = /^[\u4e00-\u9fa5]+$/;
//    var ln="//'/abc/'//";
    $("#login").hover(function(){
       $(this).addClass("red");
  } );
 $('#cancel').click(function(){
     //的到用户输入的值
     var chinese=$("#name").val();
     if(!nameReg.test(chinese) ){
        alert('请正确输入姓名！！');
         return;
     }
         $('#login').hide();
       //得到玩家输入的姓名
        //$("#girl").css("background-image","url(./imgs/"+id+".jpg)");
        $("#girl").css("background-image","url(./imgs/name/"+id+".jpg)");
         $("#word1").html('今冊封<br/><span id="mingzi">'+$("#name").val()+'</span><br/>為<br/><span id="zhicheng">'+names[id]+'</span>');
     $("#word6").text(money);
     //获取测试者姓名，并输出

/*        $("#word2").text($("#name").val())
       //得到测试的结果并输出到页面
        $("#word4").text(names[id])
        $("#word4").show()*/

    });
    $('#shangyin').click(function(){
        alert("已经进入！！")

    });
//        document.write(ln.length);
});