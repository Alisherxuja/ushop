const $slider = document.querySelectorAll('[data-slider="chiefslider"]');
for (let i = 0; i < $slider.length; i++) {
    const slider = new ChiefSlider($slider[i], {
        loop: true,
        autoplay: true,
        interval: 5000,

    });
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* BASKET START */
/* Установить ширину боковой панели с шириной 250 пикселей и следующий и левой части страницы содержимого шириной 250 пикселей и следующий */
function openBas() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("main").style.marginLeft = "320px";
}

/* Установите ширину боковой навигации на 0, а левое поле содержимого страницы - на 0 */
function closeBas() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

/* BASKET END */

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("activee");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


const product = {
    burger: {
        amount: 0
    },
    lavash: {
        amount: 0
    }
}


const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    delivery = document.querySelectorAll('.cart')

for (let i = 0; i < btnPlusOrMinus.length; i++) {
   btnPlusOrMinus[i].addEventListener('click', function() {
        addOrSubtrict(this)
   })
    
}

function addOrSubtrict(element) { 
    const parent = element.closest('.main__product')
    const parentId = parent.getAttribute('id')
    const elementSymbol = element.getAttribute('data-symbol')
    const output = parent.querySelector('.main__product-num')
    
    if (elementSymbol == '+') {
        product[parentId].amount++
    } else if (elementSymbol == '-' && product[parentId].amount > 0){
        product[parentId].amount--
    }



    output.innerHTML = product[parentId].amount
 }
