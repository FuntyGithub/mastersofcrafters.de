document.addEventListener('DOMContentLoaded', () => {
    let bgMoc = Math.floor(Math.random() * screenshots.length);
    let bgScreenshot = Math.floor(Math.random() * screenshots[bgMoc]) + 1;
    document.getElementById('backgroundImage').style.backgroundImage = `url(./assets/screenshots/moc${bgMoc + 1}/${bgScreenshot}.webp)`;

    // count down timer
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24
    var x
    let startday = "October 20, 2024 00:00:00"
    countDown = new Date(startday).getTime()
    x = setInterval(function () {
        let now = new Date().getTime();
        distance = countDown - now;


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

    document.addEventListener('scroll', (event) => {
        // console.log('scroll');
    
        let navItems = document.getElementsByClassName('navItem');
        
        for (let i = 0; i < navItems.length; i++) {
            let hash = navItems[i].getAttribute('href');
            let hElement;
            if (hash == '#') hElement = document.getElementById('backgroundImage');
            else hElement = document.querySelector(hash);
            if (hElement != null) {
                
                let rect = hElement.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight) navItems[i].classList.add('navActive');
                else navItems[i].classList.remove('navActive');
                

            }
    
        }
    });

    if (window.location.hash) {
        navClick(document.querySelector(`a[href="${window.location.hash}"]`));

        window.scrollTo({
            top: hElement.offsetTop + window.innerHeight,
            behavior: 'smooth'
        });
    }

});

function scrollHint() { // scroll to content

    window.scrollTo({
        top: document.getElementById('content').offsetTop,
        behavior: 'smooth'
    });
    
}

function navClick(element) {
    let navItems = document.getElementsByClassName('navItem');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('navActive');
    }
    element.classList.add('navActive');
    
    let hash = element.getAttribute('href');
    if (hash != '#' && hash != '#infoDiv') {
        let hElement = document.querySelector(hash);
        hElement.classList.add('glow');
        setTimeout(() => {
            hElement.classList.remove('glow');
        }, 3000);
    }
}