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
    const ending = getDaySuffix(day);
    return `${month} ${day}${ending}`;
}

function getDaySuffix(day) {
    if ([1, 21, 31].includes(day)) {
        return "st";
    }
    if ([2, 22].includes(day)) {
        return "nd";
    }
    if ([3, 23].includes(day)) {
        return "rd";
    }
    return "th";
}

function getTodaysPoem() {
    const baselineDate = new Date("2024-10-19");
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
        "gaming\nexercising, singing\ntraveling, dancing\nswimming, summer hangouts\nlate night talks, concerts\nholidays, christmas markets\nbirthdays, family gatherings\nfuture planning, " +
        "stargazing\nsunsets, puzzles\nlistening to music, amusement parks\naquariums, zoos\nwaking up, living\nbreathing, existing\n" +
        "\nlife without you sucks\n\nps: you want to watch frozen II sometime? <3",
        "<b>one room over?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>outside our door?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>at work?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>at my family's?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>in another city?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>in another country?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>on another continent?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>on another planet?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>in another universe?</b>\ni am with you,\nmy heart is with you,\nmy mind is with you.\n<b>if i'm ever gone?</b>\ni am with you,\nmy heart is with you,\nand my soul is with you.\n<b>for eternity</b>",
        "<b>i had a great day today.</b>\ni think to myself\nyet i keep thinking\n" +
          "<b>did i sit next to you on the train today? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i grab my morning coffee together with you? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i walk through the city with you by my side? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i grab lunch together with you, with that funky music in the store? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i almost get stuck in the elevator together with you? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i clink my champagne glass with you today? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i ride the metro with you leaning on my shoulder? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i sit next to you at the restauraunt, enjoying delicious food? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i walk you to the office, holding your hand? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i get ready for bed, to lay down next to you in our hotel room? - no?</b>\nmy day was alright, not great\n" +
          "<b>did i fall asleep with you in my arms? - no?</b>\nmy day was alright, not great\n\n" +
          "i had a decent day today,\nbut it could have been great\nif i just had you by my side\n" +
          "everything is more fun with you <3",
        "<b>a shooting star so bright flies by,\nlighting up the dark night sky</b>\ni close my eyes and make a wish\nfor you, my love, my only bliss\n\n" +
        "<b>dandelions are dancing in the breeze,\nready to read my thoughts with ease</b>\ni close my eyes and make a wish\nfor you, my love, my only bliss\n\n" +
        "<b>my coin flips high into the wishing well,\neven the stone-made structure can tell</b>\ni close my eyes and make a wish\nfor you, my love, my only bliss\n\n" +
        "<b>the moon is full, the night is clear,\nthe stars are shining bright and near</b>\ni close my eyes and make a wish\nfor you, my love, my only bliss\n\n" +
        "<b>fireworks light the sky on new year's eve,\nall the colors put my mind at ease</b>\ni close my eyes and make a wish\nfor you, my love, my only bliss\n\n" +
        "<b>i check the time, oh lucky me,\nthe clock, it reads 3:33</b>\ni close my eyes and make a wish\nfor you, my love, my only bliss\n\n" +
        "<b>another year aged, as time flies by\ni want the rest of this life, right by your side</b>\ni close my eyes and make a wish\nfor you, my love, my only bliss\n\n<b><3</b>",
        "<b>the universe gave me eyes</b>\nit gave me eyes, so i can look at you,\nto take in your unimaginable beauty\nand put a smile on my face\n\n" +
        "<b>the universe gave me ears</b>\nit gave me ears, so i can listen to you,\nto hear your angelic voice\nand listen to you sing\n\n" +
        "<b>the universe gave me a mouth</b>\nit gave me a mouth, so i can tell you 'i love you',\nto kiss your adorable face\nand sing along with you\n\n" +
        "<b>the universe gave me a nose</b>\nit gave me a nose, so i can savor your perfume\nto recognize your pleasant scent\nand feel at home when i do\n\n" +
        "<b>the universe gave me hands</b>\nit gave me hands, so i can touch you\nto hold your beautiful hands\nand caress every part of you\n\n\n" +
        "<b>the universe gave me all those senses</b>\nand i am convinced, it was for you\nso let me hold you tight\nand let us go into the night\n\n" +
        "i want to make us feel good, like no one else ever could, and to make all of our senses explode with glee, this wonderful heaven only knows you, and me\n\n" +
        "so let us sin together <3\n"
    ]
}
