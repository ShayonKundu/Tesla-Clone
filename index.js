const fullpageElm = document.querySelector('#fullpage')
const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.nav')
const navigationCloseBtn = document.querySelector('.nav-close-btn')

const blurOverlay = document.querySelector('.blur-overlay')

const IS__ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS__ACTIVE)
    blurOverlay.classList.toggle(IS__ACTIVE)
    fullpageElm.classList.toggle('no-scroll')
}

const CLICK = 'click'
menuBtn.addEventListener(CLICK, toggleNavigation)
navigationCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {
    autoScrolling: true,
    scrollBar: true,
})

