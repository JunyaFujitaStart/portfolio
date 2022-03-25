// オリジナルサイト画像のスライダー  
$(function() {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2750,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

/**
 * ------------------
 * イベントハンドラの登録
 * ------------------
 */
$('#top').waypoint({
  handler(direction) {
    if (direction === 'down') {
    }
    else if (direction === 'up') {
      $(this.element).addClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '-20%',
});

$('#top.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeOutDown');
    }
    else if (direction === 'up') {
      $(this.element).addClass('no-active').removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '15%',
  activeTitle: 'top',
});
 
$('#title0').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).removeClass('no-active').removeClass('fadeOutUp');
    }
    else if (direction === 'up') {
      $(this.element).addClass('fadeOutUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '15%',
});

$('#title0.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
    }
    else if (direction === 'up') {
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '30%',
  activeTitle: 'title-0',
});

/* title1 エフェクト（下→上）  */
/**
 * animatedクラスを持つ要素が画面内に入ったら
 * Animate.cssのfadeOutUpエフェクトを適用
 */
$('#title1').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).removeClass('no-active').removeClass('fadeOutUp');
    }
    else if (direction === 'up') {
      $(this.element).addClass('fadeOutUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '15%',
});

$('#title1.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
    }
    else if (direction === 'up') {
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '30%',
  activeTitle: 'title-1',
});

/* title2 エフェクト（下→上）  */

$('#title2').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).removeClass('no-active').removeClass('fadeOutUp');
    }
    else if (direction === 'up') {
      $(this.element).addClass('fadeOutUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '25%',
});

$('#title2.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
    }
    else if (direction === 'up') {
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '30%',
});

/* title3 エフェクト（下→上）  */

$('#title3').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).removeClass('no-active').removeClass('fadeOutUp');
    }
    else if (direction === 'up') {
      $(this.element).addClass('fadeOutUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '40%',
});

$('#title3.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
    }
    else if (direction === 'up') {
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '45%',
});

/* title4 エフェクト（下→上）  */

$('#title4').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).removeClass('no-active').removeClass('fadeOutUp');
    }
    else if (direction === 'up') {
      $(this.element).addClass('fadeOutUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '55%',
});

$('#title4.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
    }
    else if (direction === 'up') {
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '65%',
});

/* title5 エフェクト（下→上）  */

$('#title5').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).removeClass('no-active').removeClass('fadeOutUp');
    }
    else if (direction === 'up') {
      $(this.element).addClass('bounce');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '75%',
});

$('#title5.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp').addClass('bounce');;
    }
    else if (direction === 'up') {
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '85%',
});
