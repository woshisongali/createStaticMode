class ListSlide {
  constructor (opt) {
    this.moveEle = document.getElementById(opt.moveId)
    this.speed = opt.speed || 10
    this.hasAnimat = false
    this.addCopy()
    this.bindMarquee()
    this.timer = null
    // this.moving()
    this.bind()
    // this.Marquee()
  }
  addCopy () {
    let parent = this.moveEle.parentNode
    let copyEle = document.createElement('ul')
    this.copyEle = copyEle
    copyEle.setAttribute('class', 'list-group')
    copyEle.innerHTML = this.moveEle.innerHTML
    parent.appendChild(copyEle)
  }
  bindMarquee () { // 采用闭包的形式挂载动画方法
    let self = this
    let ancestor = this.moveEle.parentNode.parentNode
    let ele = this.moveEle
    let copyel = this.copyEle
    this.Marquee = (function () {
      return function () {
        if ((ele.offsetWidth - ancestor.scrollLeft) <= 0 ) {
          ancestor.scrollLeft -= ele.offsetWidth
        } else {
          ancestor.scrollLeft++
          // console.log('look')
        }
      }
    })()
  }
  moving () {
    this.hasAnimat = true
    this.timer = setInterval(this.Marquee, this.speed)
  }
  bind () {
    if (!this.hasAnimat) { return }
    let self = this
    let ancestor = this.moveEle.parentNode.parentNode
    ancestor.onmouseover = function () {
      clearInterval(self.timer)
    }
    ancestor.onmouseout = function () {
      self.moving()
    }
  }
}
export default ListSlide