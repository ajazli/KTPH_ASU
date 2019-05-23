$(document).ready(function(){
    
    $('.adjustThis li').on('click',function(){
        var listID = this.id +'Content'
        , listElem = this
        , listOfContent = document.getElementById('rehabContent').children
        , listOfLiElem = document.getElementById('homeListContainer').children;
        
        $(listOfContent).each(function(){
            if (listID==this.id){
                if($(this).is(':hidden')){$(this).toggle();}
            }
            else{
                if(!$(this).is(':hidden')){$(this).toggle();}
            }
        });
        
        $(listOfLiElem).each(function(){
            if (listElem.id == this.id){
                if ( !$(this).hasClass('selected') ){$(this).addClass('selected')}
            }
            else{
                if ( $(this).hasClass('selected')){$(this).removeClass('selected')}
            }
            
        })
        
    });
    
    
    
    
    
    
});