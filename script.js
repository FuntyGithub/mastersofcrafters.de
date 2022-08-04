function startCounter() {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24
    var x
    let startday = "August 05, 2022 00:16:00"//"July 22, 2022 00:00:00"//"August 05, 2022 00:00:00"//"Aug 05, 2022 00:00:00",
    countDown = new Date(startday).getTime()
    x = setInterval(function () {
        let now = new Date().getTime();
        // distance = countDown - now;


        var delta = Math.abs(countDown - now) / 1000;

        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        var seconds = Math.floor(delta % 60);


        document.getElementById("days").innerText = days
        document.getElementById("hours").innerText = hours
        document.getElementById("minutes").innerText = minutes
        document.getElementById("seconds").innerText = seconds
    }, 0)
}

var slideIndex = 1;
setInterval(slideshow, 2000);
function slideshow() {
    // console.log(slideIndex)
    var slide = document.getElementById("slideshowdisplay");

    if (slideIndex <= 3) slide.src = "./assets/slideshow/moc1/" + slideIndex++ + ".png";
    else if (slideIndex >= 4 && slideIndex <= 15) slide.src = "./assets/slideshow/moc2/" + (slideIndex++ - 3) + ".png";

    if (slideIndex > 15) slideIndex = 1;

}


// function prevSlide() {
//     Math.abs(slideIndex-2);
//     slideshow();
// }

// function nextSlide() {
//     slideIndex+1;
//     slideshow();
// }