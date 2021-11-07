
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