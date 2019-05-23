 $(document).ready(function(){
     
     var strokeCausesTab = document.getElementById("strokeCausesTab")
     ,pageVideosTab = document.getElementById("videosTab")
     ,mriImageTab = document.getElementById("mriImageTab")
     ,strokeCausesContent= document.getElementById("strokeCausesBody").children
     ,strokeCausesHeading = document.getElementById("strokeCausesHeading")
     ,strokeCausesButton = document.getElementById("strokeCausesButton")
     ,videoArray=$("video")
     ,mriImageContents = document.getElementById("mriImageBody").children
     ,languageVariable ="";
     
    $(document.body).on("click", "#iStroke1" ,function(){
        $("#strokeCausesTab").fadeToggle();        
        languageVariable = localStorage.getItem("languageWanted");
        if (languageVariable == null){languageVariable="english"};
        if (languageVariable=="english"){
            $(strokeCausesHeading).text("Ischaemic Stroke");
        }
        else if (languageVariable=="chinese"){
            $(strokeCausesHeading).text("缺血性中风");
        }
        var thisID = "iStrokeBodyLayer2";
        strokeCausesButton.id = "iStroke2";
        strokeCausesButton.innerHTML="More Info";
        
        strokeCausesManagementFunction(thisID);
    });
    $(document.body).on("click", "#hStroke1" ,function(){
        $("#strokeCausesTab").fadeToggle();
        languageVariable = localStorage.getItem("languageWanted");
        if (languageVariable == null){languageVariable="english"};
        if (languageVariable=="english"){
            $(strokeCausesHeading).text("Haemorrhagic Stroke");
        }
        else if (languageVariable=="chinese"){
            $(strokeCausesHeading).text("出血性中风");
        }
        
        var thisID="hStrokeBodyLayer2";
         strokeCausesButton.id = "hStroke2";
         strokeCausesButton.innerHTML="More Info";
        
        strokeCausesManagementFunction(thisID);
        
    });
     
     $(document).on("click", "#iStroke2", function(){
         var thisID="iStrokeBodyLayer3";
         strokeCausesButton.id ="iStroke3";
         strokeCausesButton.innerHTML="Back";
         
         strokeCausesManagementFunction(thisID);
     })
     $(document).on("click", "#hStroke2", function(){
         var thisID="hStrokeBodyLayer3";
         strokeCausesButton.id ="hStroke3";
         strokeCausesButton.innerHTML="Back";
         
         strokeCausesManagementFunction(thisID);
     })
     
     $(document).on("click", "#iStroke3", function(){
         var thisID="iStrokeBodyLayer2";
         strokeCausesButton.id ="iStroke2";
         strokeCausesButton.innerHTML="More Info";
         
         strokeCausesManagementFunction(thisID);
     })
     $(document).on("click", "#hStroke3", function(){
         var thisID="hStrokeBodyLayer2";
         strokeCausesButton.id ="hStroke2";
         strokeCausesButton.innerHTML="More Info";
         
         strokeCausesManagementFunction(thisID);
     })
     
     function strokeCausesManagementFunction(elemID){
         $(strokeCausesContent).each(function(){
            if (this.id == elemID){
                if ($(this).is(":hidden")){$(this).toggle();}
            }
            else{
                if(!$(this).is(":hidden")){$(this).toggle();}
            }
        })
     }
     
     $(document.body).on("click", ".mriImageBtn" , function(){
         var imgId=this.id+"Image";
         
        $(mriImageTab).fadeToggle();
         
         $(mriImageContents).each(function(){
             if (imgId == this.id){
                 if ($(this).is(":hidden")){$(this).toggle();}
            }
            else{
                if(!$(this).is(":hidden")){$(this).toggle();}
            }
         })
         
     });
     
     
   $(".close").click(function(){
        if(this.id ==1){$(strokeCausesTab).fadeToggle();}
        else if(this.id ==2){$(pageVideosTab).fadeToggle();pauseVideos(videoArray);}
        else if (this.id ==3){$(mriImageTab).fadeToggle();}
    });
     
    
     document.onclick = function(event) {
        if (event.target == strokeCausesTab){
            $(strokeCausesTab).fadeToggle();
            strokeCausesTab.scrollTop=0;
        }
        else if (event.target == pageVideosTab) {$(pageVideosTab).fadeToggle();pauseVideos(videoArray);}
        
        else if( event.target == mriImageTab){$(mriImageTab).fadeToggle();}
     }; 
    
     $("body").on("click","#pageButton",function(){
        var h2VideosHeading = document.getElementById("videosHeading")
        , symptomsBody = document.getElementById("symptomsVideoBody")
        , recognizeBody = document.getElementById("recognizeVideoBody")
        , bolysisBody = document.getElementById("bolysisVideoBody")
        , bectomyBody = document.getElementById("bectomyVideoBody");
        $(pageVideosTab).fadeToggle();
        if($(this).hasClass("strokeSymptoms")){
            languageVariable = localStorage.getItem("languageWanted");
            if (languageVariable == null){languageVariable="english"};
            if (languageVariable=="english"){
                h2VideosHeading.innerHTML="Recognizing a Stroke";
            }
            else if (languageVariable=="chinese"){
                h2VideosHeading.innerHTML="征兆和症状";
            }
            
            decideHeader(1);
            if ($(symptomsBody).is(":hidden")){
                $(symptomsBody).toggle();
                playVideos("strokeSymptomVideo", videoArray);
            }
            else{playVideos("strokeSymptomVideo", videoArray);}
            if(!$(recognizeBody).is(":hidden")){
                $(recognizeBody).toggle();
            }
            if(!$(bolysisBody).is(":hidden")){
                $(bolysisBody).toggle();
            }
            if(!$(bectomyBody).is(":hidden")){
                $(bectomyBody).toggle();
            }
        }
        
        else if($(this).hasClass("strokeRecognize")){
            languageVariable = localStorage.getItem("languageWanted");
            if (languageVariable == null){languageVariable="english"};
            if (languageVariable=="english"){
                h2VideosHeading.innerHTML="Recognizing a Stroke";
            }
            else if (languageVariable=="chinese"){
                h2VideosHeading.innerHTML="征兆和症状";
            }
            
            decideHeader(1);
            if ($(recognizeBody).is(":hidden")){
                $(recognizeBody).toggle();
                playVideos("strokeRecognizeVideo", videoArray);
            }else{playVideos("strokeRecognizeVideo",videoArray);}
            if(!$(symptomsBody).is(":hidden")){
                $(symptomsBody).toggle();
            }
            if(!$(bolysisBody).is(":hidden")){
                $(bolysisBody).toggle();
            }
            if(!$(bectomyBody).is(":hidden")){
                $(bectomyBody).toggle();
            }
        }
        
        else if($(this).hasClass("thrombolysis")){
            languageVariable = localStorage.getItem("languageWanted");
            if (languageVariable == null){languageVariable="english"};
            if (languageVariable=="english"){
                h2VideosHeading.innerHTML="Thrombolysis Treatment";
            }
            else if (languageVariable=="chinese"){
                h2VideosHeading.innerHTML="溶栓治疗";
            }
            
            decideHeader(0);
            if ($(bolysisBody).is(":hidden")){
                $(bolysisBody).toggle();
                playVideos("strokeBolysisVideo",videoArray);
            }else{playVideos("strokeBolysisVideo",videoArray);}
            if(!$(symptomsBody).is(":hidden")){
                $(symptomsBody).toggle();
            }
            if(!$(recognizeBody).is(":hidden")){
                $(recognizeBody).toggle();
            }
            if(!$(bectomyBody).is(":hidden")){
                $(bectomyBody).toggle();
            }
        }
        
        else if($(this).hasClass("thrombectomy")){
            languageVariable = localStorage.getItem("languageWanted");
            if (languageVariable == null){languageVariable="english"};
            if (languageVariable=="english"){
                h2VideosHeading.innerHTML="Thrombectomy Treatment";
            }
            else if (languageVariable=="chinese"){
                h2VideosHeading.innerHTML="血栓切除术";
            }
            decideHeader(0);
            if ($(bectomyBody).is(":hidden")){
                $(bectomyBody).toggle();
                playVideos("strokeBectomyVideo",videoArray);
            }else{playVideos("strokeBectomyVideo", videoArray);}
            if(!$(bolysisBody).is(":hidden")){
                $(bolysisBody).toggle();
            }
            if(!$(symptomsBody).is(":hidden")){
                $(symptomsBody).toggle();
            }
            if(!$(recognizeBody).is(":hidden")){
                $(recognizeBody).toggle();
            }
        }
        
        return false;
    });

     
     function decideHeader(justNumber){
        var videosHeader = document.getElementById("videosHeader");
        if(justNumber==1){
           if(!$(videosHeader).hasClass("strokeVideosHeader")){$(videosHeader).addClass("strokeVideosHeader");}
           
           if ($(videosHeader).hasClass("thromVideosHeader")){$(videosHeader).removeClass("thromVideosHeader");}
        }
        else{
            if(!$(videosHeader).hasClass("thromVideosHeader")){$(videosHeader).addClass("thromVideosHeader");}
           
           if ($(videosHeader).hasClass("strokeVideosHeader")){$(videosHeader).removeClass("strokeVideosHeader");}
        }
    }
     
     
}); 
