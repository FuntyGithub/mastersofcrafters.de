var project = "moc1";   // project id (default: moc1)
var screenshotN = 1;    // screenshot slider start index (default: 1)

document.addEventListener('DOMContentLoaded', function() {
    checkHash();
    window.addEventListener('hashchange', checkHash);
});

function checkHash() {
    // get project name from url
    if (window.location.hash) {
        hash = window.location.hash.substring(1);
    } else window.location.href = '#'+projects[projects.length - 1].id;

    // set Logo
    document.getElementById('logoImg').src = `../assets/logos/${hash}.png`;

    // define project
    project = projects.find(project => project.id === hash);

    // set title
    document.getElementById('title').textContent = project.name;
    
    // set download link
    document.getElementById('downloadButton').href = project.download;

    // set background image
    let bgScreenshot = Math.floor(Math.random() * project.numScreenshots) + 1
    document.getElementById('backgroundImage').style.backgroundImage = `url(../assets/screenshots/${hash}/${bgScreenshot}.webp)`;

    // set screenshot
    document.getElementById("screenshotRight").addEventListener('click', () => screenshot(1, project));
    document.getElementById("screenshotLeft").addEventListener('click', () => screenshot(-1, project));
    screenshot(0, project);

    // set duration
    document.getElementById('startDate').textContent = new Date(project.startTimestamp * 1000).toLocaleDateString(undefined, {day: '2-digit', month: '2-digit', year: 'numeric'});
    document.getElementById('endDate').textContent = new Date(project.endTimestamp * 1000).toLocaleDateString(undefined, {day: '2-digit', month: '2-digit', year: 'numeric'});
    document.getElementById('duration').textContent = Math.floor((project.endTimestamp - project.startTimestamp) / 86400) + " days";

    // set players
        // set text
    document.getElementById('totalPlayers').textContent = (project.accounts.players < 0 
        ? (project.accounts.java + (project.accounts.bedrock < 0 ? 0 : project.accounts.bedrock)) 
        : project.accounts.players)
    document.getElementById('javaPlayers').textContent = project.accounts.java < 0 ? "Wurde nicht unterstützt" : project.accounts.java;
    document.getElementById('bedrockPlayers').textContent = project.accounts.bedrock < 0 ? "Wurde nicht unterstützt" : project.accounts.bedrock;
        // set rect width
    document.getElementById('totalPlayersRect').style.width = (project.accounts.players < 0 
        ? (project.accounts.java + (project.accounts.bedrock < 0 ? 0 : project.accounts.bedrock) + 40) 
        : project.accounts.players + 20)  
        + "px";
    document.getElementById('javaPlayersRect').style.width = project.accounts.java < 0 ? 0 : project.accounts.java + 20 +"px";
    document.getElementById('bedrockPlayersRect').style.width = project.accounts.bedrock < 0 ? 0 : project.accounts.bedrock + 20 +"px";
        // set special text
    if (project.accounts.players > 0) {
        document.getElementById('totalText').textContent = "Verschiedene Spieler";
    }
    if (project.accounts.java < 0) {
        document.getElementById('javaPlayers').classList.add('empty');
    }
    if (project.accounts.bedrock < 0) {
        document.getElementById('bedrockPlayers').classList.add('empty');
    }

}



function screenshot(direction, project) {
    screenshotN += direction; 
    
    if (screenshotN > project.numScreenshots) screenshotN = 1;
    if (screenshotN < 1) screenshotN = project.numScreenshots;
    document.getElementById('screenshot').src = `../assets/screenshots/${project.id}/${screenshotN}.webp`;
}