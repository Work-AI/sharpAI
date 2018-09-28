$(function(){
    /*跳转到首页 */
    $("#Home_page").click(function(){
        location.href = "../html/sharp-index.html";
    })
    
    /**
     * 解决鼠标炫富在a标上上出现下划线问题
     */
    $("#navigation-ul li").hover(function(){
        $(this).find("a").css("text-decoration","none")
    },function(){
        $(this).find("a").css("text-decoration","none")
    })

    
    /*渲染菜单栏 */
    $("#navigation-ul li").click(function(){
        $(this).addClass("background");
        $(this).siblings().removeClass("background");
        $(this).find("a").css("color","#fff")
        $(this).siblings().find("a").css("color","rgb(75,75,75)");  
    })
    
    $(".bg-lite").click(function(){
        $("body").css("background","#d9dbdd"); 
    });
    
    $(".bg-dark").click(function(){
        $("body").css("background","#222222"); 
    });
    

})