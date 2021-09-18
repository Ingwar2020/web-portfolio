$(document).ready(function(){
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.portfolio-item__content').eq(i).toggleClass('portfolio-item__content_active');
                $('.portfolio-item__list').eq(i).toggleClass('portfolio-item__list_active');
            });
        });
    }

    toggleSlide('.portfolio-item__link');
    toggleSlide('.portfolio-item__back');

    const link = document.querySelectorAll('.portfolio-item__link');
    const li = document.querySelectorAll('li');
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', function() {
            this.innerHTML =
            (this.innerHTML === 'Подробнее') ? this.innerHTML = 'Назад' : this.innerHTML = 'Подробнее';
        });

        
    }

});