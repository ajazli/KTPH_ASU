$(document).ready(function(){
    var easeContent1 = document.getElementById("easeContent1")
    , easeContent2 = document.getElementById("easeContent2")
    , easeBack = document.getElementById("easeBack");
    
    $("#easeBtn").click(function(){
        $("#easeBack").fadeToggle();
        if ( $(easeContent1).is(":hidden") ){$(easeContent2).toggle();
        $(easeContent1).toggle();}
    });
    
    $(document.body).on("click","#easeVideoButton" , function(){
        $(easeContent2).toggle();
        $(easeContent1).toggle();
        playVideos("easeVideo", $("#easeVideo"))
    });
    
    $(document.body).on("click","#easeCloseBtn", function(){
        pauseVideos($("#easeVideo"));
    })

    document.onclick=function(event){
        if (event.target == easeBack){
            $("#easeBack").fadeToggle();
            pauseVideos($("#easeVideo"));
        }
    }
});