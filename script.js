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
        "<b>the universe gave me hands</b>\nit gave me hands, so i can touch you\nto hold your beautiful hands\nand caress every part of you\n\n" +
        "<b>all these senses, through and through,</b>\nand i am convinced, i got them just for you\nso let me hold you tight\nand let us go into the night\n\n" +
        "i want to make us feel good,\nlike no one else ever could,\nand to make all of our senses explode with glee,\nthis wonderful heaven only knows you, and me\n\n" +
        "so let us sin together <3\n",
        "<b>do you know why i am certain that i love you?</b>\nbecause with you by my side, i feel safe\nall the worries go away\nand i can finally breathe\n\n" +
        "all the noise in my head, it disappears\nand i can finally think\nall the doubts in my heart, they vanish\nand i can finally feel\n\n" +
        "never have i felt so at peace\nnever have i felt so at home\nnever have i felt so understood and loved\nas i have when i am with you\n\n" +
        "thank you for entering my life\nthank you for loving me the way i am\nthank you for being yourself\nand my heart wishes nothing more, but for you to stay by my side for eternity\n\n" +
        "i cry as i am writing this\nbecause i want to hold you so bad right now\nand i want to tell you how much i love you\nall while i caress your beautiful face\n\n" +
        "you are the best thing that ever happened to me\nand i will never let you go\nyou're the most perfect person i know\nand i want to be with you, forevermore\n\n" +
        "<b>thank you for everything, my precious sweetheart\ni love you <3</b>",
        "<b>you are the sun that shines all so bright,</b>\nthe moon that lights up the starry night\n" +
        "<b>you are the stars that twinkle in the sky,</b>\nthe clouds that float above so high\n\n" +
        "<b>you are the wind that whispers in the trees,</b>\nthe rain that falls to the ground so free\n" +
        "<b>you are the whitest snow that covers the ground,</b>\nthe rainbow that's so colorful and profound\n\n" +
        "<b>you are all the things that make me smile</b>\nthe one that makes my life worthwhile\n" +
        "<b>you are the one that makes my heart beat,</b>\nthe one that makes my life complete\n\n" +
        "<b>you are the one that makes me feel so alive</b>\nthe one that makes me want to thrive\n" +
        "<b>you are the one that makes me feel so good</b>\nthe one that makes me feel understood\n\n" +
        "<b>thank you for being part of my life</b>\ni am sure, one day, i will make you my wife\n" +
        "<b>and spend the rest of my days with you</b>\nmy love for you is all so true\n\n" +
        "<b>the only one i want in a white dress is you</b>\nand i will try my best, so you will say 'i do'\n" +
        "<b>please, stay with me, and let's grow old</b>\nour beautiful story, is yet to be told\n",
        "<b>i am not anywhere near perfect</b>\nthe lunch you had today?\nway more perfect than me\n\n" +
        "<b>i am still not anywhere near perfect</b>\nthe coffee you drank today?\nway more perfect than me\n\n" +
        "<b>i am nowhere close to being perfect</b>\nthe walk you had yesterday?\nway more perfect than me\n\n" +
        "<b>i am still not perfect</b>\nthe people you talked to today?\nway more perfect than me\n\n" +
        "<b>i am anything, but perfect</b>\nthe flaws i have are many\nand the mistakes i make are plenty\n\n" +
        "<b>and yet you are still here</b>\nloving me, caring for me\nand making me feel like i am the most perfect person in the world\n\n" +
        "<b>and i promise you, i am trying</b>\ni am trying my very hardest\nto become the perfect person for you\n\n" +
        "<b>and i will not stop trying</b>\ni will never stop trying\nbecause you deserve the best there is\n\n" +
        "<b>so i am thriving to become the best there is</b>\ni am nowhere close to being that person\nbut as long as you are by my side, i will keep on trying\n\n" +
        "<b>thank you for believing in me</b>\nthank you for not giving up on me\nthank you for loving me\n\n" +
        "<b>i am so grateful to be allowed to be part of your life</b>\ni will keep trying, to become perfect\nuntil the day i die\n\n" +
        "<b>and i may never become perfect</b>\nbut i hope i will become good enough\nfor you to stay by my side\n\n" +
        "<b>that is the one wish i have in life</b>\nfor us to one day share a last name\nand to love each other, until the end of time\n",
        "<b>i love when you talk</b>\nthe way your voice sounds\nthe way your lips move\nthe way your eyes light up\n\n" +
        "<b>i love when you sing</b>\nthe excitement that fills you\nthe passion that drives you\nthe joy that radiates from you\n\n" +
        "<b>i love when you laugh</b>\nthe way your cheeks crinkle\nthe way your nose scrunches\nthe way your smile shows\n\n" +
        "<b>i love when you smile</b>\nthe way your eyes sparkle\nthe way your cheeks rise\nthe way your lips curve upwards\n\n" +
        "<b>i love when you yap</b>\nthe way you tell stories\nthe way you share your thoughts\nthe jokes you say to make me laugh\n\n" +
        "<b>how are you so beautiful?</b>\nhow are you so perfect?\nhow are you so amazing?\nhow are you... so you?\n\n" +
        "<b>once again, thank you for being the way you are</b>\nyou are the only person that makes me smile this much\nthe only person that makes me forget about my worries\nthe only person that makes me feel like i am the luckiest man in the world\n\n" +
        "<b>thank you for everything, bianca <3</b>\nps: i <b>really</b> love your voice, it's so soothing ...",
        "<b>i know things aren't always easy</b>\nand i know that i am a huge idiot at times\nand i want to apologize to you\nfor all the times i made you feel insecure\n\n" +
        "<b>there will be good days</b>\nand there will be bad days\nbut i want you to know\ni will always love you the same, on either\n\n" +
        "<b>you are not annoying, and you are not difficult</b>\nif anyone is, then i am\nand i am sorry for that\ni am trying to be better, everyday\n\n" +
        "<b>your jealousy is not annoying</b>\nit's cute, and it's a sign that you care\nand i love that about you\ni love that you care so much about me\n\n" +
        "<b>your insecurities are not annoying</b>\nthey are a part of you\nand i love every part about you\nand i especially love that you are so open with me\n\n" +
        "<b>your fears are not annoying</b>\nthey are valid, and they are real\nand i want to help you overcome them\ni want to be there for you, always\n\n" +
        "<b>your doubts are not annoying</b>\nthey are understandable, and they are human\nand i want to help you get rid of them\ni want to make you feel secure\n\n" +
        "<b>your past is not annoying</b>\nit's a part of you, and it made you who you are\nand i love who you are\ni love you, <b>for who you are</b>\n\n" +
        "<b>you are not annoying</b>\nand you are not difficult\nyou are the most wonderful person i ever met\nand i want to be with you, forevermore\n\n" +
        "<b>i love you bianca, you are beautiful in every single way <3</b>",
        "<b>When Ghostface calls, I’m not running away,</b>\nI’ll hold you tight, keep the fear at bay.\n" +
        "<b>Let him try his tricks with that mask and knife,</b>\nI’ll stand strong with you, we'll be keeping our life\n\n" +
        "<b>Freddy might haunt the dark and the deep,</b>\nBut I’ll lay beside you as you fall asleep.\n" +
        "<b>His claws won’t touch you, not while I’m here,</b>\nI’ll guard your dreams and hold you near.\n\n" +
        "<b>Pyramid Head’s sword may be heavy and sharp,</b>\nbut I’ll block every strike, ensure you're not scarred.\n" +
        "<b>The only time I’ll ever let pierce through,</b>\nis my love for you, so fierce and true.\n\n" +
        "<b>Jason may chase, but I’ll stand my ground,</b>\nWith you in my arms, I won’t make a sound.\n" +
        "<b>Let him haunt the woods or the coldest lake,</b>\nI’m here to protect you, making no mistake.\n\n" +
        "<b>Pennywise may lurk in the sewers below,</b>\nBut for you, I’d face every fear I know.\n" +
        "<b>Let him try his tricks, his laugh, his bite,</b>\nI will be your protector, through Halloween night.",
        "<b>Words cannot describe my love for you</b>\nno matter what I will write\nno matter what I will say\nit will never convey the feelings I have\n\n" +
        "<b>Touch cannot describe my love for you</b>\nno matter how much I caress you\nno matter how much I kiss your face\nmy feelings are so, so much more\n\n" +
        "<b>Actions cannot describe my love for you</b>\nno matter what I gift you\nno matter how often I open the door for you\nit will never be enough, to display my true love\n\n" +
        "<b>Time cannot describe my love for you</b>\nno matter how many moments we share\nno matter how many months pass by\nit will never encompass my feelings for you\n\n" +
        "<b>Words, touch, actions, and time fail me</b>\nmy love goes beyond what's felt or seen\nit is boundless, a silent promise\nfor a lifetime, and far beyond",
        "<b>her gaze?</b>\na soft warmth pulling me close,\nwhere everything fades, and it's just us,\nwrapped in quiet, timeless glow.\n\n" +  
        "<b>her eyes?</b>\nlike autumn, deep and true,\ni get lost there, endlessly,\na calm that feels like coming home.\n\n" +  
        "<b>her soul?</b>\nheld there, beneath those gentle shades,\nwhere fears dissolve, and peace remains,\na place i never want to leave.\n\n",
        "<b>I may never find the words</b>\nthe words to describe all that you mean to me\nbut i will spend the rest of my life\nsearching for them\n\n" + 
        "<b>I may never be the man</b>\nthe man that is perfect for you in every way\nbut i will spend the rest of my life\ntrying to become that person\n\n" +
        "<b>I may never fully know you</b>\nand see all the things you fear at first glance\nbut I will spend the rest of my life\nlearning to read it better\n\n" +
        "<b>I may never be able to fulfill you</b>\nall the dreams and wishes in your heart,\nbut I will spend the rest of my life\ngiving you the best i can\n\n" +
        "<b>I may never be perfect</b>\nor the prince of your dreams,\nbut I will spend the rest of my life\ngiving my all to be worthy of you.\n\n",
        "<b>when you laugh after i make a joke</b>\nmy world lights up, colors burst alive\nsuddenly the ordinary is a dopamine dive\nstraight into joy, with you by my side\n\n" +
        "<b>when you talk with me</b>\nevery word turns my doubts into dust\nyou make every thought shine\nand the bad ones combust\n\n" +
        "<b>when you walk with me</b>\neach step starts a melody\na quiet rhythm guiding us\nturning every path into a memory\n\n" +
        "<b>when you smile for me</b>\nthe whole day shifts from gray to gold\ni feel braver, stronger, happier\nencased in a warmth only you could mold\n\n" +
        "<b>when you are near me</b>\neven silence becomes my favorite song\nwith you, I am finally at home\nand i found who was missing all along\n",
        "<b>fly me to the moon?</b>\n\ni'd follow you through stars that light the way,\nto places unknown, feeling night turn to dawn\neach step with you, in your orbit drawn\nyes, with you, through night and day\n\n" +
        "<b>shall we dance among the stars?</b>\n\nI can't dance at all, but for you I'd try,\nfeet stumbling, heart beating out of tune,\nunder the gaze, of a silver-lit moon\nas we twirl beneath the midnight sky\n\n" +
        "<b>wish upon a shooting star?</b>\n\na whispered hope as it blazes through,\nI've wished a thousand, all for you\nfor every spark, a promise made,\nthat love like ours will never fade\n\n" +
        "<b>hold my hand at the galaxy's edge?</b>\n\nwhere light grows faint, and space turns deep\nI'd follow you there, through dark and bright\nour journey beyond the stars we'll keep\nfor with you near, there's no fear in sight\n\n" +
        "<b>let's make the universe ours tonight?</b>\n\nwith you, I'd explore the endless unknown,\nclaim every star as ours alone\nyes each constellation, a vow, a sign\nfor your heart is the brightest, forever mine <3\n",
    ]
}
