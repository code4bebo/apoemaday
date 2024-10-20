window.onload = function() {
    const dateElement = document.getElementById("date");
    const poemElement = document.getElementById("poem");
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
    const poems = getPoems();
    return poems[0];
}

function getPoems() {
    return [
        "Roses are red,\n violets are blue,\n sugar is sweet,\n and so are you.",
        "I carry your heart with me (I carry it in my heart) I am never without it (anywhere I go you go, my dear; and whatever is done by only me is"
    ]
}