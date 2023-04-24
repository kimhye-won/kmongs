$(function() {

    /* 상단 고정 메뉴 */
    $(document).on('scroll', function(){
        //console.log($(this).scrollTop());
        if($(this).scrollTop() > 60) {
            $('.tab-top').addClass('sct');
            $('.content-top').addClass('sct');
        } else {
            $('.tab-top').removeClass('sct');
            $('.content-top').removeClass('sct');
        }
    });

    /* 필터링 */
    $('.cate-setting').click(function(){
        $('.filter').toggleClass('active');
    });
    $('.filter-tag01 .tag').click(function(){
        $('.filter-tag01 .tag').removeClass('active');
        $(this).addClass('active');
    });
    $('.filter-btn a').click(function(){
        $('.filter').removeClass('active');
    });
    $('.filter-tag02 .tag').click(function(){
        $('.filter-tag02 .tag').removeClass('active');
        $(this).addClass('active');
    });

    /* 하단 고정 바 */
    $('.mobile_navi ul li').click(function(){
        $('.mobile_navi ul li').removeClass('active');
        $(this).addClass('active');
    });

    /* 상단 탭 */
    $('.top_navi ul li').click(function(){
        $('.top_navi ul li').removeClass('active');
        $(this).addClass('active');
    });

    /* 카테고리 */
    $('.tabs').click(function(){
        $(this).addClass('active');
    });
    


    var swiper1 = new Swiper(".cate-swiper", {
        slidesPerView: 1.3,
        spaceBetween: 10,
    });

    var swiper2 = new Swiper(".vlog-swiper", {
        slidesPerView: 1.3,
        spaceBetween: 20,
    });

    var swiper3 = new Swiper(".shorts-swiper", {
        slidesPerView: 2.5,
        spaceBetween: 10,
    });

    var swiper4 = new Swiper(".round-swiper", {
        slidesPerView: 1.3,
        spaceBetween: 20,
    });

    var swiper5 = new Swiper(".tab-swiper", {
        slidesPerView: 6.5,
        spaceBetween: 10,
    });
    

    $('.favorite').click(function(){
        $(this).toggleClass('active');
    })

    /* my코스 */
    if( $('#my-progress').val() == 100 ){
        $('.myc-suc').css('opacity','1');
    } else {
        $('.myc-suc').css('opacity','0');
    }

    var swiper6 = new Swiper(".myc-swiper", {
        slidesPerView: 7,
        spaceBetween: 10,
        //initialSlide: 12,
        speed : 500,
    });
    
    var slideIdx = $('.myc-day ul li.active').html();

    swiper6.slideTo(slideIdx - 1, 500, false);

});