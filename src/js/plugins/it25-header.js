export default function () {
  function setIconBurger() {
    var hamButtonIcon = document.getElementById('btn-hamburger').querySelector('svg').querySelector('use')
    var newIcon = hamButtonIcon.getAttribute('xlink:href').replace('it-burger', 'it-close-big')
    hamButtonIcon.setAttribute('xlink:href', newIcon)
    document.getElementById('btn-hamburger').setAttribute('aria-label', 'Chiudi menù')
  }
  function setIconClose() {
    var hamButtonIcon = document.getElementById('btn-hamburger').querySelector('svg').querySelector('use')
    var newIcon = hamButtonIcon.getAttribute('xlink:href').replace('it-close-big', 'it-burger')
    hamButtonIcon.setAttribute('xlink:href', newIcon)
    document.getElementById('btn-hamburger').setAttribute('aria-label', 'Apri menù')
  }

  function initMenuHamburger() {
    if (document.getElementById('it25-main-nav')) {
      document.getElementById('it25-main-nav').addEventListener('show.bs.collapse', setIconBurger)
      document.getElementById('it25-main-nav').addEventListener('hide.bs.collapse', setIconClose)
    }
  }

  initMenuHamburger()
}
