$(document).ready(function(){

    $('.solutions li').click(function(){
        var id = $(this).attr('data-tab');
    
        $('.solutions li').removeClass('current');
        $('.solution').removeClass('current');
    
        $(this).addClass('current');
        $("#"+id).addClass('current');
    });
    
    });