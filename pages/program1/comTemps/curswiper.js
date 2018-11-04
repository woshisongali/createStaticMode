import Swiper from '../lib/idangerous.swiper.js'
var mySwiper = new Swiper('.swiper-container',{
  pagination: '.swiper-device .pagination',
  loop:true,
  grabCursor: true,
  paginationClickable: true
})
$('.swiper-device .arrow-left').on('click', function(e){
  e.preventDefault()
  mySwiper.swipePrev()
})
$('.swiper-device .arrow-right').on('click', function(e){
  e.preventDefault()
  mySwiper.swipeNext()
})