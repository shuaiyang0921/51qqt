$(".homeHead_popUpStyle").mousemove(function(){
    // console.log(event.clientX)
    if (event.clientX<124){
        $(".homeHead_popUpStyle").css({
            "border-radius": "0px 0px 4px 4px",
            "box-shadow": "0px 8px 16px 0px rgba(0,0,0,0.04)",
            "position": "absolute",
            "top": "74px",
            "left": "0px",
            "width": "100%",
            "z-index": "10",
            "opacity": "0",
            "height": "0",
            "overflow": "hidden",
            "max-height": "20px",
            "transition": "max-height .25s ease-in-out,opacity .25s ease-in-out"

        })
    }
});
$(".hobverPopUp").mouseenter(function (){
    $(".homeHead_popUpStyle").attr("style","")
})