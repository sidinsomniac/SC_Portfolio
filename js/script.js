const links = document.querySelectorAll('#navbar_links a');

document.querySelector('#hamburger').addEventListener('click', function (e) {
    this.classList.toggle('hamburger_effect');
    document.querySelector('#hamburger span').classList.toggle('eye_effect');
    document.querySelector('#brand').classList.toggle('navbar_effect');
    document.querySelector('nav').classList.toggle('navbar_effect');

    links.forEach( function(link) {
        link.classList.toggle('navbar_effect');
    });
});