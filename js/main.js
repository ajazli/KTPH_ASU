 $(document).ready(function(){
    var journeymapback = document.getElementById("journeymapback");
    var symptomsback = document.getElementById("symptomsback");
    var riskback = document.getElementById("riskback");
    var investback = document.getElementById("investback");
    var lifemodback = document.getElementById("lifemodback");
    var dietmodback = document.getElementById("dietmodback");
    var ychBack = document.getElementById("ychBack");
    var jchBack = document.getElementById("jchBack");
    var thkhBack = document.getElementById("thkhBack");
    var bvhBack = document.getElementById("bvhBack");
    var rcchBack = document.getElementById("rcchBack");
    var sachBack = document.getElementById("sachBack");
    var slhBack = document.getElementById("slhBack");
    var demoBack = document.getElementById("demoBack");
        $(".station").mouseover(function () {
            $(this).children().removeClass('fadeout');
            $(this).children().addClass('fadein');
        });
        $(".station").mouseleave(function () {
            $(this).children().removeClass('fadein');
            $(this).children().addClass('fadeout');
        });
        $(".mapicon").mouseover(function () {
            $(this).animate({width: '+=20px'},100);
        });
        $(".mapicon").mouseleave(function () {
            $(this).animate({width: '-=20px'},100);
        });
        $("#upsize").click(function(){
            $(".resize").css("font-size", "+=5px");
        });
        $("#downsize").click(function(){
            $(".resize").css("font-size", "-=5px");
        });
        $("#cursormap").click(function(){
            $("#journeymapback").fadeToggle();
        });
        $("#map").click(function(){
            $("#journeymapback").fadeToggle();
        });
        $("#mapbtn").click(function(){
            $("#journeymapback").fadeToggle();
        });
        $("#jchBtn").click(function(){
            $("#jchBack").fadeToggle();
        });
        $("#slhBtn").click(function(){
            $("#slhBack").fadeToggle();
        });
        $("#bvhBtn").click(function(){
            $("#bvhBack").fadeToggle();
        });
        $("#rcchBtn").click(function(){
            $("#rcchBack").fadeToggle();
        });
        $("#ychBtn").click(function(){
            $("#ychBack").fadeToggle();
        });
        $("#thkhBtn").click(function(){
            $("#thkhBack").fadeToggle();
        });
        $("#sachBtn").click(function(){
            $("#sachBack").fadeToggle();
        });
        $("#symptomsbox").click(function(){
            $("#symptomsback").fadeToggle();
        });
        $("#riskbox").click(function(){
            $("#riskback").fadeToggle();
        });
        $("#investbox").click(function(){
            $("#investback").fadeToggle();
        });
        $("#lifemodbox").click(function(){
            $("#lifemodback").fadeToggle();
        });
        $("#dietmodbox").click(function(){
            $("#dietmodback").fadeToggle();
        });
        $("#demoBtn").click(function(){
            $("#demoBack").fadeToggle();
        })
        
    window.onclick = function(event) {
        
        if (event.target == ychBack) {
            $("#ychBack").fadeToggle();
        }
        else if (event.target == jchBack) {
            $("#jchBack").fadeToggle();
        }
        else if (event.target == slhBack) {
            $("#slhBack").fadeToggle();
        }
        else if (event.target == bvhBack) {
            $("#bvhBack").fadeToggle();
        }
        else if (event.target == rcchBack) {
            $("#rcchBack").fadeToggle();
        }
        else if (event.target == thkhBack) {
            $("#thkhBack").fadeToggle();
        }
        else if (event.target == sachBack) {
            $("#sachBack").fadeToggle();
        }
        else if (event.target == symptomsback) {
            $("#symptomsback").fadeToggle();
        }
        else if (event.target == riskback) {
            $("#riskback").fadeToggle();
        }
        else if (event.target == investback) {
            $("#investback").fadeToggle();
        }
        else if (event.target == lifemodback) {
            $("#lifemodback").fadeToggle();
        }
        else if (event.target == dietmodback) {
            $("#dietmodback").fadeToggle();
        }
        else if (event.target == journeymapback) {
            $("#journeymapback").fadeToggle();
        }
        else if (event.target == demoBack){
            $(demoBack).fadeToggle();
        }
     }
    var thisChapter = $(".pageBinder")[0].id
    , someVarName =""
    , langauageVariable ="";
    
    definingLanguage();
    
    $('#en').click(function(){
        someVarName ="english";
        localStorage.setItem("languageWanted", someVarName);
        definingLanguage();
    });
    
    
    $('#cn').click(function(){
        someVarName ="chinese";
        localStorage.setItem("languageWanted", someVarName);
        definingLanguage();
    });
     
     $(document.body).on("click", ".jmCloseButton", function(){
        var closeButton = $(this).parent().parent().parent().closest('div');
        $(closeButton).fadeToggle();
    })
    
    function definingLanguage (){
        langauageVariable = localStorage.getItem("languageWanted");
        if (langauageVariable == null){langauageVariable="english"};
        if (langauageVariable == "english"){
            if (jQuery.isFunction( window[thisChapter + langauageVariable] )){
                eval(thisChapter + langauageVariable +"()");
            }
            
            journeymapEnglish();
        }
        else if (langauageVariable == "chinese"){
            if (jQuery.isFunction( window[thisChapter + langauageVariable] )){
                eval(thisChapter + langauageVariable +"()");
            }
            journeymapChinese();
        }
        
    }
})
 
function pauseVideos(videoArray){
    videoArray.each(function(){
    if(!this.paused){this.pause() ;}
});
};
function playVideos(elemID, videoArray){
    var videoID = elemID;

    videoArray.each(function(){
        if (this.id == videoID ){this.play() ;} 
    });
};