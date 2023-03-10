var moc = 1;

document.addEventListener('DOMContentLoaded', function() {
    let bgScreenshot = Math.floor(Math.random() * screenshots[moc-1]) + 1
    document.getElementById('backgroundImage').style.backgroundImage = `url(../assets/screenshots/moc${moc}/${bgScreenshot}.png)`;
});