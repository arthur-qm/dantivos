document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('header>div>button').addEventListener('click', function (e) {
    document.querySelector('#oquee').scrollIntoView({
        behavior: 'smooth'
    });
});