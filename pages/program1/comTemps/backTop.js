export default function (ele) {
  //返回顶部
	$(window).on("scroll",function(){
		var scrollTop = $(window).scrollTop();
		if( scrollTop > 500 ){
			ele.show();
		}else{
			ele.hide();
		}
	});
  ele.on('click', function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
  })
}