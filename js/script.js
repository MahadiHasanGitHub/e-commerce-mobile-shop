//AOS
AOS.init();

const config = {
    type: 'carousel',
    autoplay: 3000
}
new Glide('.glide', config).mount()

const config2 = {
    type: 'carousel',
    
    startAt: 0,
    animationDuration: 800,
    perView: 4,
    breakpoints:{
        1200: {
            perView: 3
        },
        768:{
            perView: 2
        }
    }
}
new Glide('#glide2', config2).mount()


var config3 = {
    type: 'carousel',
    autoplay: 3000,
    startAt: 0,
    perView: 1
}
new Glide('#glide3', config3).mount()

var config4 = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
        1200: {
            perView: 3,
        },
        900: {
            perView: 2,
        },
        768: {
            perView: 1
        }
    }
}
new Glide('#glide4', config4).mount()




function closeMenu(){
    document.getElementById("nav-items").style.left = "-40%";
}
function openMenu(){
    document.getElementById("nav-items").style.left = "0%";
}
