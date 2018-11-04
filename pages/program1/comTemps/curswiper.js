import Swiper from '../lib/idangerous.swiper.js'

function initSwiper (opt) {
  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.swiper-device .pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    autoplay: opt.autoplay || 0
  })
  $('.swiper-device .arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  })
  $('.swiper-device .arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  })
}
export default initSwiper