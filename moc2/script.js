var moc = 2;
var screenshotN = 1;

document.addEventListener('DOMContentLoaded', function() {
    let bgScreenshot = Math.floor(Math.random() * screenshots[moc-1]) + 1
    document.getElementById('backgroundImage').style.backgroundImage = `url(../assets/screenshots/moc${moc}/${bgScreenshot}.webp)`;

    // activate animations if element is in view
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.intersectionRatio > 0) {
                entry.target.classList.remove('paused');
            } else {
                entry.target.classList.add('paused');
            }
        });
    });

    // observe paused elements
    document.querySelectorAll('.paused').forEach(el => {
        observer.observe(el);
    });


});



function screenshot(direction) {
    screenshotN += direction;
    if (screenshotN > screenshots[moc-1]) screenshotN = 1;
    if (screenshotN < 1) screenshotN = screenshots[moc-1];

    document.getElementById('screenshot').src = `../assets/screenshots/moc${moc}/${screenshotN}.webp`;
}