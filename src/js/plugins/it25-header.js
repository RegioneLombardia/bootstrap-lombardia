export default function() {
  
  function clickMenuHamburger() {
    var x = document.getElementById('menu-hamburger')
    if (x.style.display === 'block') {
      x.style.display = 'none'
    } else {
      x.style.display = 'block'
    }
    managerButtons();
  }

  function managerButtons(){
  var menu =  document.getElementById('menu-hamburger');
  var btnMenu = document.getElementById('btn-hamburger');
  var btnClose =document.getElementsByClassName('it25-close-div');

    if(menu.style.display == 'none'){
      btnMenu.style.display = 'block';
      if(btnClose.length > 0){
        btnClose[0].style.display = 'none';
      }    
    } else {
      btnMenu.style.display = 'none';
      if(btnClose.length > 0){
        btnClose[0].style.display = 'block';
      }  
    }
  }

  function initMenuHamburger(){
    if(document.getElementById('btn-hamburger') && document.getElementById('btn-hamburger-close')){
      document.getElementById('btn-hamburger').addEventListener("click", clickMenuHamburger);
      document.getElementById('btn-hamburger-close').addEventListener("click", clickMenuHamburger);
    }
  }


  if (!document.querySelector('bd-example')) {
    initMenuHamburger()
  }
};