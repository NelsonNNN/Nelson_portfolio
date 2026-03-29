const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const myItems = document.querySelector('#myitems')
const skillList = document.querySelectorAll('.skill-list')
const smLink = document.querySelectorAll('.sm-link')
const aboutMe = document.querySelector('#aboutme')
const profile = document.querySelector('.profilepic')
const headsup = document.querySelector('.headsup')
const paragraph = document.querySelector('.paragraph')


// Set Initial State Of Menu
let showMenu = false;

window.addEventListener('scroll', addAnimation)
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.remove('open');
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuBtn.classList.add('open');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top <= (window.innerHeight || document.documentElement.clientHeight)&&
    bounding.bottom > 0 &&
    bounding.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.right > 0
  )
};

function addAnimation(){
  if(isInViewport(myItems)){
    skillList.forEach(skill => skill.classList.add('animate'))
    smLink.forEach(item => item.classList.add('animate'))
  }
  else{
    skillList.forEach(skill => skill.classList.remove('animate'))
    smLink.forEach(item => item.classList.remove('animate'))
  }
  if(isInViewport(aboutMe)){
    profile.classList.add('reveal')
    headsup.classList.add('revealToo')
    paragraph.classList.add('revealThree')
  }else{
    profile.classList.remove('reveal')
    headsup.classList.remove('revealToo')
    paragraph.classList.remove('revealThree')
  }
}


