$(document).ready(function(){
    
    var rehabTeamTab=document.getElementById("rehabTeamTab")
    , drivingTab = document.getElementById("drivingTab")
    , asuIntroTab = document.getElementById("asuIntroTab")
    , nurseASTab = document.getElementById("nurseASTab")
    , ptPageNumber=1
    , otPageNumber=1
    , sltPageNumber=1
    , cmPageNumber=1
    , dNavPageNumber=1
    , equipPageNumber=1;
    
    
    $("body").on("click",".rehabTeamBar", function(){
        var therapistDescriptions = document.getElementById("rehabTeamBody").children
        , therapistOccupation = this.id +"Description"
        , therapistClass = this.id +"Class"
        , rehabTeamContent = document.getElementById("rehabTeamContent")
        , rehabTeamHeader = document.getElementById("rehabTeamHeader");
        if ($(rehabTeamTab).is(":hidden")){$(rehabTeamTab).fadeToggle();}
        
        $(therapistDescriptions).each(function(){
            if(therapistOccupation==this.id){
                if($(this).is(":hidden")){$(this).toggle();}
                if ( $(rehabTeamContent).hasClass("") ){
                    $(rehabTeamContent).addClass(therapistClass);
                }
                else{
                    $(rehabTeamContent).removeClass( $(rehabTeamContent).attr("class") );
                    $(rehabTeamContent).addClass(therapistClass);
                }
            }
            else{
                if(!$(this).is(":hidden")){$(this).toggle();}
            }
        });
    
    });
    
    $("body").on("click", ".ptDescArrow .btn", function(){
        var lolsomething = this
        , ptDescriptions = $("#ptContent").children()
        , totalDescriptionNumber = ptDescriptions.length
        , descriptionNumberText = $(".ptDescNumb")
        , teamDescArrows = $(".ptDescArrow .btn")
        , oppositeArrow="";
        
        teamDescArrows.each(function (){
            if (lolsomething.id!=this.id){
                oppositeArrow = this;
            }
        });
        
        ptPageNumber = changeNotes(ptPageNumber, totalDescriptionNumber, lolsomething, oppositeArrow);
        handleNoteChanges(ptDescriptions, "ptStuff"+ptPageNumber);
        descriptionNumberText.text( ptPageNumber+"/"+totalDescriptionNumber );
    } );
    $("body").on("click", ".otDescArrow .btn", function(){
        var lolsomething = this
        , otDescriptions = $("#otContent").children()
        , totalDescriptionNumber = otDescriptions.length
        , descriptionNumberText = $(".otDescNumb")
        , teamDescArrows = $(".otDescArrow .btn")
        , oppositeArrow="";
        
        teamDescArrows.each(function (){
            if (lolsomething.id!=this.id){
                oppositeArrow = this;
            }
        });
        
        otPageNumber = changeNotes(otPageNumber, totalDescriptionNumber, lolsomething, oppositeArrow);
        handleNoteChanges(otDescriptions, "otStuff"+otPageNumber);
        descriptionNumberText.text( otPageNumber+"/"+totalDescriptionNumber );
    } );
    
    $("body").on("click", ".sltDescArrow .btn", function(){
        var lolsomething = this
        , sltDescriptions = $("#sltContent").children()
        , totalDescriptionNumber = sltDescriptions.length
        , descriptionNumberText = $(".sltDescNumb")
        , teamDescArrows = $(".sltDescArrow .btn")
        , oppositeArrow="";
        
        teamDescArrows.each(function (){
            if (lolsomething.id!=this.id){
                oppositeArrow = this;
            }
        });
        
        sltPageNumber = changeNotes(sltPageNumber, totalDescriptionNumber, lolsomething, oppositeArrow);
        handleNoteChanges(sltDescriptions, "sltStuff"+sltPageNumber);
        descriptionNumberText.text( sltPageNumber+"/"+totalDescriptionNumber );
    } );
    
    $("body").on("click", ".cmDescArrow .btn", function(){
        var lolsomething = this
        , cmDescriptions = $("#cmContent").children()
        , totalDescriptionNumber = cmDescriptions.length
        , descriptionNumberText = $(".cmDescNumb")
        , teamDescArrows = $(".cmDescArrow .btn")
        , oppositeArrow="";
        
        teamDescArrows.each(function (){
            if (lolsomething.id!=this.id){
                oppositeArrow = this;
            }
        });
        
        cmPageNumber = changeNotes(cmPageNumber, totalDescriptionNumber, lolsomething, oppositeArrow);
        handleNoteChanges(cmDescriptions, "cmStuff"+cmPageNumber);
        descriptionNumberText.text( cmPageNumber+"/"+totalDescriptionNumber );
    } );
    
    function changeNotes(currentNumber, totalNumber, thisButton, oppButton ){
        if (thisButton.id == "right"){
            if(currentNumber < totalNumber){
                currentNumber++;
                $(oppButton).removeAttr("disabled");
                if(currentNumber == totalNumber){$(thisButton).attr("disabled",true);};
            }
            else{
                $(thisButton).attr("disabled",true)
            }
        }
        else{
            if (currentNumber != 1){
                currentNumber--;
                $(oppButton).removeAttr("disabled");
                if(currentNumber == 1 ){$(thisButton).attr("disabled",true);};
            }
            else{
                $(thisButton).attr("disabled",true);
            }
        }
        return currentNumber;
    }
    
    function handleNoteChanges(listOfThings, numberOfThing ){
        $(listOfThings).each(function(){
            var elemObject = this;
            if( elemObject.id == numberOfThing ){
                if( $(elemObject).is(":hidden") ){
                    $(elemObject).toggle();
                }
            }
            else{
                if ( !$(elemObject).is(":hidden") ){
                    $(elemObject).toggle();
                }
            }
        });
        
    };
    
    $("body").on("click", "#driveButton", function(){
        if($(drivingTab).is(":hidden")){$(drivingTab).fadeToggle();}
    });
    
     $("body").on("click", "#drivingNav .btn", function(){
        var lolsomething = this
        , dNavDescriptions = $("#drivingBody").children()
        , totalDescriptionNumber = dNavDescriptions.length
        , descriptionNumberText = $(".dNavNumb")
        , dNavDescArrows = $("#drivingNav .btn")
        , oppositeArrow="";
        
        dNavDescArrows.each(function (){
            if (lolsomething.id!=this.id){
                oppositeArrow = this;
            }
        });
        
        dNavPageNumber = changeNotes(dNavPageNumber, totalDescriptionNumber, lolsomething, oppositeArrow);
        handleNoteChanges(dNavDescriptions, "DAS"+dNavPageNumber);
        descriptionNumberText.text( dNavPageNumber+"/"+totalDescriptionNumber );
    } );
    
    $("body").on("click", ".asuIntroList li button", function(){
        var buttonId = this.id
        , asuIntroContents = document.getElementById("asuIntroBody").children;
        
        if ($(asuIntroTab).is(":hidden")){$(asuIntroTab).fadeToggle()};
        
        $(asuIntroContents).each(function(){
            if(buttonId == this.id){
                if( $(this).is(":hidden")){
                    $(this).toggle();
                }
            }
            else{
                if(!$(this).is(":hidden")){
                    $(this).toggle();
                }
            }
        })
        
    })
    
    $("body").on("click", ".equipmentNav .btn", function(){
        var lolsomething = this
        , equipDescriptions = $("#equipmentContent").children()
        , totalDescriptionNumber = equipDescriptions.length
        , descriptionNumberText = $(".equipNavNumb")
        , teamDescArrows = $(".equipmentNav .btn")
        , oppositeArrow="";
        
        teamDescArrows.each(function (){
            if (lolsomething.id!=this.id){
                oppositeArrow = this;
            }
        });
        
        equipPageNumber = changeNotes(equipPageNumber, totalDescriptionNumber, lolsomething, oppositeArrow);
        handleNoteChanges(equipDescriptions, "equipContent"+equipPageNumber);
        descriptionNumberText.text( equipPageNumber+"/"+totalDescriptionNumber );
    } );
    
    $("body").on("click", ".nurseListStyle li button", function(){
        var buttonId = this.id
        , nurseListContents = document.getElementById("nurseASBody").children;
        
        if ($(nurseASTab).is(':hidden')){$(nurseASTab).fadeToggle();}
        
        $(nurseListContents).each(function(){
            if(buttonId == this.id){
                if( $(this).is(":hidden")){
                    $(this).toggle();
                }
            }
            else{
                if(!$(this).is(":hidden")){
                    $(this).toggle();
                }
            }
        })
        
    })
    
//    this was version 1
  /* $(".close").click(function(){
        if(this.id ==1){$(asuIntroTab).fadeToggle();}
        else if(this.id ==2){$(nurseASTab).fadeToggle();}
        else if(this.id ==3){$(rehabTeamTab).fadeToggle();}
        else if(this.id ==4){$(drivingTab).fadeToggle();}
    });*/
    
//    this is version 2
    $(document.body).on("click", ".close", function(){
        var closeButton = $(this).parent().parent().parent().closest('div');
        $(closeButton).fadeToggle();
    })
    document.onclick=function(event){
        if( event.target == rehabTeamTab ){$(rehabTeamTab).fadeToggle();}
        else if(event.target == drivingTab ){$(drivingTab).fadeToggle();}
        else if(event.target == asuIntroTab){$(asuIntroTab).fadeToggle();}
        else if(event.target == nurseASTab){$(nurseASTab).fadeToggle();}
    }
    
    
});