$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

function pesquisa() {
    var user = document.querySelector("nav .user");
    var nav = document.querySelector(".container nav");
    user.style.display = 'none'
    var divpes = document.createElement('div');
    divpes.setAttribute('class', 'pes');
    var pes = document.createElement('input');
    divpes.appendChild(pes);
    nav.appendChild(divpes);

}