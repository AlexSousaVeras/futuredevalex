function menuA() {
    let menuMobol = document.querySelector('.mobol-menu');
    if (menuMobol.classList.contains('open')) {
        menuMobol.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu.svg";
    }
    else {
        menuMobol.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close.svg";
    }
}
