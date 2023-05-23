let menu = document.querySelector('.list');
let navBar = document.querySelector('.nav-bar');
let social = document.querySelector('.social');
let inputEmail = document.querySelector('.container .Content input');
let navBarLink = document.querySelectorAll('.nav-bar a');
let activePage = window.location.pathname;
let iconHer = document.querySelector('.heart');
let heart = document.querySelector('.heart span');
let btnDemo = document.querySelector('.demobtn');
let exit = document.querySelector('.x');
let demo = document.querySelector('.demo');


// //////////////////////////////////////////////////

navBarLink.forEach(link => {
    if (link.href.includes(activePage)) {
        link.classList.add('active')
    }
})

menu.onclick = function () {
    navBar.classList.toggle('show');
    social.classList.toggle('show');
}

btnDemo.onclick = function () {
    demo.style.display = "flex"
    btnDemo.style.display = "none"
    exit.onclick = function () {
        demo.remove();
        btnDemo.style.display = "block"
        btnDemo.style.pointerEvents="none"

    }
}
iconHer.onclick = function () {
    iconHer.style.color = "red";
    heart.innerHTML++
    iconHer.style.pointerEvents="none"
}


inputEmail.onblur = function () {
    if (inputEmail.value == "") {
        inputEmail.classList.add('requir');
    } else {
        inputEmail.classList.remove('requir');
    }
}