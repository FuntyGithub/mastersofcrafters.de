var project = "moc1";

document.addEventListener('DOMContentLoaded', function() {
    checkHash();
    window.addEventListener('hashchange', checkHash);

    // let bgScreenshot = Math.floor(Math.random() * screenshots[moc-1]) + 1
    // document.getElementById('backgroundImage').style.backgroundImage = `url(../assets/screenshots/moc${moc}/${bgScreenshot}.webp)`;

    // // activate animations if element is in view
    // let observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {

    //         if (entry.intersectionRatio > 0) {
    //             entry.target.classList.remove('paused');
    //         } else {
    //             entry.target.classList.add('paused');
    //         }
    //     });
    // });

    // // observe paused elements
    // document.querySelectorAll('.paused').forEach(el => {
    //     observer.observe(el);
    // });
});

function checkHash() {
    // get project name from url
    if (window.location.hash) {
        moc = window.location.hash.substring(1);
    } else window.location.href = '#'+projects[projects.length - 1].id;

    // set Logo
    document.getElementById('logoImg').src = `../assets/logos/${moc}.png`;

    // define project
    project = projects.find(project => project.id === moc);

    // set title
    document.getElementById('title').textContent = project.name;
}



// function screenshot(direction) {
//     screenshotN += direction;
//     if (screenshotN > screenshots[moc-1]) screenshotN = 1;
//     if (screenshotN < 1) screenshotN = screenshots[moc-1];

//     document.getElementById('screenshot').src = `../assets/screenshots/moc${moc}/${screenshotN}.webp`;
// }