const photos = [
    "https://www.teahub.io/photos/full/8-85083_fond-d-cran-hd-gratuit-pour-pc.jpg",
    "https://wallpaperaccess.com/full/420977.jpg",
    "https://www.teahub.io/photos/full/11-116479_stars-desktop-images-full-hd-earth-wallpaper-space.jpg",
    "https://images5.alphacoders.com/344/344251.jpg",
    "https://cdn.hipwallpaper.com/i/84/57/t78GKp.jpg"
]

let slideIndex;

nextSlide = () => {
    showSlides(slideIndex += 1);
}

previousSlide = () => {
    showSlides(slideIndex -= 1);
}

currentSlide = (n) => {
    showSlides(slideIndex = n);
}

showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

setSlides = () => {
    let slidesBlock = document.getElementById("sliderBlock");
    let appendSlides = "";
    photos.map(photo =>
        appendSlides += `<div class="item">
            <img src=${photo} alt="photo">
        </div>`
    );
    slidesBlock.innerHTML += appendSlides;
    slideIndex = 1;
    showSlides(slideIndex);
}