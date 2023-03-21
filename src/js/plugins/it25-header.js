export default function() {
  var scrollLimitShrink = 90
  var scrollLimitFull = 2
  function testUserBar() {
    // var it25_barra_utente = document.getElementsByClassName('it25-barra-utente')[0];
    // var it25_menu_principale = document.getElementsByClassName('it25-menu-principale')[0];
    // if (Dimension('it25-barra-utente') > 0) it25_menu_principale.classList.add('postUserBar')
  }
  function setSearchContainerPosition() {
    // var it25_top_bar = document.getElementsByClassName('it25-top-bar')[0];
    // var it25_barra_ist = document.getElementsByClassName('it25-barra-ist')[0];
    // var it25_search_container = document.getElementsByClassName('it25-search-container')[0];

    // var top = Dimension('it25-top-bar') + Dimension('it25-barra-ist')
    // it25_search_container.style.top = top + 'px' 
  }
  function shrinkHeader() {
    // if (document.body.scrollTop > scrollLimitShrink) {
    //   document.getElementsByClassName('it25-top-bar')[0].classList.add('shrink')
    //   document.getElementsByClassName('it-header-slim-wrapper-content')[0].style.display = "none"
    //   document.getElementsByClassName('it25-barra-ist')[0].classList.add('shrink')
    //   document.getElementsByClassName('it25-menu-principale')[0].classList.add('header-shrinked')
    // } else if (document.body.scrollTop < scrollLimitFull) {
    //   document.getElementsByClassName('it25-top-bar')[0].classList.remove('shrink')
    //   document.getElementsByClassName('it-header-slim-wrapper-content')[0].style.display = "block"
    //   document.getElementsByClassName('it25-barra-ist')[0].classList.remove('shrink')
    //   document.getElementsByClassName('it25-menu-principale')[0].classList.remove('header-shrinked')
    // }
    // setSearchContainerPosition()
  }
  function setHamburgerButton() {
    if (document.querySelector('header') && document.querySelector('header').getAttribute('class') == null) {
      document.getElementsByClassName('it25-hamburger-btn-wrapper')[0].classList.add('d-lg-none')
      return
    }
    var headerType = document.querySelector('header').getAttribute('class').split('-');
    
    if (headerType[0] == 'it25') {
      switch (headerType[1]) {
        case 'menu':
          document.getElementsByClassName('it25-hamburger-btn-wrapper')[0].classList.add('d-lg-none')
          break
        case 'sidebar':
          document.getElementsByClassName('it25-hamburger-btn-wrapper')[0].classList.add('d-md-none')
          document.getElementsByClassName('it25-btn-menu')[0].classList.add('it25-btn-sidebar')
          break
        case 'none':
          document.getElementsByClassName('it25-hamburger-btn-wrapper')[0].classList.add('d-none')
          break
        default:
          document.getElementsByClassName('it25-hamburger-btn-wrapper')[0].classList.add('d-lg-none')
      }
    } else {
      document.getElementsByClassName('it25-hamburger-btn-wrapper')[0].classList.add('d-lg-none')
    }
  }
  function initHeader() {
    setHamburgerButton()
    testUserBar()
    shrinkHeader()
  }
  function Dimension(elemClass) {
    var elmHeight, elmMargin, elm = document.getElementsByClassName(elemClass)[0];
    if(document.all) {// IE
        elmHeight = elm.currentStyle.height;
        elmMargin = parseInt(elm.currentStyle.marginTop, 10) + parseInt(elm.currentStyle.marginBottom, 10) + "px";
    } else {// Mozilla
        elmHeight = document.defaultView.getComputedStyle(elm, '').getPropertyValue('height');
        elmMargin = parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(elm, '').getPropertyValue('margin-bottom')) + "px";
    }
    return (elmHeight+elmMargin);
}

  if (!document.querySelector('bd-example')) {
    initHeader()
    document.addEventListener('scroll', shrinkHeader)
    document.addEventListener('resize', shrinkHeader)
    document.addEventListener('show.bs.collapse', setSearchContainerPosition);
  }
};
