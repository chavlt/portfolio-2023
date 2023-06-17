//SLIDER HOMEPAGE FLICKITY

window.addEventListener('DOMContentLoaded', function(){
    var elem = document.querySelector('.projects__slider');
    var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    setGallerySize: false,
    arrowShape: 'M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM38 7L1 7V9L38 9V7Z'
    });

})