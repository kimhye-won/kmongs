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

    $('.favorite').click(function(){
        $(this).toggleClass('active');
    })


});