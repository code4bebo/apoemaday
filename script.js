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
    const currentDate = new Date();
    baselineDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    const offsetInDays = Math.floor((currentDate - baselineDate) / (1000 * 60 * 60 * 24));
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
        "No matter the doubts that fill your heart,\nYou've been enough right from the start.\nThrough every fear and tear you show,\nI'll love you more than you could ever know.\n\n" +
        "Your insecurities, I sometimes see them too\nBut they won't change the way I feel for you.\nIn every moment, high or low,\nMy love for you will only grow.\n\n" +
        "Even when you're scared or feeling small,\nI'll be the one to catch your fall.\nThrough every trial, and stormy night\nI'll be the one to hold you tight.\n\n" +
        "So trust in us, through thick and thin,\nNo matter what, we'll always win.\nI'll be your rock, your guiding light,\nAnd love you through the darkest night.\n\n" +
        "Allow me to be there for you,\nLet me hold you tight, my sugar boo.\nI'll try to give my all again,\nAnd love you more, than I did then.\n",
        "<b>things that are less fun without you:</b>\nlaughing, partying\nwatching movies, eating\nsleeping, cooking\nshopping, working\nbuying groceries, cleaning\nreading, walking\ndriving, " +
        "gaming\nexercising, singing\ntraveling, dancing\nswimming, summer hangouts\nlate night talks, concerts\nholidays, christmas\halloween\nbirthdays, family gatherings\nfuture planning, " +
        "stargazing\nsunsets, puzzles\nlistening to music, amusement parks\naquariums, zoos\nwaking up, living\nbreathing, existing\n" +
        "\nlife without you sucks\n\nps: you want to watch frozen II sometime? <3",
    ]
}
