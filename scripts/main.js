
(function () {
    const header = document.querySelector('.header_company');
    window.onscroll = () => {
        if (window.pageYOffset > 45) {
            header.classList.add('header_company_active');
        }
        else {
            header.classList.remove('header_company_active');
        }
    };
}());

(function () {
    const active_button = document.querySelector('.header_menu');
    const menu = document.querySelector('.header_nav');
    const close_button = document.querySelector('.header_list-exit');
    const links = document.querySelectorAll('.header_link');

    active_button.addEventListener('click', () => {
        menu.classList.add('header_nav-active');
    });

    close_button.addEventListener('click', () => {
        menu.classList.remove('header_nav-active');
    });
    
    if (window.innerWidth <= 866) {
        for (let i = 0; i < links.length; i++)
        {
            links[i].addEventListener('click', () => {
                menu.classList.remove('header_nav-active');
            });
        }
    }

}());

// Scroll to anchors этот код я просто спер и не сильно вникал как оно работает
// главное не именовать ссылки номерами

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };

    scrollTo();

}());