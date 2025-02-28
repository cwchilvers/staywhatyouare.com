const letters = [
    "s", "t", "a", "y", "w", "h", "a", "t", "y", "o", "u", "a", "r", "e", "period"
];
let index = 0;

function updateFavicon() {
    const favicon = document.getElementById("favicon");
    favicon.href = `./assets/images/favicon/${letters[index]}.svg`;

    index = (index + 1) % letters.length;
}

setInterval(updateFavicon, 600);