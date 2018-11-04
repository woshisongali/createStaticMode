import '../../comTemps/base.styl'
import '../../comTemps/index.styl'
import '../../comTemps/swiper.styl'
import '../assets/index.styl'
import {isMobile} from '../../comTemps/base.js'
import initSwiper from '../../comTemps/curswiper.js'
import ListSlide from '../../comTemps/listSlide.js'
import backTop from '../../comTemps/backTop.js'

function pageInit () {
  initSwiper({autoplay: 5000})
  let slide1 = new ListSlide({moveId: 'moveGoup', speed: 10})
  backTop($('.back-icon'))
  if (isMobile()) {
    $('.arrow-group').hide()
  }
}
pageInit()