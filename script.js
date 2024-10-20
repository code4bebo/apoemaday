window.onload = function() {
    const dateElement = document.getElementById("date");
    const poemElement = document.getElementById("poem-text");
    dateElement.innerHTML = getDateString();
    poemElement.innerHTML = getTodaysPoem();
};

function getDateString() {
    const today = new Date();
    const month = today.toLocaleString('en', { month: 'long' }).toLowerCase();
    const day = today.getDate();
    const ending = day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
    return `${month} ${day}${ending}`;
}

function getTodaysPoem() {
    const baselineDate = new Date("2024-10-20");
    const offsetInDays = Math.floor((new Date() - baselineDate) / (1000 * 60 * 60 * 24));
    const poems = getPoems();
    return poems[offsetInDays % poems.length];
}

function getPoems() {
    return [
        "<b>your name?</b>\nmy favorite word,\nwhispered like a secret i never want to end\n" +
        "<b>your hair?</b>\nsoft as moonlight,\ni want to trace every strand,\nlike a path that always leads me home</b>\n" +
        "<b>your heart?</b>\nfragile, but the kindest of all,\nthe only treasure i long to guard\n" +
        "<b>your eyes?</b>\noceans where my fears drown,\nleaving nothing but light\n" +
        "<b>your lips?</b>\nmagnetic,\npulling me closer with every glance\n",
        "I carry your heart with me (I carry it in my heart) I am never without it (anywhere I go you go, my dear; and whatever is done by only me is"
    ]
}