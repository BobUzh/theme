var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.menu-week .iten-tab-title').click(function(){
    $(this).toggleClass('active');
    $(this).closest('.iten-tab').find('.iten-tab-content').toggleClass('active');
});

$('.nutrients-content .item-tab-title').click(function(){
    $(this).toggleClass('active');
    $(this).closest('.item-tab').find('.item-tab-content').toggleClass('active');
});

$('.menu-page-how-it-works .tabs .tab-item-title').click(function(){
    $(this).toggleClass('active');
    $(this).closest('.tab-item').find('.tab-item-content').toggleClass('active');
});

$('.menu-page-how-it-works .container').attr('id','how-it-works');
$('.menu-page-section-menu .container').attr('id','daily-sample-menu');
$('.menu-week .container').attr('id','weekly-sample-menu');
$('.menu-nutrients .container').attr('id','key-nutries');
$('.menu-page-ingridients .container').attr('id','ingredient-highlights');

//main blog
$('.blog-page-featured-posts-item:nth-child(3)').addClass('other-column');
$('.blog-page-featured-posts-item:nth-child(2)').addClass('other-column');
$('.blog-page-featured-posts-item:first-child').addClass('left-column');
$( ".blog-page-featured-posts-item.other-column" ).wrapAll( "<div class='main-right-column' />");


$('.article-bottom a:contains(main)').addClass('hidden');
$('.custom-blog-tags-list a:contains(main)').addClass('hidden');
$('.article-cart-bottom a:contains(main)').addClass('hidden');
$('.main-article-tags a:contains(main)').addClass('hidden');



//blog
$('.custom-blog-tags-list a').each(function () {
  let linkBtn = $(this).attr('href');
  let mainCurrent = $('.main-page-link').attr('href');
  let pageLink = $(location).attr("href");

  if(window.location.href.indexOf(linkBtn) > -1) {
    $(this).addClass('active');
  }
  
})

if ($(window).width() < 1300){
   $('.custom-blog-tags-list').addClass('swiper'); 
   $('.custom-blog-tags-list-wrap').addClass('swiper-wrapper'); 
   $('.blog-select-link').addClass('swiper-slide'); 

     var swiper1 = new Swiper(".custom-blog-tags-list", {
      slidesPerView: 5.9,
        spaceBetween: 0,
      // autoplay: {
      //   delay: 1500,
      //   disableOnInteraction: false,
      // },
         breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2.5,
                spaceBetween: 0,
                slideToClickedSlide: true,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 0,
                slideToClickedSlide: true,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4.5,
                spaceBetween: 0,
      
            }
        }
    });
  
}










