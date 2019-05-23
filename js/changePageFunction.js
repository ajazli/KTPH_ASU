$(document).ready(function(){ 
    var selectedValues = $(".page")
    , currentPage = 1
    , currentChapter = $(".pageBinder")[0].id
    , totalPage=selectedValues.length
    , prevButton = $(".hide")
    , nextButton = $(".show")
    , aneButtonsDiv=$("#pageButtonsDiv")
    , breadcrumbButtons = $(".breadcrumb").children();
    
    prevButton.click(function(){
        currentPage--;
        updatePages();
    });
    nextButton.click(function(){
        currentPage++;
        updatePages();
    });
    
    breadcrumbButtons.on("click",function(){
        currentPage=this.children[0].id.slice(-2);
        if (currentPage < 10){currentPage=currentPage.slice(-1);}
        updatePages();
    });
    
    updatePages();
    
    function updatePages(){
        
    if (currentPage ==1){prevButton.attr("disabled",true);nextButton.removeAttr("disabled")} 
    else if (currentPage==totalPage){nextButton.attr("disabled",true);prevButton.removeAttr("disabled");}
    else{nextButton.removeAttr("disabled");prevButton.removeAttr("disabled");}
        
    if(currentChapter == "chapterCH" && currentPage ==3  ){playVideos("myVideo", $("#myVideo"));}   
    else{
        pauseVideos($("#myVideo"));
    }
    breadcrumbButtons.each(function(){
        var breadcrumbButton =this.children[0]
        , breadcrumbArrow = this.children[1]
        , breadcrumbButtonID = breadcrumbButton.id.slice(-2);
        if (breadcrumbButtonID < 10){breadcrumbButtonID=breadcrumbButtonID.slice(-1);}
        if ( breadcrumbButtonID == currentPage){
            $(breadcrumbButton).css("background-color","red");
            $(breadcrumbArrow).css("border-left-color","red");
        }
        else{
            $(breadcrumbButton).css("background-color","");
            $(breadcrumbArrow).css("border-left-color","");
        }
    });    
        
    selectedValues.each(function(i){
        if ( this.id == currentPage && $(this).is(":hidden") ){
            $(this).toggle();
            }
        else if ( this.id != currentPage && $(this).is(":visible") ){
            $(this).toggle();
            }
        }); 
    };
});  