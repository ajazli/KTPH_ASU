$(document).ready(function(){
    $('.content').load('intro.html');
   attachPageLinks();
});


function attachPageLinks(){
    $('* .pageLink').click(function(){
    var page = $(this).attr('href');
    $('.content').load(page);
    return false;
});
}

