function preloadImages(imageUrls) {
    if (!imageUrls || imageUrls.length === 0) {
        return;
    }
  
    var images = [];
    for (var i = 0; i < imageUrls.length; i++) {
        images[i] = new Image();
        images[i].src = imageUrls[i];
    }
}
  
var imageUrls = [
    'image/background1.png',
    'image/background2.png',
    'image/background3.png',
    'image/background4.png'
];

document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".advantage").forEach(section => {
        observer.observe(section)
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".hidden-image").forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 200);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(document.querySelector(".partner"));
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".scroll-scale").forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated-show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.querySelector(".animated-text"));
});

preloadImages(imageUrls);
