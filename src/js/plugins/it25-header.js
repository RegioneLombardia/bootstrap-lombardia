export default function () {
  function setIconBurger() {
    var hamButtonIcon = document.getElementById('btn-hamburger').querySelector('svg').querySelector('use')
    if (hamButtonIcon.getAttribute('xlink:href').includes('it-burger')) {
      var newIcon = hamButtonIcon.getAttribute('xlink:href').replace('it-burger', 'it-close-big')
      hamButtonIcon.setAttribute('xlink:href', newIcon)
      document.getElementById('btn-hamburger').setAttribute('aria-label', 'Chiudi menù')
    } else {
      var newIcon = hamButtonIcon.getAttribute('xlink:href').replace('it-close-big', 'it-burger')
      hamButtonIcon.setAttribute('xlink:href', newIcon)
      document.getElementById('btn-hamburger').setAttribute('aria-label', 'Apri menù')
    }
  }

  function clickMenuVert() {
    var x = document.getElementById('it25-menu-vert')
    if (x.style.display === 'block') {
      x.style.display = 'none'
    } else {
      x.style.display = 'block'
    }
    setIconBurger()
  }

  function initMenuVert() {
    if (document.getElementById('it25-menu-vert')) {
      document.getElementById('btn-hamburger').addEventListener('click', clickMenuVert)
    } else if (document.getElementById('it25-main-nav')) {
      document.getElementById('btn-hamburger').addEventListener('click', setIconBurger)
      document.getElementById('it25-main-nav').addEventListener('show.bs.collapse', function () {
        window.scrollTo(0, 0)
      })
    }
  }

  initMenuVert()
}
