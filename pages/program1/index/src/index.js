import '../../comTemps/base.styl'
import '../../comTemps/index.styl'
import '../../comTemps/swiper.styl'
import '../assets/index.styl'
import '../../comTemps/curswiper.js'
import ListSlide from '../../comTemps/listSlide.js'

function pageInit () {
  let slide1 = new ListSlide({moveId: 'moveGoup', speed: 10})
}
pageInit()