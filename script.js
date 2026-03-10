document.addEventListener('DOMContentLoaded', () => {

    /* =================================
       Smooth Scrolling for Navigation
    ================================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const targetId = this.getAttribute('href');

            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

        });

    });



    /* =================================
       Gallery Filter
    ================================= */

    const filterButtons = document.querySelectorAll('.filter-tags button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            /* remove active button */
            filterButtons.forEach(btn => btn.classList.remove('active'));

            /* activate clicked button */
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {

                if(filterValue === 'all' || item.getAttribute('data-category') === filterValue){
                    item.style.display = 'block';
                }
                else{
                    item.style.display = 'none';
                }

            });

        });

    });



    /* =================================
       Fixed Navbar on Scroll
    ================================= */

    const fixedNav = document.querySelector('.fixed-nav');

    window.addEventListener('scroll', () => {

        if(window.scrollY > 200){
            fixedNav.classList.add('active');
        }
        else{
            fixedNav.classList.remove('active');
        }

    });



    /* =================================
       Form Submission (Demo)
    ================================= */

    const form = document.getElementById('portfolio-form');

    if(form){

        form.addEventListener('submit', (e) => {

            e.preventDefault();

            alert('Thanks for reaching out! Form submitted successfully.');

            form.reset();

        });

    }

});