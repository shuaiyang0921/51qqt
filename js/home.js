function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false); 
}
$(document).ready(function(){
    // var onOff = true;
    // var Onnav = true;
    // $('.menu_button').click(function(){
    //     event.stopPropagation();
    //     $(this).toggleClass("cross");
    //     if(onOff){
    //         $('.header').css("height","100%");
    //         $('.shownavs').show();
    //     }else{
    //         $('.header').css("height","auto");
    //         $('.shownavs').hide();
    //     }
    //     onOff = !onOff;
    // });
    // $('.homephoneHead_nav').click(function(){
    //     event.stopPropagation();
    //     index=$(this).index();
    //     if(Onnav){
    //         $(this).siblings(".homephoneHead_navchild").show();
    //         $(this).find('.PingFangSCMedium').css("color","#005CEF");
    //         $(this).find('.homephoneHead_navicon').css("transform","translateY(12px) rotate(180deg)");
    //     }else{
    //         $(this).siblings(".homephoneHead_navchild").hide();
    //         $(this).find('.PingFangSCMedium').css("color","#222222");
    //         $(this).find('.homephoneHead_navicon').css("transform","none");
    //     }
    //     Onnav = !Onnav;
    // });
    // $('.homephoneHead_navchild_Subhead').click(function(){
    //     event.stopPropagation();
    //     $('.homephoneHead_navchild_Subhead').css("color","#222222")
    //     $('.homephoneHead_navchild_Subhead').find('.homephoneHead_navicon').css("transform","none")
    //     index=$(this).index();
    //     $(this).css("color","#005CEF")
    //     $(this).siblings(".shownavchild_text").show();
    //     $(this).parent().siblings().find(".shownavchild_text").hide();
    //     $(this).find('.homephoneHead_navicon').css("transform","translateY(8px) rotate(180deg)");
    // });
    
    // $('.home_Solution_tabs>div').click(function(){
    //     event.stopPropagation();
    //     index=$(this).index();
    //     $('.home_Solution_tabs>div').removeClass('home_Solution_tab')
    //     $('.home_Solution_tabs>div').eq(index).addClass('home_Solution_tab')
    //     $('.home_Solution_item').removeClass('showitem')
    //     $('.home_Solution_item').eq(index).addClass('showitem')
    //     if(index==1){
    //         $('.home_Solution').css({"background":"url(./img/home41.png) no-repeat center center","background-size": "cover"});
    //     }else{
    //         $('.home_Solution').css({"background":"url(./img/home159.png) no-repeat center center","background-size": "cover"});
    //     }
    //     // $('.home_Solution_item').eq(index).show()
    //     // changenum = index
    //     // $('.homeHead_adverstyle').animate({'left':-(changenum*100)+'%'},0);
    // });
    // // $('.home_Solutionleft>div').click(function(){
    // //     event.stopPropagation();
    // //     index=$(this).index();
    // //     // $('.home_Solutionleft>div').removeClass('bgblue')
    // //     $('.home_Solutionleft>div').eq(index).addClass('bgblue').siblings().removeClass('bgblue')
    // //     // $('.home_Solution_item .home_Solution_rightwidth').not(index).css("display","none");
    // //     $('.home_Solution_item .home_Solution_rightwidth').eq(index).css("display","flex").siblings().css("display","none");
    // //     if(index==7){
    // //         console.log($('.home_Solution').css("background"))
    // //         $('.home_Solution').css({"background":"url(./img/home158.png) no-repeat center center","background-size": "cover"});
    // //         console.log($('.home_Solution').css("background"))
    // //     }else{
    // //         $('.home_Solution').css({"background":"url(./img/home159.png) no-repeat center center","background-size": "cover"});
    // //     }
    // // });
    // $('.home_Solutionleftclike>div').click(function(){
    //     event.stopPropagation();
    //     index=$(this).index();
    //     $('.home_Solutionleftclike>div').removeClass('bgblue')
    //     $('.home_Solutionleftclike>div').eq(index).addClass('bgblue')
    // });
   });