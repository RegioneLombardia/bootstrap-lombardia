export default function () {
  function setIconBurger() {
    var hamButtonIcon = document.getElementById('btn-hamburger').querySelector('svg').querySelector('use')
    var newIcon
    if (hamButtonIcon.getAttribute('xlink:href').includes('it-burger')) {
      newIcon = hamButtonIcon.getAttribute('xlink:href').replace('it-burger', 'it-close-big')
      hamButtonIcon.setAttribute('xlink:href', newIcon)
      document.getElementById('btn-hamburger').setAttribute('aria-label', 'Chiudi menù')
    } else {
      newIcon = hamButtonIcon.getAttribute('xlink:href').replace('it-close-big', 'it-burger')
      hamButtonIcon.setAttribute('xlink:href', newIcon)
      document.getElementById('btn-hamburger').setAttribute('aria-label', 'Apri menù')
    }
  }

  function clickMenuVert() {
    var x = document.getElementById('it25-menu-vert')
    if (x.style.display === 'block') {
      x.style.display = 'none'
    } else {
      resizeMenuVert()
      x.style.display = 'block'
    }
    setIconBurger()
  }

  function initMenuVert() {
    if (document.getElementById('it25-menu-vert')) {
      window.addEventListener('scroll', resizeMenuVert)
      window.addEventListener('resize', resizeMenuVert)
      document.getElementById('btn-hamburger').addEventListener('click', clickMenuVert)
    } else if (document.getElementById('it25-main-nav')) {
      document.getElementById('btn-hamburger').addEventListener('click', setIconBurger)
      document.getElementById('it25-main-nav').addEventListener('show.bs.collapse', function () {
        window.scrollTo(0, 0)
      })
    }
  }

  function resizeMenuVert() {
    let height = 0
    const topbarHeight = document.getElementsByClassName('it25-top-bar')[0].offsetHeight
    const breakpoint = getComputedStyle(document.documentElement).getPropertyValue('--it-grid-breakpoint-lg').replace('px', '')
    if (window.scrollY > topbarHeight) {
      if (window.innerWidth > breakpoint) {
        document.getElementById('header-nav-wrapper').style.height = 'unset'
      } else {
        document.getElementById('header-nav-wrapper').style.height = ''
      }
      height = window.innerHeight - document.getElementById('header-nav-wrapper').offsetHeight
    } else {
      document.getElementById('header-nav-wrapper').style.height = ''
      height = window.innerHeight - document.getElementById('header-nav-wrapper').offsetHeight - topbarHeight
    }
    document.getElementById('it25-menu-vert').style.setProperty('--it25-menuvert-height', height)
  }

  function initCloning() {
    if (document.getElementsByClassName('it-header-sticky').length > 0) {
      const headerCenter = document.getElementsByClassName('it-header-center-wrapper')[0]
      if (headerCenter.classList.contains('it25-header-sidebar') || headerCenter.classList.contains('it25-header-menu-vert')) {
        return
      }
      if (!document.getElementsByClassName('it25-menu-orizzontale')[0]) {
        headerCenter.classList.add('no-menu')
        return
      }
      const brandWrapper = headerCenter.getElementsByClassName('it-brand-wrapper')[0].cloneNode(true)
      if (brandWrapper.getElementsByClassName('it25-header-logo').length > 0) {
        if (brandWrapper.getElementsByClassName('it-brand-text').length > 0) {
          brandWrapper.getElementsByClassName('it-brand-text')[0].classList.add('d-none')
        }
      }
      let searchWrapper
      if (headerCenter.getElementsByClassName('it-search-wrapper')[0]) {
        searchWrapper = headerCenter.getElementsByClassName('it-search-wrapper')[0].cloneNode(true)
        searchWrapper.classList.add('d-none', 'd-lg-flex')
      }
      let isCloned = false
      const topbarHeight = document.getElementsByClassName('it25-top-bar')[0].offsetHeight
      const headerCenterHeight = document.getElementsByClassName('it-header-center-wrapper')[0].offsetHeight
      window.addEventListener('scroll', () => {
        if (window.scrollY > topbarHeight + headerCenterHeight) {
          if (!isCloned) {
            isCloned = true
            if (searchWrapper) {
             document.getElementsByClassName('menu-wrapper')[0].appendChild(searchWrapper)
            }
            document.getElementsByClassName('menu-wrapper')[0].insertBefore(brandWrapper, document.getElementsByClassName('menu-wrapper')[0].firstChild)
          }
        } else {
          if (isCloned) {
            isCloned = false
            if (searchWrapper) {
              document.getElementsByClassName('menu-wrapper')[0].removeChild(searchWrapper)
            }
            document.getElementsByClassName('menu-wrapper')[0].removeChild(brandWrapper)
          }
        }
      })
    }
  }

  initMenuVert()
  initCloning()
}
