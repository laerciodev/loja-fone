const heart = document.querySelector(".heart");
const stars = document.querySelectorAll(".star");
const positionLast = stars.length - 1;

heart.addEventListener('click', toggleHeart);

function toggleHeart() {
    heart.classList.toggle('-active')
}

stars.forEach(function(star, key) {
    
    if (key == 0) {
        star.addEventListener("click", handleClick);
    }

    if (key == positionLast) {
        star.addEventListener("click", lastStar);
    }

    if (key > 0 && key < positionLast) {
        star.addEventListener("click", function() {
            middleStar(key)
        })
    }

})

function middleStar(index) {
    stars.forEach( function(star, key) {
        star.classList.remove('-active');
        
        if (key <= index) {
            star.classList.add('-active');
        }
    });
}

function handleClick() {
    stars.forEach(function(star) {
        star.classList.remove('-active');
    });
    this.classList.add('-active');
}

function lastStar() {
    stars.forEach(function(star) {
        star.classList.add("-active");
    })
}