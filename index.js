AOS.init();


$('.header-btn').on('click', function(){
  $(".header-nav-list").toggleClass("active");
  $(".top-line, .cnt-line, .btm-line").toggleClass("open");
});

$(".swiper-slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 2000,
  dots: true,
  swipe:true,
  swipeToSlide: true,
  });




//トップへ戻るボタン

// 変数宣言と代入
var pageTop = $(".arrow");
// ボタン非表示
pageTop.hide();


// 80pxスクロールしたらボタン表示
$ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
    // 0.3秒でフェードイン
    pageTop.fadeIn(300);
} else {
    // 0.3秒でフェードアウト
    pageTop.fadeOut(300);
}
});
// ページトップへ戻る
$('.arrow').click(function () {
	$('body,html').animate({
			scrollTop: 0//ページトップまでスクロール
	}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
	return false;//リンク自体の無効化
});
