$(function () {
  // open / close navbar actions
  var openbutton = $('.custom-navbar-toggler')
  var closebutton = $('.close-div')
  var it25closebutton = $('.it25-close-div')
  var overlay = $('.overlay')
  var backbutton = $('.it-back-button')

  //-open button action
  $(openbutton).on('click', function () {
    /* Act on the event */
    var target = $(this).attr('data-target')
    var fadelayer = $(target).find('.overlay')
    $(this).attr('aria-expanded', 'true')
    $(backbutton).fadeIn()
    $(target).show()
    $(fadelayer).fadeIn()
    $(target).addClass('expanded')
    $(this).hide()
    $(it25closebutton).show()
    if ($(this).hasClass('it25-btn-sidebar')) {
      $('body,html').animate({ scrollTop: 0 }, 800)
    }
  })

  $(overlay).on('click', function () {
    var target = $(this).closest('.navbar-collapsable')
    var buttonrel = $(this).closest('.navbar').find('.custom-navbar-toggler')
    var fadelayer = $(target).find('.overlay')
    $(buttonrel).attr('aria-expanded', 'false')

    $(target).removeClass('expanded')
    $(fadelayer).fadeOut()
    $(it25closebutton).hide()
    $(openbutton).show()
    setTimeout(function() {
      $(target).hide()
    }, 300)
  })

  //-close button action
  $(closebutton).on('click', function () {
    var target = $(this).closest('.navbar-collapsable')
    var buttonrel = $(this).closest('.navbar').find('.custom-navbar-toggler')
    var fadelayer = $(target).find('.overlay')
    $(buttonrel).attr('aria-expanded', 'false')

    $(target).removeClass('expanded')
    $(fadelayer).fadeOut()
    $(it25closebutton).hide()
    $(openbutton).show()
    $(target).hide()
  })

  //-it25 close button action
  $(it25closebutton).on('click', function(event) {
    var target = $(this).find('.close-menu').attr('data-target')
    var buttonrel = $('.it25-barra-ist').find('.custom-navbar-toggler')
    var fadelayer = $(target).find('.overlay')
    $(buttonrel).attr('aria-expanded', 'false')

    $(target).removeClass('expanded')
    $(fadelayer).fadeOut()
    $(this).hide()
    $(openbutton).show()
    setTimeout(function() {
      $(target).hide()
    }, 300)
  })
})
