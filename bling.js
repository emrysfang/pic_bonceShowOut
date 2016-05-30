var bannerItem = $(".banner_item"),
    pagination = $('.pagination span'),
    timer = null,
    iNow = 0;

pagination .on('click',function(){
    var current = $(this);
    
    bannerItem.removeClass("active");
    bannerItem.eq(current.index()).addClass('active');
    
    pagination. removeClass('active');
    current.addClass('active');
});

autoPlay();

function autoPlay(){
    timer = setInterval(function(){
        iNow++;
        if(iNow>pagination.length-1){
            iNow = 0;
        }
        pagination.eq(iNow).trigger('click');
    }, 5000);
};