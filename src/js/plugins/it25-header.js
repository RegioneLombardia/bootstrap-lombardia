$(function () {
  var scrollLimitShrink = 90
  var scrollLimitFull = 2
  function testUserBar() {
    if ($('.it25-barra-utente').outerHeight(true) > 0) $('.it25-menu-principale').addClass('postUserBar')
  }
  function setSearchContainerPosition() {
    var top = $('.it25-top-bar').outerHeight(true) + $('.it25-barra-ist').outerHeight(true)
    $('.it25-search-container').css({ top: top + 'px' })
  }
  function shrinkHeader() {
    if ($(document).scrollTop() > scrollLimitShrink) {
      $('.it25-top-bar').addClass('shrink')
      $('.it-header-slim-wrapper-content').hide()
      $('.it25-barra-ist').addClass('shrink')
      $('.it25-menu-principale').addClass('header-shrinked')
    } else if ($(document).scrollTop() < scrollLimitFull) {
      $('.it25-top-bar').removeClass('shrink')
      $('.it-header-slim-wrapper-content').show()
      $('.it25-barra-ist').removeClass('shrink')
      $('.it25-menu-principale').removeClass('header-shrinked')
    }
    setSearchContainerPosition()
  }
  function setHamburgerButton() {
    if ($('header').attr('class') == null) {
      $('.it25-hamburger-btn-wrapper').addClass('d-lg-none')
      return
    }
    var headerType = $('header').attr('class').split('-')
    if (headerType[0] == 'it25') {
      switch (headerType[1]) {
        case 'menu':
          $('.it25-hamburger-btn-wrapper').addClass('d-lg-none')
          break
        case 'sidebar':
          $('.it25-hamburger-btn-wrapper').addClass('d-md-none')
          $('.it25-btn-menu').addClass('it25-btn-sidebar')
          break
        case 'none':
          $('.it25-hamburger-btn-wrapper').addClass('d-none')
          break
        default:
          $('.it25-hamburger-btn-wrapper').addClass('d-lg-none')
      }
    } else {
      $('.it25-hamburger-btn-wrapper').addClass('d-lg-none')
    }
  }
  function initHeader() {
    setHamburgerButton()
    testUserBar()
    shrinkHeader()
  }
  if (!$('.bd-example')[0]) {
    initHeader()
    $(window).on('scroll', shrinkHeader)
    $(window).on('resize', shrinkHeader)
    $('.it-search-wrapper').on('show.bs.collapse', setSearchContainerPosition)
  }
})
