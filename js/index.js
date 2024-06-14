// 頁籤
$('.tab_content').hide()
$('.tab_content').eq(0).show()
$('.tab_radio').eq(0).addClass('tab_bounce')

$('.tab_radio').each(function (i, radio) {
  $(radio).on('click', function () {
    $('.tab_content').hide()
    $('.tab_radio').removeClass('tab_bounce')
    $('.tab_content').eq(i).fadeIn()
    $('.tab_radio').eq(i).addClass('tab_bounce')
  })
})

// 輪播
$('.slick_01').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  fade: true,
  cssEase: 'ease-in',
});

// scroll事件
const msgView = function () {
  if ($(window).scrollTop() >= $('.msg_view').offset().top - window.innerHeight/2) {
    $('.msg').each(function (i, msg) {
      setTimeout(function () {
        $(msg).removeClass('msg_invisible')
      }, i*500)
    })
    $(this).off('scroll', msgView)
  }
}

const userView = function (target) {
  $(target).each(function (i, user) {
    setTimeout(function () {
      $(user).css('opacity', '1')
    }, i*500)
  })
}

const hashTag01 = function () {
  if ($(window).scrollTop() >= $('.hashtag_box').offset().top+$('.hashtag_box').height()/4-200) {
    userView('.user01')
    $(this).off('scroll', hashTag01)
  }
}
const hashTag02 = function () {
  if ($(window).scrollTop() >= $('.hashtag_box').offset().top+$('.hashtag_box').height()/2-200) {
    userView('.user02')
    $(this).off('scroll', hashTag02)
  }
}
const hashTag03 = function () {
  if ($(window).scrollTop() >= $('.hashtag_box').offset().top+3*$('.hashtag_box').height()/4-200) {
    userView('.user03')
    $(this).off('scroll', hashTag03)
  }
}

const arrowView = function () {
  if ($(window).scrollTop() >= $('.arrow_box').offset().top - window.innerHeight/2) {
    $('.arrow').css('transform', 'scale(1)')
    $(this).off('scroll', arrowView)
  }
}

const timePointView = function () {
  if ($(window).scrollTop() >= $('.timg_point_box').offset().top - window.innerHeight/2) {
    $('.timg_point').css('transform', 'rotateX(0deg)')
    $(this).off('scroll', timePointView)
  }
}

$(window).on('scroll', msgView)
$(window).on('scroll', arrowView)
$(window).on('scroll', hashTag01)
$(window).on('scroll', hashTag02)
$(window).on('scroll', hashTag03)
$(window).on('scroll', timePointView)