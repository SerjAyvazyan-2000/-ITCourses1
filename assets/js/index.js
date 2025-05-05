



const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open'); // добавляем/удаляем класс для анимации
});

// Smooth scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        nav.classList.remove('open');
        burger.classList.remove('open');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});



window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});



document.addEventListener('DOMContentLoaded', function () {
    // FAQ toggle logic
    const faqItems = document.querySelectorAll('.faq-item');
    if(faqItems){
        faqItems.forEach(item => {
            const toggleBtn = item.querySelector('.faq-toggle');
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        // Scroll animation logic
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });

        faqItems.forEach(item => observer.observe(item));
    }

});


document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.partner-card').forEach(el => {
        observer.observe(el);
    });
});


const swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 3,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-slide').forEach(slide => observer.observe(slide));


document.addEventListener('DOMContentLoaded', () => {
    const contactBlock = document.querySelector('.contact-content');
    if(contactBlock){
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        observer.observe(contactBlock);
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const pricingCards = document.querySelectorAll('.pricing-card');

    if(pricingCards){
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        pricingCards.forEach(card => observer.observe(card));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const featureBoxes = document.querySelectorAll('.feature-box');
    if(featureBoxes){
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });

        featureBoxes.forEach(box => observer.observe(box));
    }

});


document.addEventListener('DOMContentLoaded', function () {
    const notice = document.getElementById('cookieNotice');
    const acceptBtn = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        notice.style.display = 'block';
    }

    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        notice.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalClose = document.getElementById('modalClose');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            modalImg.src = item.dataset.image;
            modalTitle.textContent = item.dataset.title;
            modalDesc.textContent = item.dataset.description;
            modal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});