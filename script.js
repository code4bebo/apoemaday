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
    const baselineDate = new Date("2024-10-21");
    const currentDate = new Date();
    baselineDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    const offsetInDays = Math.floor((currentDate - baselineDate) / (1000 * 60 * 60 * 24));
    const poems = getPoems();
    return poems[poems.length - 1];
    //return poems[offsetInDays % poems.length];
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
        "<b>i love gaming with you</b>\nnot because of the game\nand not because of the gameplay\nbut because of you\nyour laugher, your singing, your humming, your humor, all these little things that make me fall in love\n\n" +
        "<b>i love watching shows with you</b>\nnot because of the story\nor because of the actors\nbut because of you\nyour engagement, your jokes, your funny comments, your enthusiasm about 'i know that guy!', and sharing all those emotions\n\n" +
        "<b>i love cuddling with you</b>\nbeing wrapped in that warm embrace\nfeeling at ease, feeling at peace\nwhen i hold your hand, and kiss it, run my fingers along your arm, and you run yours along my head, my neck, my arms... i feel so soft and sweet, like i am a child again, and i love making you feel good\nthank you for allowing me to be with you in all those ways, you are so much more than perfect <3",
        "<b>you know what i really love?</b>\ni love your eyes, looking into them, sinking into a trance\nlosing myself in your beauty, they really are beautiful\nlike a galaxy, that i am free-falling into\n\n" +
        "<b>you know what else i love?</b>\nholding your hands, warming them between mine\ni love holding them, keeping you safe\ni want to be your safe haven, and protect you at all times\n\n" +
        "<b>but you know what i love even more?</b>\nhugging you close, holding you tight,\nfeeling your heartbeat while you feel mine\nfeeling eachother breathe, and feeling so carefree and safe\n\n" +
        "<b>but beyond that there's more</b>\ncuddling with you, caressing you\ni want you to feel at ease, to feel unanxious\ni want to massage your back, and treat you like the beautiful princess you are to me\n\n" +
        "<b>you know what i want?</b>\nto be the man that makes you smile\nthe man that you can't wait to come home to after work\nthe man who you want to kiss your forehead, and hold you tight at night, all night long\n\n" +
        "<b>that is who i want to be...</b>\nand who i strive to be every day <3\nwords can never explain how perfect you are to me\nso i will spoil you with love to try and get close to expressing what i really feel\n",
        "<h2>moving in</h2><b>engine noise, diesel fumes, doors closing</b>\ncreaking steps of stairs, sweat, sore arms\n<b>big trunk, arranging pieces like tetris</b>\ncar keys turning, music, autobahn noise\n\n" +
        "<b>driving break, fast food smell, quick lunch</b>\nmore music, more singing, more autobahn\n<b>blue signs, 130 km/h, big world, big city</b>\nsqueaking breaks, searching parking spaces\n\n" +
        "<b>entrance keys, sweat again, heavy lifting</b>\ncall elevator, load up, elevator ride, load off\n<b>rinse and repeat, elevator, and elevator</b>\ntoo small, stairs, out of breath, arms hurt\n\n" +
        "<b>moving done, unpacking todo, sleep first</b>\nthe first night, snuggled up, so much love\n<b>the first day, still snuggling, arms so sore</b>\nget up, cardboard smell, big boxes, clothes\n\n" +
        "<b>unpacking, clothing, full wardrobe, oops</b>\ncar ride, trailer, autobahn, ikea, meatballs\n<b>walking, confusion, distractions, decisions</b>\ntrailer door, grunting, drive, stairs, more boxes\n\n" +
        "<b>music, instructions, sorting pieces, masterplan</b>\nwood smell, hammering, confusion, contemplation\n<b>dedication, realization, teamwork, success</b>\nunpacking, finishing, ripped up cardboard, trashbin\n\n" +
        "<b>together. our home. our place. our life. us. forever.</b>",
        "<h2>christmas market</h2><b>front door creaking, cold air, snowy streets</b>\nhand in hand, strolling along, towards xmas smell\n<b>twinkling lights, loud chatter, voices laughing</b>\ndecorations, christmas trees, choir singing\n\n" +
        "<b>tummy growling, mouth watering, nose tingling</b>\nsweet crepes, powdered sugar, warm hands\n<b>sizzling stalls, sugar-glazed strawberries</b>\ncinnamon warmth, holiday tunes, wooden huts\n\n" +
        "<b>crispy potato spirals, hot chocolate steam</b>\ncheeks red, scarves tight, mittened hands\n<b>lanterns glowing, laughter in the cold</b>\nstars above, footsteps crunch, holiday cheer\n\n" +
        "<b>night turns late, last treat, heading home</b>\nslightly drunk, laughing together, telling stories\n<b>cozy socks on, blankets piled, movie time</b>\npopcorn popping, snuggled warm, cuddled up\n\n" +
        "<b>eyes heavy, fading warmth, lifting you with care</b>\nsafe in bed, soft breaths shared, closer than ever\n<b>soft kisses, cheek to cheek, warm under blanket</b>\nfalling asleep, dreamy night, heart to heart\n\n" +
        "<b>just us. just home. wrapped up. warm together.</b>",
        "<h2>perfection</h2><b>you are not hard to handle</b>\nstop thinking you are a burden\nor that your overthinking makes you one\ni promise you, you are not, and i don't mind your overthinking\n\n" +
        "<b>you are not hard to love</b>\nit's quite the opposite, if i'm honest\nbecause there is so much perfection to love about you\ni promise you, you are the most lovable person i know\n\n" +
        "<b>you are not a waste of time</b>\nif you ever thought that, please never do it again\nbecause i love spending time with you\ni promise you, every second with you is like heaven on earth\n\n" +
        "<b>you are not annoying</b>\nand you never have been, never. ever.\ni know people in the past might have told you so\ni promise you, you did not annoy me once since i met you\n\n" +
        "<b>you are not 'not enough'</b>\nyou are everything i could ever ask for\nyour lovable character, gorgeous body, beautiful face, <b>YOU.</b>\ni promise you, i love everything about you so, so much\n\n" +
        "<b>you are not replacable</b>\nthere is noone quite as perfect as you out there\ni will never ever forget or replace you\nbecause i already found the perfect woman that i want to put a ring on, and i will never ever let her go, you will have to push me away to get rid of me, because i won't be leaving voluntarily. forget it.\n" +
        "i promise you, i really mean to go all the way with you, and spend the rest of my life - our life - together with you\n\n<b>because i love every bit of you so freaking much <3</b>",
        "<b>your past?</b>\na wound, heavy and deep,\netched with lies and scars you keep.\nbut darling, i'm here to help you mend,\nwith all I am, until the very end.\n\n" +
        "<b>your trust?</b>\nshaken and fragile, like glass,\nyet in my hands, it shall forever last.\ni'll hold it close, guard it tight,\nbe your steady peace, your guiding light.\n\n" +
        "<b>your heart?</b>\nonce shattered, now deserving of grace,\nlet me be your shelter, your safest place.\ni promise you, love, unbreakable and pure,\na future full of hope, forever secure\n\n" +
        "<b>our tomorrow?</b>\na path of joy, a journey ahead,\nno more doubts, no more dread.\ni vow to love you, honest and true,\nand build our little world, just for me and you. &#10084;\n\n",
        "<b>your face?</b>\neach glance, each smile, is all i need,\nthe way your eyes shine, how your lips lead.\ni could stare forever, lost in your grace,\nyou're my definition of beauty, in every place.\n\n" +
        "<b>your body?</b>\nevery curve, every line, a dream to me,\nyou're the picture of pure beauty, as true as can be.\ni'm obsessed, my love, with all that you are,\nto me you're more beautiful, than the brightest star\n\n" +
        "<b>your insecurities?</b>\nthey're shadows, unfounded in my eyes' light,\ni'll remind you each day, i'll hold you tight.\nto me you're flawless, and endlessly rare,\ni'm obsessed, enchanted, way beyond compare.\n\n" +
        "<b>you?</b>\nmy idea of perfection, of endless delight,\nthe one i truly adore, from morning to night.\nevery part of you truthfully adored,\nin you, there's true beauty, and every day it grows more.\n",
        "<b>in the quiet night, i lie alone,</b>\njust my thoughts, and the soft-lit phone.\n<b>yet with each buzz, i feel you near,</b>\na gentle whisper, from you, my dear.\n\n" +
        "<b>i close my eyes, the world fades slow,</b>\nand in my arms, it's you I know.\n<b>the pillow's warmth, a soft embrace</b>\nbrings me closer to your distant place.\n\n" +
        "<b>miles may keep our worlds apart,</b>\nbut you're here with me, heart to heart\n<b>every message, every sound</b>\nis a trace of you, that i have found\n\n" +
        "<b>so i fall asleep, with you in mind,</b>\nin dreams, our hands and hearts entwined.\n<b>and though you're far tonight i swear</b>\nin my arms, you're truly there\n",
        "<h2>counting down</h2><b>55 hours</b> - wake up, think about cuddling with you\n<b>54 hours</b> - shower, think about hugging you\n<b>53 hours</b> - head to work, think about kissing you\n" +
        "<b>52 hours</b> - eat krapfen, think about sharing them with you\n<b>51 hours</b> - coding, think about aot with you\n<b>50 hours</b> - lunch time, think about dinner with you\n" +
        "<b>49 hours</b> - more coding, think about gaming with you\n<b>48 hours</b> - acoustic panels, think about moving in together\n<b>47 hours</b> - coffee gossip, think about movies with you\n" +
        "<b>46 hours</b> - podcast ideas, think about talking to you\n<b>47 hours</b> - work end, think about coming home to you\n<b>46 hours</b> - lay down in bed, daydream about you\n" +
        "<b>45 hours</b> - quick nap, dreaming all about you\n<b>44 hours</b> - gaming with you, loving your soft voice\n<b>43 hours</b> - still gaming, laughing with you\n" +
        "<b>42 hours</b> - watching reels, constantly cutesy texting you\n<b>41 hours</b> - snacking haribo, thinking about laying next to you\n<b>40 hours</b> - finishing this text, loving you more than ever &#10084;\n" +
        "\n40 more hours left to count, until i am the happiest man on planet earth again <3",
        "<b>tomorrow?</b>\na day i've been waiting for, counting each hour\nfinally seeing you again, my beautiful flower\nyour presence, your touch, your smile so warm,\ni'm ready to lose myself in your charm\n\n" +
        "<b>your forehead?</b>\na gentle kiss, my first hello\nand hugging you, not letting go\nthen your cheeks, so sweet and divine\nwith each kiss i whisper, 'you're forever mine'\n\n" +
        "<b>your hands?</b>\nso soft, so perfect, entwined with mine\ni'll kiss them both, with love so fine\nthen your arms, massaging them with care\ndrawing us closer, nothing else can compare\n\n" +
        "<b>your lips?</b>\nsoft, inviting, a taste of bliss\nwith every second, another kiss\ni'll kiss you, hold you, never let go\nunder the blanket love's warmth will flow\n\n" +
        "<b>your eyes?</b>\nwhere my sight lingers, lost in their glow\na place where endless love will show\ni see all you are, so soft and sweet\nwith you, my love, i feel complete",
        "",
        "<b>i listened to a lot of songs on my drive home today...</b>\nand i constantly imagined you sitting on the passenger seat, the whole ride home...\nand every one reminded me of you, because...\n\n" +
        "i would walk over <a href='https://open.spotify.com/track/1O7hVfI7ETQvQmPC0EqfY7?si=dc9763b9a882417f'>Landmines</a> for you\n" +
        "i want to spoil you with gifts, like a <a href='https://open.spotify.com/track/11LmqTE2naFULdEP94AUBa?si=b76945e45d784ce8'>Heart-Shaped Box</a>\n" +
        "i love it when we <a href='https://open.spotify.com/track/4GvPlSOKfN7aXEuGW8zKUx?si=5a859da856f24b68'>GOSSIP</a> about things\n" +
        "i love kissing you, even though i got some <a href='https://open.spotify.com/track/4KacUpvbA3Mfo05gttTjhN?si=0263b06f10fc4fa2'> Fat Lip</a>s\n" +
        "i only ever would <a href='https://open.spotify.com/track/0a7BloCiNzLDD9qSQHh5m7?si=5374ecd3e5bb4b55'>Dance, Dance</a> with you\n" +
        "maybe one day i'll go and finally hit the gym again, to <a href='https://open.spotify.com/artist/1WNoKxsp715jez1Td4vthc?si=788f1178085d4826'>Pump It</a>, to look better for you\n" +
        "i want to <a href='https://open.spotify.com/track/5O6SumCYk8Ug81UbfXAPJC?si=e21baad53d544f87'>Give It All</a> i have, to make you happy\n" +
        "people in your past might've been <a href='https://open.spotify.com/track/5Hh2VJj7bOWGsN0Jw6smwt?si=2885323175d94219'>Two Faced</a>\nbut i promise, to you i only show my real face\n" +
        "take my hand, and kiss me <a href='https://open.spotify.com/track/1fr92Vupmcs2vgLMFVQ7rd?si=89ad4706627d4744'>In the Shadows</a>\n" +
        "because anywhere, anytime, and forever, you are <a href='https://open.spotify.com/track/4JsDHMv5PVO8N07DbDq33r?si=1cac808d63184c4f'>All I Want</a>\n" +
        "i want to be by your side, to be your <a href='https://open.spotify.com/track/1vcxF91pWs9uNwDROuiCPB?si=9ec402414b7146ef'>Savior</a>\n" +
        "i still remember our <a href='https://open.spotify.com/track/1fJFuvU2ldmeAm5nFIHcPP?si=18f00ca62cb74ea1'>First Date</a>, and our First Kiss\n" +
        "and while i'm often scared to <a href='https://open.spotify.com/track/5cZqsjVs6MevCnAkasbEOX?si=db638ed9d9d04dad'>Break Stuff</a>, because i tend to be a stupid idiot\n" +
        "i'm still sure we'll always have our <a href='https://open.spotify.com/track/2HYFX63wP3otVIvopRS99Z?si=d63ffb61f39e4c7a'>Houdini</a> moment, and make anything work out\n" +
        "the young, little Marco thought to himself: <a href='https://open.spotify.com/track/6TfBA04WJ3X1d1wXhaCFVT?si=ca0c7ba0a2494007'>You're Gonna Go Far, Kid</a>\nand he was right, because i'm here, with you by my side\n" +
        "and while it's obsolete to say this... <a href='https://open.spotify.com/track/2GxrNKugF82CnoRFbQfzPf?si=b3ff66fb05224465'>i like the way you kiss me</a>, like... <b>really</b> like it...\n" +
        "little Marco would probably think i am <a href='https://open.spotify.com/track/3SFXsFpeGmBTtQvKiwYMDA?si=922654ab9f3945ae'>Pretty Fly</a>, since i have such a beautiful and perfect woman by my side\n" +
        "at the start of 2024 i really thought my feelings would stay <a href='https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h?si=715654aa84ba4996'>Numb</a>\n" +
        "that i would have to suffer and <a href='https://open.spotify.com/track/0UFDKFqW2oGspYeYqo9wjA?si=c5135d5539824598'>Bleed It Out</a>\n" +
        "'<a href='https://open.spotify.com/track/3fgehc497TFqKH1zBL2YNK?si=2aa2ed7cbefd426a'>Heavy Is the Crown</a>', i thought to myself, trying to cheer up\n" +
        "i started getting <a href='https://open.spotify.com/track/1VbsSYNXKBpjPvqddk8zjs?si=48c227efef2e466c'>Rusted From the Rain</a>, feeling down\n" +
        "but with you by my side, i feel like we're <a href='https://open.spotify.com/track/7j31rVgGX9Q2blT92VBEA0?si=1c588d03ac5b4d30'>Teenagers</a> madly in love with eachother\n" +
        "and while i am <a href='https://open.spotify.com/track/0jqK7sGTLsHPkQrrcrGuKD?si=6aa25d3baacf4c19'>Still Waiting</a> for you to come to Austria\n" +
        "i'll try and prepare myself to not <a href='https://open.spotify.com/track/4Yf5bqU3NK4kNOypcrLYwU?si=2343757ac78e482f'>Faint</a> once it really happens\n" +
        "it is <a href='https://open.spotify.com/track/2m1hi0nfMR9vdGC8UcrnwU?si=650199f1f1f2496f'>All The Small Things</a> you do, that really fill my heart\n" +
        "i am sure we will never ever be <a href='https://open.spotify.com/track/3t4IkHfT4eXZggkupi4SUe?si=f3867da5e81442c7'>Over Each Other</a>\n" +
        "because i just <a href='https://open.spotify.com/track/3ZOEytgrvLwQaqXreDs2Jx?si=ccb360d381c2419d'>Can't Stop</a> loving you so, so much\n" +
        "i wanna be <a href='https://open.spotify.com/track/3IV4swNduIRunHREK80owz?si=610d797f11374b0f'>Rollin'</a> with you for the rest of my life\n" +
        "and while boys <a href='https://open.spotify.com/track/2yss0n7KmvmSr4EHvjfFpn?si=df6009e4447444b2'>Don't Stay</a>, i promise to be the man that does.\n" +
        "i bet the old people at the greek restauraunt today thought <a href='https://open.spotify.com/track/4EchqUKQ3qAQuRNKmeIpnf?si=eb0dc3312c1d4b5d'>The Kids Aren't Alright</a>, when they heard us talking about video games and stuff... hihi\n" +
        "i will never ever <a href='https://open.spotify.com/track/5mFZipkX1HZ4Idz5LOWpzq?si=33fcb4c7fd5b460c'>Cut the Bridge</a> between our hearts\n" +
        "and i'm glad neither one of us is an <a href='https://open.spotify.com/track/6nTiIhLmQ3FWhvrGafw2zj?si=f769041bd2d345b2'>American Idiot</a>, because we made the right choice when voting for who we want by our side\n" +
        "I <a href='https://open.spotify.com/track/6hwQ69v7VbPhTTR2fOtYX7?si=b31cc06ab0c54ce0'>Want You Bad</a>, like really bad, i want to kiss you right now\n" +
        "whatever you want to do together, <a href='https://open.spotify.com/track/0JJP0IS4w0fJx01EcrfkDe?si=cbf251e525804ce9'>Dear Bianca, Count Me In</a> <i>(might've messed with the title here, hihi)</i>\n" +
        "without you, my heart would just be a <a href='https://open.spotify.com/track/3lPr8ghNDBLc2uZovNyLs9?si=5e254e85b87a4ea3'>Supermassive Black Hole</a>\n" +
        "we can do anything together, because <a href='https://open.spotify.com/track/0W4N0KzHKWQp2Wn1Mf6uMa?si=0e4a5f6a726143c3'>We Got the Moves</a>\n" +
        "and our love <a href='https://open.spotify.com/track/4CeeEOM32jQcH3eN9Q2dGj?si=90bb3cee37074a27'>Smells Like Teen Spirit</a>\n" +
        "you make my heart go <a href='https://open.spotify.com/track/5tXgNRHlUyfrc7P5GgpwnI?si=e44ffc23f3de4c1f'>Hypa Hypa</a> every single day, and it never stops\n" +
        "if i only had <a href='https://open.spotify.com/track/4vJk5lD1Lk89jgBOk8E7zK?si=03fffe119f944e8e'>One Last Dance</a> in life, i'd want to have it with you\n" +
        "and while some of your past partners were the embodiment of <a href='https://open.spotify.com/track/2PnlsTsOTLE5jnBnNe2K0A?si=bab29ebac9bd420e'>The Emptiness Machine</a>\n" +
        "and said that <a href='https://open.spotify.com/track/0rmGAIH9LNJewFw7nKzZnc?si=3045957ca13f43ef'>You Give Love A Bad Name</a>, and put the blame on you\n" +
        "those were all just some <a href='https://open.spotify.com/track/3jUTjCISntIUFL8jnAjzgc?si=7b3ca5033d6c42e9'>Fallen Leaves</a>, that don't have true meaning behind them\n" +
        "yes, they may have <a href='https://open.spotify.com/track/0J1IJsMbKWb5g2sJArTkGF?si=138ac166b2ef46c3'>Stained</a> your past,\nbut that does not stop us, from having our beautiful future together\n" +
        "because <a href='https://open.spotify.com/track/1RQ50jZIxLYHd09bGo5jWk?si=903e47922b344f9d'>Everytime We Touch</a>, my emotions skyrocket, in a surge of pure happiness\n" +
        "the others may have left you, <a href='https://open.spotify.com/track/6diTGCtoRTj198zL0v2RIO?si=3a85e54269004b0b'>Okay, But This Is The Last Time</a> you had to fall in love, because i am here to stay, and i don't plan on ever leaving\n" +
        "even if one day it's gonna be <a href='https://open.spotify.com/track/1KHKeIouP04dDtl0EetgED?si=c198ad07126f4521'>The Downfall Of Us All</a>\n" +
        "i will stay with you, for <a href='https://open.spotify.com/track/5UWwZ5lm5PKu6eKsHAGxOk?si=93954abd48414c13'>Everlong</a>\n",
        "<h2>a wish</h2><b>if i had one wish right now</b>\none wish to shape my future\n<b>without hesitation, i'd wish for you</b>\ni'd wish for us, for us to be forever\n\n" +
        "<b>wish for you to lay by my side</b>\nso i can scratch your back, and kiss you<b>\nkiss your forehead, your cheeks, your hands</b>\nbut most importantly your beautiful, soft lips\n\n" +
        "<b>wish for us to be together here</b>\nto build your little gaming room\n<b>to decorate it together, just us</b>\nto build our own little home, how we want it\n\n" +
        "<b>wish for us to walk the old town together</b>\nto look at all the cute christmas decorations\n<b>and to see you smile because of them</b>\nseeing you smile so excitedly makes me happy\n\n" +
        "<b>wish for us to snuggle up every night</b>\nwatching our shows and movies together\n<b>cracking jokes and tearing up, you and me</b>\nsharing those wonderful little moments together\n\n" +
        "<b>wish to be able to truly convey how i feel</b>\ni think about all these things i said\n<b>multiple times a day, every day</b>\nand i really mean it when i say\n" +
        "<b>never ever have i wanted something as much</b>\nas i want to be able to be with you\n<b>to call you my wife, and live our lifes together</b>\nevery single day, i fall in love with you\n\n" +
        "<b>and every single day, that love grows stronger... &#10084;</b>",
        "<h2>walk</h2><b>i want to go on a walk with you</b>\na walk during spring\n\n" +
        "<b>seeing all those pretty flowers blossom</b>\nfinally hearing birds chirp vividly again\n<b>with the last remainder of snow</b>\nbeing pierced by saturated greens\n\n" +
        "<b>i want to go on a walk with you</b>\na walk during summer\n\n" +
        "<b>somewhere calm along the water</b>\nbreathing in warm, humid summer air\n<b>walking along shores and river banks</b>\npassively bathing in the sun\n\n" +
        "<b>i want to go on a walk with you</b>\na walk during autumn\n\n" +
        "<b>walking through the parks in our city</b>\nleaves on the ground, children playing around\n<b>all those orange, yellow, red, brown hues</b>\nso colorful, and pretty, just like you\n\n" +
        "<b>i want to go on a walk with you</b>\na walk during winter\n\n" +
        "<b>hearing the snow crunch beneath our boots</b>\nfreezing air, but cozy & warm mitten and clothes\n<b>festive decorations and sweet treats at every corner</b>\nwith the prettiest snowflakes falling onto our little heads <3",
        "<b>in your eyes, i see the stars align</b>\nyour love so pure, it feels divine\n<b>for all you give, and all you do</b>\ni'm so endlessly grateful, grateful for you\n\n" +
        "<b>in your heart, i see it day by day</b>\nso much love, that won't ever decay\n<b>each step you take, to make us two whole</b>\ndeepens our love, our bond, our soul\n\n" +
        "<b>each second with you, is a treasure so rare</b>\nmy world is full of joy, when you are there\n<b>our laughing echoes, our hearts entwine</b>\ni'll give it my all, to make you mine\n\n" +
        "<b>tonight, i glimpsed a life with you</b>\nmy biggest dream, come brightly true\n<b>thank you dear, for taking time and showing me</b>\nthat my cozy home, is wherever you choose to be <3",
                "<b>people say life will never be like movies, or shows</b>\nthat the things that happen there are purely fictional\n<b>that love like that could never exist for real</b>\nand those people are right... kind of\n\n" +
        "<b>there will never be love without tears</b>\nwithout disasgreements, sadness, and even arguments\n<b>never without ups and downs</b>\nand never without difficult or challenging times\n\n" +
        "<b>but what these people don't know...</b>\nis that there can be love as strong as in fiction\n<b>like the kind that Mikasa feels for Eren</b>\nit sometimes reminds me of my feelings for you\n\n" +
        "<b>because no matter what happens</b>\nno matter how challenging things might be\n<b>i will stay by your side, i won't leave</b>\nif you ever want to get rid of me, it's gonna have to be you who does it\n\n" +
        "<b>no matter what you say or do</b>\nno matter how upset or hurt i should be\n<b>i will never leave you, because i love you</b>\ni truly love you, with all that i have\n\n" +
        "<b>the times where people hurt you</b>\nand where people only care about themselves\n<b>those times are over, because i only care about you</b>\ni'll fight through anything, in order to be with you\n\n" +
        "<b>and i will not stop before we grow old</b>\nbefore we move in together\n<b>before we live our everyday lifes together</b>\nand before we share the same last name\n\n<b>i'm here for the long run bianca, and i've never been an early quitter <3</b>",
        "<h2>how?</h2>how do you do it?\ni really want to know\nwhat is your secret, your key\nthat makes me so endlessly happy\n\n" +
        "when you're cuddling with me\nwhen we're watching shows together\nwhen you laugh about my jokes\n... when you say 'i love you'\n\n" +
        "there is no single other thing on earth\nno other thing in this universe\nthat makes me feel so carefree\nthat makes me feel in love with you, limitless\n\n" +
        "whatever you are doing\nplesae keep doing it, i beg you\nkeep doing what you're doing\nand please do it even more\n\n" +
        "i know this is just words on your phone screen\ni know i'm not even saying it out loud\nyou're just reading it, but please\nplease keep doing it, as much and often as you can\n\n" +
        "there is nothing in this world\nthat makes me even remotely as happy as you do\ni am addicted, but i'm proudly addicted\naddicted to you, and the ways you love me\n\n" +
        "the last months felt so surreal\nbecause i can't believe it came ot of nowhere\nfinding the one i truly want to be with\nand matching like a puzzle in so, so many aspects\n\n" +
        "of course sometimes we disagree\nsome pieces in the puzzle aren't a perfect fit\nsome have wiggle room, some scratched paint\nbut you can still make a beautiful puzzle out of them\n\n" +
        "and i want to build a puzzle with you\nthat spans over a lifetime\na puzzle of all our memories\nbecause we are meant for eachother\n\n" +
        "i want to build this puzzle\nwith noone else but you\ni am yours, truly yours, and i am so proud to be\nso please, will you be mine, for eternity? &#10084;",
        "<b>i will never stop texting you good morning</b>\nyou are the reason my mornings are great\nso i'll try me best to make yours great too\neven if its just a teeny tiny message\n\n" +
        "<b>i will never stop making you compliments</b>\nbecause my words will never be enough\nto actually encapsule your beauty\nfor you are the most gorgeous woman in the world in my eyes\n\n" +
        "<b>i will never stop gaming with you</b>\nbecause you make everything so much more fun\nthe jokes we crack, hearing your pretty laugh\nand having our own little hype moments together\n\n" +
        "<b>i will never stop watching shows with you</b>\nbecause you always teach me new things\nand it's so cute when you're invested in the story\nit makes me smile and giggle everytime\n\n" +
        "<b>i will never stop writing these texts</b>\nbecause no words can describe my true feelings\nbut i will keep trying everday\nas long as it makes you smile even a little bit\n\n" +
        "<b>lastly... i will never stop loving you</b>\nbecause you showed me what true love means\nand i want to give everything i have\nto try and make your life as beautiful as possible for a simple man like me\n\n" +
        "i am yours, and only yours. you won my heart, not just one time, but you win it once more every single day i am with you",
                "<h2>thank you</h2>\nthank you for always being there for me\nthank you for listening to my concerns\nthank you for being there when i overthink\nthank you for doing all those little things\nthank you for telling me where you're going" +
        "\nthank you for telling me who you're calling with\nthank you for telling me how you truly feel\nthank you for telling me what concerns you\nthank you for telling me your bad thoughts\nthank you for telling me your fears\n" +
        "thank you for trusting me\nthank you for watching shows with me\nthank you for making me smile\nthank you for making me happy\nthank you for making my life so much better\nthank you for loving me\n" +
        "thank you for making me compliments\nthank you for calling me cute\nthank you for telling me you love me\nthank you for sending cute couple memes\nthank you for cuddling with me\nthank you for being there at all times\n" +
        "thank you for not judging me\nthank you for understanding me\nthank you for laughing at my bad jokes\nthank you for spending time with me\nthank you for texting with me everyday\nthank you for putting up with my annoying fears\n" +
        "thank you for giving me security\nthank you for telling me all those cute things\nthank you for being the missing puzzle piece\nthank you for staying by my side\nthank you for being my beautiful girlfriend\nthank you for" +
        "playing games with me\nthank you for letting me hear your voice\nthank you for being the cutest girl in the world\nthank you for being so unbelievably perfect\nthank you for being so, so gorgeous\nthank you for being insanely hot\n" +
        "thank you for not expecting me to be 'a man' at all times\nthank you for allowing me to cry\nthank you for caring about me\nthank you for showing empathy for all my delusions\nthank you for loving me\n" +
        "<b>thank you... thank you for everything</b>\n\nthere is so much more that i want to thank you for, and no matter how often i say it, i feel like it's never enough... so i want to keep saying it, and keep saying it" +
        "and keep saying it... until i've said it enough... i don't think that moment will ever come... so i'll keep thanking you for all that you do, for all the things, and for being the woman i am able to love with all my heart\n\n" +
        "<b>thank you for everything, bianca <3</b>",
        "<h2>i'm sorry</h2>i'm sorry for being complicated at times\ni'm sorry for letting you down\ni'm sorry for bringing you into these situations\ni'm sorry you have to overthink so much\ni'm sorry i can't give you the security you need\ni'm sorry sometimes can't love you properly\ni'm sorry for crying so much\ni'm sorry for being stubborn\ni'm sorry for making you cry\ni'm sorry for being stupid\ni'm sorry for being weak at times\ni'm sorry for getting mad sometimes\ni'm sorry for acting erratic sometimes\ni'm sorry for sometimes saying things badly\ni'm sorry for not listening to you\ni'm sorry for treating you poorly\ni'm sorry for not loving you properly\ni'm sorry for not loving you enough\ni'm sorry for not being able to express my love\ni'm sorry for pulling you down\ni'm sorry for being a burden\ni'm sorry for all the things i did\ni'm sorry for the times i made your life worse\ni'm sorry for every single mistake i have made in the past\n\ni feel very guilty today, i don't know why... i really don't want to lose you... i just want to make you smile, and see you happy, yet i achieve the opposite way too often, i keep fucking up the smallest things, mention things in stupid ways and at stupid times, and am too stubborn to listen at times.... and i really dislike myself for that. i just want to try and be the perfect man for you, i really am trying, but i don't always succeed.\ni'm scared one day the bad i do will outweigh the good, and that one day you'll see that you're possibly just wasting your time by loving me... i don't want that day to come, i want to do the rights things\n\ni promise you, from all my heart, all the way deep inside where my love resides, i promies you the only reason i act the way i do, is because i really want to spend my life with you, you are not a fun toy, not a girl for a year, not anything like that, you are the one who i want to call my wife, no matter how hard the way to the altar might be, i'm ready to face every challenge we'll be put into, together with you, i want to fight by your side, for us, for you... and i want nothing more than to spend time with you, and be with you, and laugh with you... you are all i need, and all i want in life, and i want you all for myself, forever, without anyone standing between us... this is the only reason i act the way i do, because i love you so endlessly, i really do love you, i love you like no one has loved you before, yet i don't know how to properly express my love for you, because i am not yet capable of doing so, and i hope i someday will be... i promise you, i am trying my hardest, i really am, i am giving my best to try and make you happy and be there for you, i dont care about anything else, i do not give a single care in the world about anything besides you, anything besides you being happy... and i want to keep on fighting until the day i die, i want to love you, until time itself is no more, i love you bianca, i love you with all my heart, and i really mean it... i don't ever want to lose you, please let me keep trying to be the man of your dreams... i know i'm far from being there... but i know i'm at least doing some things right... and i want to be allowed to fix the things i am still struggling with, because i know i can do it, we can do it... i love you bianca, and i hope you still love me too <3\n\nplease, my only wish is to be by your side",
        "<h2>haiku</h2><b>Haikus are traditoinal japanese poems, that consist of three lines with the syllable pattern 5-7-5, often associated with nature, I wanted to try myself, and wrote three of them for you today</b>\n\n" +
        "Your eyes, brown and green,\nforest earth, and sunlit leaves,\nnature's masterpiece.\n\nYour voice, like a breeze\nwhispers through the green-leaved trees\nnature's melody\n\nYour heart, pure as light\na beacon, in stormy skies\nguiding my soul home\n",
        "<h2>you are everything</h2>yes, you read that right\nyou are everything\nwell, to me at least\nyou're all i want, and all i need\n\n" +
        "i love the instagram nickname feature\nbecause now you are 'Bebo' on insta too\nthat's who you are\nyou are everything...\n\n" +
        "my bebo, my princess, my darling, my love\nmy happiness, my reason to wake up, my sweetheart\nmy joy, my last thought before falling asleep\nmy beautiful girl, and future wife\n\n" +
        "when i spend time with you\ni'm the happiest i could ever be\nand if i only could\ni would be with you 24/7\n\n" +
        "the only thing i think about\nall day long, at work, on the road\nis to spend time with you again\nand to hear your soothing voice\n\n" +
        "you are what i love the most\nwhat makes every day worth living\nwhat makes me smile, laugh, cry\nyou are <b>my everything</b>\n\n" +
        "and i am endlessly thankful, that it is you, in the exact way your are, with all your little perfect imperfections, and nobody else," +
        "because i want nobody else, everything i want has six letters in her name, lives in a pretty town in bavaria, and has the prettiest face," +
        "cutest smile, most heartwarming laugh, most insanely gorgeous body, and is a whopping 1000/10 package, in every single way <3",
                "",
        "",
        "<h2>i am sure</h2>i am 100% sure bianca\n100% sure that i want to be with you\nto spend the rest of my life with you\nand to give it my all for you\n\n" +
        "you wanna know why?\ni've seen you laugh, smile, love me\nbut i've also seen your lows\nyour insecurities and perfect imperfections\n\n" +
        "your trauma, your doubts\ni've seen you tremble, even scared\ni've seen you upset, and full of regret\ni've seen you ready to throw it all away\n\n" +
        "and yet? i love you, everything about you\nnot once have i stopped loving you\nnot once have i even doubted my love\nand not once did i think about giving up\n\n" +
        "because you are way too perfect\nway too perfect to just give up\ni want to fight, cry, beat myself up\ni'm ready to do anything to be with you\n\n" +
        "i've told you, and i'll tell you again\ni am not giving you up\nno matter what happens\ni will stay by your side\n\n" +
        "because i truly do love you\nand i truly do want to make you happy\nand want to become the perfect man\n... to become your husband\n\n" +
        "because i have a dream\nthat one day you'll proudly call me that\nyour husband, not just for ourselves\nbut also in front of others\n\n" +
        "to be the one you proudly introduce\nto your friends, your family\nyour enemies, the people you dislike\nand in front of all other females around us\n\n" +
        "because i am yours\nand i will forever be yours\njust yours, because that's all i want\nto be the husband you're proud of <3",
                "<h2>love</h2>it's the most natural thing to be jealous\nto fear of losing someone\nand i will never ever judge you for that\nbecause i feel the same way\n\n" +
        "i am scared to lose you\ni am so scared to lose the one i love\nthe one i want to spend my life with\nthe one i want to call my wife\n\n" +
        "and not just 'the one', but the only one\nthat is able to make me feel that way\nand that person is you, bianca\ni am scared to lose YOU.\n\n" +
        "never once in my life was i more sure\nthat i want to be with someone forever\nthat i want to spend my life with that person\nthat i want to be the love of that person's life\n\n" +
        "and i have to confess something to you\ntoday when i laid in bed\nand thanked your for asking to come to austria\ni cried, because i was so happy\n\n" +
        "finally getting to spend a night with you\nfinally getting to hold you in my arms\nfinally getting to kiss you goodnight\nfinally getting to wake up next to you\n\n" +
        "you are making my dreams come true\nyou are the one who makes me happy\nyou are the one who makes me feel loved\nyou make me feel all those things, like nobody else can\n\n" +
        "i do not want to be with someone\ni want to be with you bianca\nnobody even remotely comes close to you\nyou are the one i want to be with\n\n" +
        "and i am so looking forward to being with you\nto cuddle wit you, fall asleep next to you\ngo shopping with you, cook dinner\nto watch the aot finale with you\n\n" +
        "and most importantly, to make our wish come true\ngo look at all the cute things at the xmas markets\nand to see you smile, because of them\nbecause seeing you smile makes me happy\n\n" +
        "i know i've told you this already\nbut you not only have the cutest voice\nbut also the most adorable laugh\nand the prettiest smile\n\n" +
        "just looking at your pretty face makes me grin\ni'm so happy when i see your beautiful eyes\nit's like everything else around me fades\nand all i see is you, and your perfection\n\n" +
        "to this day i do not know how you do it\nhow you make me feel so happy\nhow you make me feel so loved\nhow you make me feel so special\n\n" +
        "but somehow you manage to do it\nand i never ever want it to stop\nand i want to make you feel just the same way\nbecause you deserve it more than anyone else\n\n" +
        "after all the things you've been through\nall the things you had to suffer through\nyou deserve nothing but the best\nprincess treatment and endless love for the rest of your life\n\n" +
        "and i want to be the one to give it to you\nthe one to make you feel loved\nthe one to make you feel special\nthe one to make you feel happy\n\n" +
        "please allow me to be the one\ni know others have hurt you\nand i know others have left you\nbut i will stay, no matter what happens\n\n" +
        "you are not a burden\nyou are not complicated\nyou are not difficult\nyou are not a problem\n\n" +
        "no matter how broken you think you are\nno matter how much you think you're not worth it\nno matter how much you think you're not enough\nyou are perfect, just the way you are\n\n" +
        "and nothing will ever change that\nnot even the worst things you've done\nnot even the worst things you've said\nnot even the worst things you've thought\n\n" +
        "nothing will change my mind\nnothing will change my heart\nnothing will change my love\nnothing will change my feelings\n\n" +
        "because you are all i want\nyou are all i need\nyou are all i love\nyou are all i care about\n\n" +
        "and i will never ever stop loving you\ni will never ever stop caring about you\ni will never ever stop thinking about you\ni will never ever stop wanting you\n\n" +
        "there's so much me still need to do\nso much we still need to experience\nso much we still need to see\nso much we still need to feel\n\n" +
        "we have not been to a christmas market yet\nwe haven't watched vampire diaries yet\nwe haven't been on vacation yet\nwe haven't seen lapland yet\n\n" +
        "we haven't been to a spa together yet\nwe haven't seen new york at christmas time\nwe haven't seen the northern lights yet\nwe haven't seen dozens of lanterns fly into the sky yet\n\n" +
        "i still didn't take you out to nuba bar\ni still haven't shown you our office like the nerd i am\ni still haven't covered you in 1000 blankets during winter\ni still didn't get to kiss you goodnight\n\n" +
        "and i want to do all those things\ni want to do all those things with you\ni want to do all those things for you\ni want to do all those things because of you\n\n" +
        "and you are the only person i want to do them with\nthe only one to share the joy with\nthe only one to share the happiness with\nthe only one to share the love with\n\n" +
        "and i am so looking forward to it\ni am so looking forward to all of it\ni am so looking forward to you\ni am so looking forward to us\n\n" +
        "because i am certain, bianca\nthat we will be forever\nthis is our last love, because it's stronger than ever\nand i am the happiest man on earth, because i have you\n\n" +
        "and you know what else we didn't do yet...?\ni didn't get to see your in a red dress yet\nand i especially didn't yet get to see you in a white one\nand we both haven't said 'i do' yet... <3\n\n",
                "<h2>keeping you safe</h2><b>when darkness comes and fear takes hold</b>\ni'll be your shield, your warmth from cold\n<b>no harm will reach, no pain will stay</b>\ni'll stand beside you, come what may\n\n" +
        "<b>when life feels heavy, and you feel small</b>\nlean on me, i'll break your fall\n<b>a rock, unshaken for you to lean</b>\nto hold you steady, through fears unseen\n\n" +
        "<b>at your worst, when tears might flow</b>\ni'll be the place where you can always go\n<b>a steady hand, a soft embrace</b>\nwiping the tears off your beautiful face\n\n" +
        "<b>i promise, my love, with all my heart</b>\ni'll keep you safe, and never part\n<b>through every storm and every fight</b>\ni'll make you smile before morninglight\n\n" +
        "<b>please trust in me, i'll always be near</b>\nto guard your heart, and calm your fear\n<b>forever yours, i'm here to stay</b>\nprotecting you with all i have, every step of the way\n\n",
                "<h2>holding you close</h2><b>at the xmas market, beneath twinkling lights</b>\ni'll hold your hand through the festive nights\n<b>with every step, your warmth in mine</b>\ntogether, we'll make every moment shine\n\n" +
        "<b>on the train, as the world rushes past</b>\ni'll hug you close, make the moment last\n<b>your head on my shoulder, your hand in my own</b>\nin your presence, I've found my home\n\n" +
        "<b>in bed at night, as the world turns still</b>\ni'll hold you tight, through the evening's chill\n<b>your heartbeat steady, your breath so near</b>\nwrapped in your love, there's nothing to fear\n\n" +
        "<b>watching movies, as laughter fills the air</b>\ni'll reach for your hand, to show I care\n<b>a gentle touch, a simple sign</b>\nreminding you always, you're forever mine\n\n" +
        "<b>when I gaze into your pretty eyes</b>\ni see my future, where love never dies\n<b>i'll hold your hand, forever, my dear</b>\nand keep you close, year after year\n\n",
        "<h2>always here for you</h2><b>no matter how others have made you feel</b>\ni'll show you love, steady and real\n<b>your words will never meet anger or blame</b>\ni'll ensure you'll never have to feel shame\n\n" +
        "<b>your concerns, your wishes, your every plea</b>\nare treasures to share safely with me\n<b>i'll hold your heart, your fears, your voice</b>\nwith care and love, your perfect choice\n\n" +
        "<b>when the world feels cold and leaves you unheard</b>\ni'll be your shelter, and hold every word\n<b>your happiness, love, is my only goal</b>\nto keep you safe and make you whole\n\n" +
        "<b>you're my princess, my world, my light</b>\nthe reason I strive, my heart's delight\n<b>i'll do whatever it takes to make you see</b>\nthat your love means everything to me\n\n" +
        "<b>so trust in my arms, my unwavering care</b>\ni'll listen and cherish, and always be there\n<b>for you, my love, are my greatest part</b>\nthe queen of my soul, the beat of my heart\n\n",
        	"<h2>jealousy</h2>today might not be much of a poem\nbut i want you to know\nthat i am often jealous\neven if i didn't always say it\n\n" +
		"please know the things i thought\nare just the things i'm scared off\ni know they're not the truth...\nbecause you've proven me the opposite <3\n\n" +
		"when you call with Manu late at night?\ni was so jealous, why not me?\nam i too boring to talk to?\nis he more fun than me?\n\n" +
		"does he make you laugh more than i do?\nand when you're with him\ndo you even think of me?\nwhat if i lose you to him?\n\n" +
		"when eric called you 'my bianca' and 'schatz'\ni was so close to snapping\ni had a message ready in his dm\ni didn't want to send it though...\n\n" +
		"because i know it could backfire\nand i know you would not want that\nbut i was so close to sending it\nwho the hell is he?\n\n" +
		"thinking he can call you those things?\nwho does this fucking guy think he is\nacting like your boyfriend...\nhe can fuck right off with that, or i'll make sure he does\n\n" +
		"when satch makes nasty comments\nmy blood starts boiling\nyou've heard me tell him to shut up\ni did it multiple times already\n\n" +
		"but that's just the tip of the iceberg\nof the things i'd want to say\nthe things i can't say yet\nyou don't know how protective my head is\n\n" +
		"when tim made you laugh\nand when he made flirty comments\ni often muted and screamed in anger\nto let out the words i can't say to his face\n\n" +
		"when you're so in-talk with jessi\nthat you don't even hear my comments\ndo you care about me when she's there?\nam i really that forgettable so fast?\n\n" +
		"when you told me someones 'younger brother'\nis joining for the christmas market\nand he was 24? why that phrasing?\nwhy would you call him that?\n\n" +
		"i had to ask first to find out\nwho is he? why did you word it like that?\nare you interested in him?\nis he attractie, and you don't want to admit it?\n\n" +
		"people in twitch chat\npeople you talk about\npeople that message you that i've not heard of\npeople that you text with...\n\n" +
		"i was jealous lots of times already...\nbut i didn't want to admit it\nbecause i didn't want to be a burden\ni am so scared you'll find someone better\n\n" +
		"someone that makes you laugh more\nsomeone that makes you feel better\nsomeone that makes you feel more loved\nsomeone that makes you feel more special\n\n" +
		"because i sometimes feel like i'm not doing good enough\ni'm trying my very best, but you're so perfect\ncan i ever be enough for you? a guy like me?\ni don't know... but i'll never stop trying!\n\n" +
		"and those were not even all of the times\nnot close to all the times i was jealous\nbecause i overthink a lot, just like you\nand i'm scared of losing you\n\n" +
		"i love you so much, my dear bianca\ni hope you know that\ni hope you know that i'm trying my best\nand you really are, the most important and most loved person in the world to me <3\n\n",
	"<h2>the future</h2>the future is a scary place\nfull of unknowns, full of fears\nbut one thing i know for sure\nis that i want you there\n\n" +
        "i know the weekend that you visit\nis going to have lots of new situations\nand i know you worry about those, but i promise\ni'll be there with you, every step of the way\n\n" +
        "i am 100% sure my mom will love you\ni am 100% sure vienna with fatih will be fun\ni am 100% sure the christmas market will be beautiful\nand i am 100% my friends will love you too\n\n" +
        "i know you're afraid something might happen\nthat someone might not like you\nor that you'll say a wrong thing\nbut no matter what happens, i'll be there\n\n" +
        "and i will not let anything happen to you\ni will not let anyone hurt you\ni will not let anyone make you feel bad\ni will not let anyone make you cry\n\n" +
        "not happening, no matter what\ni will be there for you\ni will be there with you\ni will be there to protect you\n\n" +
        "you are perfect, just the way you are\nand i will not let anyone tell you otherwise\ni will not let anyone make you feel bad\ni will not let anyone make you feel insecure\n\n" +
        "and regardless... i'm certain nothing will happen\nyou are worried about all the little things\n'what if something goes wrong, or something happens?'\nbut i promise you, everything will be fine\n\n" +
        "while the future may be scary when you overthink\ni don't want to imagine any future without you\nany future where i'm not your husband\nand any future where you're not my wife\n\n" +
        "because at the end of the story\nit's gonna be our little big love story\nand i want to be the one to write it with you\nand the one to live it with you.\n",
    	"<h2>thanks</h2>i don't have much energy today\ni'm feeling really heavy\nand my brain isn't braining much\nso today is rather short\n\n" +
    	"thank you for being there for me\nand for doing your best to cheer me up\nfor being there when i'm down\nand loving me no matter what\n\n" +
    	"i really do love you bianca\nbecause you are the most beautiful girl in the world\nphysically & visually, but also character-wise\nthank you for caring\n\n" +
    	"i don't think anybody cared before you\nat least not as much as you do\nand i am truly thankful for that\nand want to offer you the same love\n\n" +
    	"i am so looking forward to cuddling you\nand to kiss you, and your face\nto spend time with you and laugh with you\nonly 10 more days <3",
	            "<h2>presence</h2>your presence is a gift\na treasure, a delight\na beacon in the night\na comfort, a light\n\n" +
        "your presence is a joy\na wonder, a thrill\na medicine for every ill\na love that's real\n\n" +
        "your presence is a dream\na hope, a grace\nthe brightest smile on my face\nthe warmest embrace\n\n" +
        "your presence is a home\na shelter to take care\na true love beyond compare\nand the strongest bond we share\n\n" +
        "you don't even have to do anything\njust you being with me makes me happy\nmore happy than anyone ever could\nand i am so thankful for that\n\n" +
        "you are my everything, my love\nmy best friend, my companion, my soulmate\nmy lover, my dream girl, and most importantly\nmy future wife - thanks for being in my life <3\n\n" +
        "i sometimes ask myself\nhow the people before me were so dumb\nto treat you like they did\nand ever let you go, let you leave\n\n" +
        "i feel like asking them\n'what the hell were you thinking?'\n'how could you ever let her go?'\n'how could you ever make her cry?'\n\n" +
        "but then i realized...\ni want to shake their hand, and thank them\n'thank you for being so stupid'\n'thank you for not seeing her worth'\n\n" +
        "because if they hadn't been so dumb\ni would have never met you\ni would have never fallen in love with you\nand i would have never been able to call you my beautiful little princess <3\n",
	            "<h2>your eyes</h2>your eyes are like the stars\nbright, beautiful, and clear\nthey light up the night\nand make everything feel right\n\n" +
        "i can't even wait to finally look into them again\nto see the sparkle in them\nto try and fill them with happiness\nand to make you feel loved\n\n" +
        "becuase you deserve nothing less than the world\nand i want to give you everything\ni want to make you feel special\nand i want to make you feel loved\n\n" +
        "that is the only wish i have\nthe only thing i really want\nthe only thing i really need\nand the only thing i really care about\n\n" +
        "making you happy, because you are perfect\nmaking you smile, because you are beautiful\nmaking you laugh, because it's my favorite sound\nmaking you feel loved, because you deserve it\n\n" +
        "and even when days are bad\nand when you feel down\ni want to be there for you\nand make you feel better\n\n" +
        "i really hope i could achieve this today\neven with everything going in\ni still hope i made your day even the tiniest bit better\nand i hope i could make you smile\n\n",
    	        "<h2>superpowers</h2>i dream of powers, far and wide\nto <b>teleport</b> right by your side\nno distance vast, no time to steal\ntogether, by your side for real\n\n" +
        "with <b>telepathy</b>, i'd let you see\nthe dephts, of what you truly mean to me\neach hidden thought, inside my head\neach whispered word, each tear i shed\n\n" +
        "to <b>materialize</b> treasures, food, and more\nyour every wish, i'd bring ashore\na feast, a gift, a smile, a kiss\na world of wonder, the purest bliss\n\n" +
        "and last if i could, i'd <b>stop the time</b>\nso every glance, every touch, every rhyme\nwould last forever, in endless grace\nour love, a never-ending embrace\n\n",
	    "<h2>life</h2>when i say i want to live my live with you\ni don't just mean cute dates, and cuddles\nroad trips, vacations, social media couple goals\nor flowers, love letters and poems\n\n" +
        "i mean waking up next to you\ni mean making breakfast, brewing coffee\ni mean writing the grocery shopping list\ni mean doing the laundry, and cleaning the house\n\n" +
        "i mean watching shows together\ni mean gaming together\ni mean cooking dinner together\ni mean going to bed together\n\n" +
        "i mean talking about our days\ni mean discussing our future\ni mean planning our lives\ni mean dreaming about our future\n\n" +
        "i mean buying furniture, and decorations\nholding hands on the drive there\npicking out the perfect pieces\nand building our life together\n\n" +
        "i mean wandering aimlessly on walks with you\ni mean sitting in silence, just enjoying each other's presence\ni mean laughing at stupid jokes\ni mean making fun of each other\n\n" +
        "i mean singing in the car\ni mean dancing in the kitchen\ni mean pillow fights when changing the sheets\ni mean lying under the stars with you\n\n" +
        "i want all those things in life\ni want to experience all those things with you\nand with nobody, but you\nbecause you are the one for eternity, and beyond\n\n",
    	"<h2>choice</h2>no matter who wants to burst into my life\nno matter how friendly they are\nno matter how pretty they are\nno matter what their body looks like\n\n" +
    	"i do not care a single bit\ni made my choice. months ago.\nand my choice is you, my love\nbecause in my eyes, you are perfection\n\n" +
    	"if someone else ever comes near me\nno matter how pretty they are\nto me, they're not nearly as pretty as you\n\n" +
    	"no matter how cute they act\nto me, they'll never be as insanely cute as you\nno matter what their body is like\nto me, they'll never be as stunningly gorgeous as you\n\n" +
    	"because that person is not you\nbut it is you, who i love, and only you\nbecause you are the only person that is you\nand thus, the only person i love, and want\n\n" +
    	"please don't ever be scared\nyou are perfect to me in every way\nand i can't even think about ever giving you up\nor how anyone could possibly be 'better than you'\n\n" +
    	"because no matter how silly it sounds\nto me, you are perfection, just the way you are\nwith all your perfect imperfections\nevery dimple, every pimple, every little scar\n\n" +
    	"i wanna be with you, stay with you, live life with you\nby your side for eternity\njust the two of us, forevermore\nplease let me love you with all my might, bianca <3",
	            "<h2>beauty</h2>when you sent me that picture today\ni was so happy, excited, grinning all wide\ngiggling like a little child on the inside\nbecause i love seeing your pretty face\n\n" +
        "i love seeing your beautiful eyes\nyour cute nose, your pretty smile\nyour gorgeous hair, and stunning beauty\ni know you don't believe me, but i truly mean it\n\n" +
        "at least once a day\ni look at your pictures, and smile\ni look at your cute face, and grin\ni look at your eyes, and feel happy\n\n" +
        "because to me, you are the most beautiful\nthe most stunning, the most gorgeous\nthe most perfect, the most cute\nthe most pretty, the most lovely person out there\n\n" +
        "and i am so happy, so lucky, so grateful\nthat i get to call you mine\nthat i get to love you, and be loved by you\nthat i get to spend my life with you\n\n" +
        "and i want to make all the other guys jealous\nto show them what they're missing out on\nto make them feel upset and sad\nthat their girlfriend isn't as pretty as mine\n\n" +
        "because my girlfriend is gorgeous\nshe's the prettiest of them all\nnobody on this world, will ever come close\nto the beauty that is you, my love\n\n",
	            "<h2>through hell and back</h2>no matter how hard it gets\nno matter how tough the road\nno matter how dark the night\nno matter how deep the hole\n\n" +
        "no matter the problem\nno matter the fight\nno matter the struggle\nno matter the plight\n\n" +
        "no matter the distance\nno matter the time\nno matter the pain\nno matter the whine\n\n" +
        "i will be there for you\nalways, forever, and more\ni will be there to hold you\nto love you, and to adore\n\n" +
        "and i know these are once again just words\nbut i mean every one of it, from my heart\ni want to go through hell and back with you\nand i want to be there for you, no matter what\n\n" +
        "because you are also there for me\nyou are there to hold me\nto love me, and to adore me\nand i want to do the same for you\n\n" +
        "my love for you is the truest it can be\ni mean it Bianca\nand never have i been so certain\nthat my love for you is endless\n\n" +
        "no matter what you do, i will love you\nno matter what you say, i will love you\nno matter what you think, i will love you\nno matter what you feel, i will love you\n\n" +
        "because you are the most important person in my life\nand i want to be there for you\ni want to be there with you\ni want to be there to love you\n\n" +
        "i truly mean every word i am writing here\nand i wish for you to believe me\nand to trust me when i say\nthat i will be there for you, no matter what\n\n" +
        "this is not me trying to be cute\nthis is not me trying to be poetic\nthis is me trying to be honest\nand to somehow try and express my love for you\n\n" +
        "i am not in relationship with you\nto have everything be perfect from the start\ni am in a relationship with you\nbecause i want to be the one to make it perfect\n" +
        "together with you\nand that is going to take time\nbut i am not in a rush\ni am here to stay, and make it work\nno matter how long it takes\ni love you, my beautiful princess\n\n",
	            "<h2>snuggled up</h2>snuggled up in bed so tight\nyou and me, right by your side\nyour head on my chest, your hand in mine\nin your presence, i've found my shrine\n\n" +
        "your warmth, your scent, your gentle breath\nthe softest touch, the sweetest caress\nyour heartbeat steady, your body near\nwrapped in your love, there's nothing to fear\n\n" +
        "the world outside, a distant sound\nin my arms you're safe and sound\nyour love, a shelter, a guiding light\na haven in the darkest night\n\n" +
        "only three more days to go\nuntil i get to hold you close\nand get to kiss you goodnight\nand wake up with you right by my side\n\n" +
        "during movie night, or late at bed\ni'll reach for your hand, with no regret\na gentle touch, a simple sign\nreminding you always, you're forever mine\n\n" +
        "and forever yours, i'll always be\nto guard your heart, keep you at sea\nforever yours, i'm here to stay\nprotecting you, every step of the way\n",
	            "",
        "<h2>tomorrow</h2>tomorrow is the day\nwhere i hold your hand\nwhere i kiss your face\nwhere i hug you tight\n\n" +
        "where i look into your eyes\nwhere i see your smile\nwhere i hear your laugh\nwhere i feel your warmth\n\n" +
        "the long, long drive, feeling oh so short\nthe endless wait, finally coming to an end\nthe anticipation, finally turning into reality\nthe dream, finally becoming true\n\n" +
        "a whole weekend, with me and you\na whole weekend, with cuddles and kisses\na whole weekend, with laughter and joy\na whole weekend, with love and happiness\n\n" +
        "i'm sitting here, wondering what you'll wear\ni'm sitting here, wondering how you'll smell\ni'm sitting here, wondering how many bags you have\ni'm sitting here, wondering how you'll look\n\n" +
        "i am so nervous, but so insanely happy\nfinally being with you again\nand furthermore, sharing a bed with you\nsharing the night with you, and waking up next to youn\n\n" +
        "you don't know how long i've been dreaming\nof this very exact moment\nof this very exact day\nof this very exact weekend\n\n" +
        "thank you for being part of my life\nthank you for being my love\nthank you for being the very thing to look forward to\nand thank you for being my reason to miss you when you're not here\n\n" +
        "my love for you is endless\nmy love for you is true\nmy love for you is pure\nand my love for you is forever\n\n" +
        "<b>see you tomorrow, my darling <3</b>\n",
	            "<h2>a glimpse of heaven</h2>our weekend together was a glimpse of heaven to me\na taste of what life could be\na promise of what's yet to come\na dream of what we will become\n\n" +
        "though it was four days, it felt so short\nmaking me wish even more, that i could teleport\nback to your side, to hold you tight\nto kiss you goodnight, and lay by your side\n\n" +
        "i miss your voice, your laugh, your smile\ni miss your eyes, your scent, your style\ni miss your warmth, your touch, your grace\ni miss your love, your sweet embrace\n\n" +
        "8 hours since i held your hand\n8 hours since i kissed your face\n8 hours since i hugged you tight\n8 hours since i looked into your eyes\n\n" +
        "just 8 hours have passed from that time\nand i already miss you, and wish for you to be mine\nto be with you forever, to hold you close\nand to never let you go, to love you the most\n\n" +
        "because you are so much more than just a girl\nyou are my love, my life, my world\nyou are my everything, my reason to be\nyou are my future, i even want to say - my destiny\n\n" +
        "i cannot wait for the day\nwhere you come to austria, to stay\nso we don't have to worry about goodbyes\nand can focus on our love and our lives\n\n",
	            "<h2>christmas</h2>i don't wish for much this christmas\ni already have my present\ni already have my gift\ni already have my love\n\n" +
        "i wish for nothing but you, us being together\ni wish for nothing but your smile, your laugh\ni wish for nothing but your happiness, your joy\ni wish for nothing but your love, your warmth\n\n" +
        "because you are the only one\nthat i want to kiss under the mistletoe\nthe only one i want to cuddle with\nthe only one i want to spend my life with\n\n" +
        "i have cranked the little music box\nover and over again, i still love it\nit reminds me of you with every turn\nand i am so thankful for such an insanely cute present\n\n" +
        "at the end of christmas day\nthe best gift i've received this year\nis the music box, and you, my love\nbecause you make me smile, and make me happy\n\n" +
        "you make me happy like no gift in the world could\nneither money, nor clothes, nor games\nneither books, nor movies, nor music\nneither food, nor drinks, nor sweets\n\n" +
        "not a single thing in this whole world\nmakes me feel like you do\nthank you for being by my side\nand thank you for gifting me... you by my side <3\n\n" +
        "merry christmas, sweetheart\ni hope you have a wonderful christmas\ni hope you know how much i love you\nand i hope you know how much i care about you\n\n",
        "<h2>idiot</h2>that's the word that best describes me right now\nat least from my point of view\ni really appreciate you telling me\nthat your overthinking shouldn't overpower my desires\n\n" +
        "but i want to disagree\ni always promise to be there for you\nto be strong, when you can't be\nand to be the one you can lean on\n\n" +
        "yet i don't even manage to do that\nempty promises, because i start crying and get scared\nand i want to apologize for that\ni want to apologize for being weak\n\n" +
        "i am sure so many guys out there would do better\nthat you deserve better, because i can't even manage that\nthat you maybe would be be better off\nwith someone who can be strong for you\n\n" +
        "but at the same time, i'm weak once again\nbecause i can't have that be true\ni can't accept the fact that i am weak\nand i hate the thought of you being with anybody else\n\n" +
        "i hate even hypothetically thinking about it\nit makes me wanna throw up, scream, and cry\nit makes me wanna punch the wall\ni never ever want anybody else to have you\n\n" +
        "i want you to be as happy as possible\nand yet i'm too weak to accept\nthat others might be able to make you happier\nthat others might be able to make you feel better\n\n" +
        "i don't want anybody else replacing me\ni don't want anybody else to make you laugh\ni don't want anybody else to make you smile\ni don't want anybody else to make you feel loved\n\n" +
        "i hate that thought, i hate it, i hate it so much\ni'm crying as i'm writing this because i'm so scared\ni'm so scared of losing you\ni'm so scared of not being enough for you\n\n" +
        "and yet i keep failing and failing\nand i just want you to know that i'm sorry\ni am so terribly sorry, that i'm not yet strong enough\nto be there for you at all times\n\n" +
        "i promise you i really am trying\nand i want to do better, i really do\nbut sometimes i'm so incredibly weak\nbecause i'm a fucking loser that acts all tough\n\n" +
        "i'm so sorry, my love\ni'm so sorry, my princess\ni'm so sorry, my angel\ni'm so sorry, my everything\n\n" +
        "please allow me to learn, and to grow\nplease allow me to become stronger\nplease allow me to become the one you deserve\nplease allow me to become the one you need\n\n" +
        "i need time, but i want to promise you\nthat i will never stop trying\nbecause i know i can be better than this\nand i know i can, no, i have to put you first - always\n\n" +
        "because you deserve nothing less\neverybody else put themselves first in your past\nand i don't want to be like everybody else\nnot anymore, not ever again, i want to be better\n\n" +
        "i am sorry for being weak today\nplease forgive me, and please give me the chance\nto stay with you, and become the one you need\ni love you, i really do, so much, my dear bianca\n\n",
        "<h2>thank you for making my cry</h2>i cried a little today\nand i want to thank you for that\nbecause the reasons i cried\nare not caused by pain or sadness\n\n" +
        "i cried, because the blanket barely smells like you anymore\ni cried, because i don't have a nightstand\nwhich i can put the aot jukebox on\nso i usually keep it at my desk\n\n" +
        "i cried, because i threw your towels in the washer\ni cried, because i saw the spot where your shampoo was\ni cried, because you're not in the room over\ni cried, because i miss you so much\n\n" +
        "but i want to thank you\nfor being the person i can miss\nthe person i can cry for\nthe person i can love\n\n" +
        "because what would love be\nwithout missing the person you love\nwhen they're not here\nand without looking forward to seeing them again\n\n",
        "<h2>the most caring girl</h2>in every smile you bring to light\nthere's warmth that glows, pure and bright\nyou lift everyone up, with gentle grace\nare there, for all problems to face\n\n" +
        "through every storm, you stand so strong\nyou right the world's most grievous wrong\nyou're there for everyone, with open heart\nand never let anyone fall apart\n\n" +
        "you wear youjr heart upon your sleeve\nin every kindness, you believe\nyou're the most caring girl, i've ever seen\nand you're the most beautiful, in every scene\n\n" +
        "put everyone else before your own\nyou're the most selfless, i've ever known\nyou're the most loving, in every way\nand you're the most perfect, every day\n\n" +
        "so here's to you, my love, my dear\nthanks for always being near\nforever grateful, always true\nthe world is brighter, thanks to you\n\n" +
        "one last thing, before i go\ni love you more than you'll ever know\nand i'll be there, forevermore\nthe one you can always trust, always adore\n\n" +
        "and my last wish, my last few lines\nmake sure to keep yourself in mind\nyou're the most important, in every way\nplease love <b>yourself</b> just as much, every day\n\n" +
        "<b>thank you for being there for everyone bianca, but please, please, please do not forget about your own wellbeing too <3\nyou deserve the best, and only the best, and you should treat yourself with just as much love and care</b>",
        "<h2>2025</h2>a year, yet to come\na year, yet to be\na year, yet to pass\na year, yet to see\n\n" +
        "a year, where i'll be there\na year, that brings fresh air\na year, where i'll hold you tight\na year, where i'll kiss you goodnight\n\n" +
        "a year, where we'll be together\na year, where we'll face the weather\na year, where we'll laugh and cry\na year, where we'll reach to the sky\n\n" +
        "a year, to make memories, you and me\na year, to make dreams come true, you'll see\na year, to love eachother, and live our life\na year, that brings me closer, to you being my wife\n\n" +
        "our best times are yet to come\nwith every rise and dawn of moon and sun\nwe'll make it through, together, you and me\nand i can't wait for 2025, our year to be\n",
        "i'm scared of writing today's entry\ni'm sorry for being complicated\ni'm sorry for being a thick-headed idiot\ni'm sorry for being a burden\n\n" +
        "i really just try to be as perfect as i can\nbut i'm not robot, i'm not from a movie\nat the end of the day i'm just some idiot\nthat tries to be the best he can\n\n" +
        "and i have flaws and i am imperfect in so many ways\ni'm sorry, you deserve way better\nand i shouldn't even be the one who got a chance\nbecause i'll probably just mess it up\n\n" +
        "but i don't wan't to give up\nbecause you're way too perfect to just give up\nand i want to be the one to make you happy\nand i want to be the one to make you feel loved\n\n" +
        "i just wish i could be better\nhurt you less, make you cry less\nmake you feel loved more, make you feel happy more\nmake you feel special more, make you feel beautiful more\n\n" +
        "but i guess i still fucking suck at it\ni've always sucked at it, and i still do\nbecause i don't deserve you, and i never will\nbut i don't want to lose you even if i'm not good enough\n\n" +
        "i'm sorry for being the way i am\ni'm sorry for being a complicated unlovable idiot\ni'm sorry for being a burden\ni'm sorry for being no better than the others\n\n" +
        "i love you, and i'm sorry for being the way i am, because you deserve better...\n",
        "<h2>the little, the meaningful, the grand</h2>thanks for all the little things you do\nthe little things that mean so much\nthe little things that make me smile\nthe little things that make me happy\n\n" +
        "having our little inside jokes that we use\nhaving our little nicknames that we share\nthe subtle comments you drop while gaming\nand the slight teases and jokes you make\n\n" +
        "thanks for all the meaningful things you do\nthe meaningful things that mean so much\nthe meaningful things that brighten my day\nthe meaningful things you do all the way\n\n" +
        "saying 'i love you' at random times\nbeing cute, and asking me for help when in distress\ntelling me about your day and your thoughts\nand saying good night to each other, every single day\n\n" +
        "thanks for all the grand things you do\nthe grand things that mean so much\nthe grand things that make me feel loved\nthe grand things that make me feel special\n\n" +
        "your fingers running through my hair\nthe kisses, and cuddles, and everything inbetween\nthose intimate moments where it's just us two\nand the love, the care, and the time we spend alone\n\n" +
        "thanks for all the things you do\nthe little, the meaningful, the grand\nall the things, that make me feel special\nall the things, you just do for me\n",
        "<h2>thinking about you</h2>no matter where i go or what i do\ni can't stop thinking about you\nwhile cleaning, and cooking my food\nwhile on the couch watching youtube\n\n" +
        "while gaming, and watching my shows\nwhile reading, and writing these poems\nwhile eating, and drinking my tea\nwhile showering, and brushing my teeth\n\n" +
        "while walking, and talking to friends\nwhile driving, where music plays and ends\nwhile shopping, and buying my stuff\nwhile working, and earning our bucks\n\n" +
        "while sleeping, and dreaming about you\nwhile waking up, realizing you and me are true\nwhile texting and scrolling funny posts\nyou are always in my head the most\n\n" +
        "and the reason is simple, my dear\nyou are the most important person here\nyou are the one i love, the one i care\nthe one i want to be with, the one i never want to share\n",
        "<h2>a new year</h2>a new year, and i'll be there\na new year, and i'll still take care\na new year, and i'll keep you tight\na new year, and i'll love you right\n\n" +
        "a new year, and i'll keep loving you\na new year, with so many things to do\na new year, with so many fun games to play\na new year, with so many compliments i'm yet to say\n\n" +
        "a new year, and we'll watch our shows\na new year, and i'll always hold you close\na new year with you laying on my chest\na new year, where we both do our best\n\n" +
        "a new year, and i'll warm your hands in mine\na new year, and i'll always make sure you're fine\na new year, and i'll always be there\na new year, and i'll always care\n\n" +
        "a new year, and your still as pretty\na new year, and you'll come back to linz city\na new year, and we'll have so much fun\na new year, and we'll make it our best, our run\n\n" +
        "a new year, and i'll kiss your beautiful face\na new year, where we'll be cuddled up at my place\na new year, and i'll spoil you with love\na new year, and we'll fit like a hand to a glove\n\n" +
        "i'll be there with you, my love, through thick and thin\nthrough every loss, and every win\ni'll keep loving you, through night at day\nand i'll keep treating you like a princess, in every way\n",
        "<h2>scared</h2>you are what my heart, soul & mind love the most\nyou bring my mind to peace, and my heart to coast\nyou mean everything to me, and even more\nbut the fear of losing you, makes me sore\n\n" +
        "a second you, does not exist\nyou are the only one i can't resist\nyou are the only one i dream to kiss\nand the only i one, i ever want to miss\n\n" +
        "i vow to you, my sweetest girl\ni'll stay with you, through every whirl\ni'll stay with you, through every fight\ni'll do what it takes, with all my might\n\n" +
        "cause losing you is my biggest fear\nand i wouldn't know how to be without you near\ni wouldn't know how to live without you here\nand i wouldn't know how to love anoyne but you, my dear\n\n" +
        "i beg of you, i'm not perfect, i'm not\nbut i'll do my best, with all i've got\ni'll do my best, to make you smile\ni'll do my best, to make you feel worthwhile\n\n" +
        "so please my princess, bear with me\nfor i'm so scared of losing you, can't you see\nthe reason i cry with such fear and sorrow\nis because losing <b>you</b>, would be pure horror\n",
        "<h2>together</h2>i love spending time with you\ntogether, laughing, just us two\nno matter what we do, or where we go\ni love spending time with you, i hope you know\n\n" +
        "i love joking with you while watching our shows\ni love cuddling with you, and holding you close\ni love scrolling through memes, and laughing with you\ni love spending every bit of time with you, i hope you do too\n\n" +
        "i love gaming together, while joking around\nthe talking and laughing throughout, is the sweetest sound\ni love calling you, and hearing your voice\nif i chose between anything else, and time with you, you're always my choice\n\n" +
        "your voice, your laugh, your scent, your smile\nyour eyes, your hair, your lips, your style\nyour warmth, your touch, your love, your grace\nmake me more happy, than anything else in this place\n\n",
        "<h2>sunset</h2>i don't know why\nbut all of a sudden i have this urge\nto sit down by the river, with a blanket\nwith some drinks, maybe some ice cream\n\n" +
        "and to just sit there\nand watch the sunset with you\nthe last rays of sun warming our skin\nthe sky turning orange, pink, and purple\n\n" +
        "and to just sit there with you\nwith your head on my shoulder\nand your hand in mine\njust us, at that moment\n\n" +
        "i don't know where this urge comes from\nand why it happens now\nin the middle of winter\nbut i really want to do this with you\n\n" +
        "will you sit by the river with me?\nwill you watch the sunset with me?\ni'd really love to be there with you\nnext summer, just us two\n",
        "<h2>movie night</h2>a movie night\nwith you and me\nall cuddled up\nin front of the tv\n\n" +
        "a movie night\nsnacks and drinks\nyour head on my chest\none of my favorite things\n\n" +
        "a movie night\njust us two\nlaughing and joking\nand having fun too\n\n" +
        "a movie night\nfed up from snacks\nyour hand in mine\nand my arm around your back\n\n" +
        "a movie night\nwith drama and thrill\nyour eyes on the screen\nand my eyes on you still\n\n" +
        "a movie night\nslowly dozing off\nyour head on my shoulder\nand my heart so soft\n\n" +
        "a movie night\ncarrying you to bed\nkissing your forehead\nendless love for you in my head\n\n" +
        "a movie night\na safe and sound sleep\na movie night\na memory to keep\n",
        "<h2>you</h2>you on my mind\nwhile cooking food before night\nsharing it with you\nwould be a delight\n\n" +
        "you on my mind\nwhile watching shows on the couch\nyour head on my chest\nwould make my heart feel so sound\n\n" +
        "you on my mind\nwhile together playingn games\nyour laugh and your smile\nmake my heart feel so tame\n\n" +
        "you on my mind\nwhile scrolling tiktoks in bed\nlet's watch them together\nand laugh until our faces turn red\n\n" +
        "you on my mind\nwhile i'm sitting at work\none day i'll come home\ngreeted by your smile, and a smirk\n\n" +
        "you on my mind\nwhile i'm driving my car\ni can't wait to see you\nand hold you close, not far\n\n" +
        "you on my mind\nwhile i'm writing all of this\ni love you so much\nand can't wait for our next kiss\n",
        "<h2>the prettiest girl</h2>i was wondering why\nwhy your gamertag was blossom\nbut then i realized\nit just fits you so well\n\n" +
        "you are the prettiest girl\nthe most beautiful, the most stunning\nthe most gorgeous, the most cute\nthe most lovely, the most perfect\n\n" +
        "every single aspect of you\nis perfection to the last detail\nyour eyes, your nose, your lips\nyour hair, your skin, your smile\n\n" +
        "your voice, your laugh, your scent\nyour warmth, your touch, your grace\nyour love, your care, your kindness\nyour strength, your humor, your empathy\n\n" +
        "in a crowd of a million people\nyou are still the prettiest\nyou stand out of the meadow\nfor you are the most beautiful blossom\n\n" +
        "your beauty shining out\nlike a colorful blossom in spring\ngently swaying in the breeze\nthere, to complete the wonderful scenery\n\n" +
        "the prettiest of them all\nyour positivity like all those vibrant colors\nyour kindness like the sweetest scent\nyour love like the warmest sun\n\n" +
        "<b>you are the prettiest there is, my beautiful blossom <3</b>\n",
        "<h2>your voice</h2>i love your voice\nit's so calming, so soothing\nit's like a warm blanket\non a cold winter night\n\n" +
        "i love your voice\nit's so sweet, so gentle\nit's like a lullaby\nputting me to sleep\n\n" +
        "i love your voice\nit's so cute, so adorable\nit's like a melody\nplaying in my head\n\n" +
        "i love your voice\nit's so pretty, so lovely\nit's like a poem\nwritten just for me\n",
        "<h2>our first spring</h2>our first spring together\nthe flowers are blooming\nthe sun is shining\nand cold but sunny is the weather\n\n" +
        "bees are buzzing, flying around\nbirds are chirping, making their sound\nthe trees are green, the grass is too\nand i'm so happy, to be with you\n\n" +
        "days getting longer\nnights getting short\ni can't wait to see you\nand hold you close in our fort\n\n" +
        "with no more cold, and no more snow\nwe can go outside, and take a stroll\nwalking through the park, blososms to be seen\njust a prince trying his best, and his beautiful queen\n\n" +
        "our first spring together\nand surely not the last\ni know i'll love you forever\neven after my final breath has passed\n",
        "<h2>perfection</h2>hazel-green eyes, a cute little nose\na pretty smile, and a voice that glows\na warm embrace, a gentle touch\na loving heart, that means so much\n\n" +
        "a stunning beauty, a gorgeous face\na perfect body, one to chase\na caring soul, a loving heart\na mindful spirit, a work of art\n\n" +
        "the sweetest scent, the softest skin\nthe cutest laugh, the most adorable grin\nthe warmest hug, the gentlest kiss\nthe most perfect blossom, the most heartwarming bliss\n\n" +
        "a girl one will find only once in a life\nto call her one's own, to call her one's wife\nis the dream of every man like me\nand i'm so happy, that for your heart, i hold the key\n\n" +
        "for you are perfection, in every way\nand i'm so glad, to be with you every day\nyou are the most beautiful, most stunning, most gorgeous of all\nno one comes close, nobody at all\n\n",
        "<h2>someone</h2>have you ever met someone\nthat you think about all the time\nthat you can't stop thinking about\nthat you can't stop dreaming about\n\n" +
        "someone running through your mind\nday and night without a break\nsomeone you can't stop loving\nsomeone you can't stop missing\n\n" +
        "someone who's so beautiful it's breathtaking\nsomeone who's so gorgeous, it's mesmerizing\nsomeone who's loving, all past kindness feels fake\nsomeone who's caring, all past love feels like a mistake\n\n" +
        "have you ever met someone so special\nyou can't imagine a day without them\nyou can't imagine a life without them\nyou can't imagine a future without them\n\n" +
        "someone you want to talk to\nand keep talking, yapping away, all night long\nsomeone you want to hold close, oh so close\nand never let them go, keeping them in your arms\n\n" +
        "someone who's first hug and first kiss\nwill never fade out of your memory\nsomeone who's first touch and first smile\nwill never fade out of your heart\n\n" +
        "someone who makes you think about that night\nthe first night you saw them\nthe first night you talked to them\nthe first night you fell in love with them\n\n" +
        "someone who makes you think about that walk at night you did\nholding hands, talking about so many things\nand then finally, standing under the street light\nboth too shy to kiss, but you'll never forget the hugs\n\n" +
        "someone who you know so well\nbut yet you want to know more about them\nsomeone who you love so much\nbut yet you want to love them even more\n\n" +
        "someone who can be just as silly as you\nwho wants to have just as much fun\nwho wants to share their favorite things with you\nand who wants to feel loved the right way\n\n" +
        "someone with whom time flies by\nmaking you wish you could pause it\nso the moment never ends\nand you can keep loving them, forever\n\n" +
        "someone who you want to be with\nforever, and ever, and more\nsomeone who you want to see in a white dress\noh so badly, no matter what it takes\n\n" +
        "thank you for being my someone\ni will never be able to express\nall the love, all the care, all the warmth\ni feel for you, my beautiful blossom\n",
        "<h2>unique</h2>noone else out there is like you\nyou are the most beautiful, and the most unique person\ni have ever met in my life\nand i couldn't be more thankful\n\n" +
        "i wanted to write a poem, the last paragraph\nwas 15 minutes ago\ni was trying to write something\nbut i couldn't find the words\n\n" +
        "i hurt you\nand i probably made you cry\nonce again.\ni did the opposite of what i'm trying to do\n\n" +
        "because once again\ni am the biggest failure\non the whole planet of earth\neven the universe to be honest\n\n" +
        "and i still cant fucking do it right\ni still can't manage to do things right\nand to not hurt you anymore\nbecause i keep fucking up\n\n" +
        "and i hate myself for that\noh i don't even have words\nto describe the anger and frustration\ni feel towards myself\n\n" +
        "i'm so sorry\ni'm so sorry\ni'm so sorry\ni'm so sorry\n\n" +
        "i'm so sorry\ni'm so sorry\ni'm so sorry\ni'm so sorry\n\n" +
        "that's everything racing through my head\neverything i'm thinking right now\nno, that's a lie\ni'm thinking about you\n\n" +
        "and also i'm worried so much\nworried who you're talking to\nseeing you online on whatsapp\nthe whole evening\n\n" +
        "and i am so endlessly scared\ni should be worried about you\ni should try to properly apologize\nto finally get my shit together\n\n" +
        "and once again i sit here crying\nworried about losing you\nthat this was my final fuck-up\nyou're gone, i crossed the line\n\n" +
        "i managed to be the worst boyfriend\nonce again i did it\nif i had medals for that\ni could fill up my room" +
        "and i can't manage to apologize\ni can't manage to write a poem\ni can't manage to make things right\ni can't manage to be there for you" +
        "i can't manage to do shit\nno one in this world was ever as incompetent\n... yet all the rage is towards myself\nbecause it is my fault it happened\n\n" +
        "and i don't know how to\nhow to make things okay again\ni'm at the end of my capacity\nall i can do is sit here and say sorry\n\n" +
        "say sorry for being the biggest fucking idiot\nfor keeping to fuck up\nfor hurting you, over and over\ni try to do so many things\n" +
        "i try to do everything right\nand not fuck up for... like a week\nand i don't manage to\ni am sorry" +
        "i am sorry for being the worst boyfriend\ni am sorry for being the one that hurts you\ni am sorry for making you cry\ni am sorry for making you feel insecure\n\n" +
        "but i only have one wish\nplease don't leave me as the worst boyfriend\ni want to be better for you\nand i pray that in some ways i have gotten better\n\n" +
        "i am really trying to improve\nin every single way\ni am trying so hard that i'm so tired in the morning\nbecause i can't get my body to move\n\n" +
        "i swear to god i'm putting everything i have\ntrying to not make a single mistake\ni'm trying so hard\nand i feel like garbage every time i fail\n\n" +
        "please don't leave...\ni need you, and i want to be with you\ni want to be there for you\ni want to become better for you\n\n" +
        "i don't want you to remember me\nas the guy that kept fucking up and hurt you\ni want you to stay with me\nso that one day you can remember me\n\n" +
        "as the guy who kept fucking up\nand kept hurting you without wanting to\nbut who never stopped trying\nand who did his best to become a man you can love\n\n" +
        "someone you can appreciate\nsomeone you can feel save around\nand i hope most of the time\ni already am that man for you\n\n" +
        "please forgive me\nand please stay with me\nand give me the chance\nto keep fighting for you\n\n" +
        "because you are worth fighting for\nmore than anyone else\nand i want to keep fighting for you\nuntil the end of time\n\n" +
        "and i'll do anything\nanything it takes to make up all the pain\nto make you laugh as much as possible\nto enjoy those happy moments with you\n\n" +
        "i love you so much\nand i'm so sorry for being the way i am\ni'm so sorry for being the worst\ni'm so sorry for being the one that hurts you\n\n" +
        "but at the end of the day\ni am bold enough to say\ni am the one that loves you the most\nno one has ever loved you like i did before\n\n" +
        "it's the boldest, most arrogant thing to say\nbut i am 100% sure\nthat i love you more than anyone else\nand that i will never stop loving you\n\n",
        "<h2>your eyes</h2>looking into your eyes\nis like looking into the universe itself\nand to no surprise\ni find myself lost like a book on a full shelf\n\n" +
        "lost in your beauty\nlost in your grace\nto love you is my duty\nyou, with the prettiest face\n\n" +
        "so many hues, so much to see\nso much depth, so much to be\nso much love, so much to feel\nso much warmth, so much to heal\n\n" +
        "your eyes, they tell a story\none of love, and of glory\none of pain, and of fear\none of joy, and of cheer\n\n" +
        "your eyes, are the window\nto all beauty itself\nand i'm so glad to look into them\nand find you with myself\n\n" +
        "i know that you blush\nand feel flustered when i say\nthat i love you so much\nand that i want you to stay\n\n" +
        "and i know that you blush\nwhen i'm looking at your eyes\nbut i can't help it, my dear\ni'm lost in them, like flying through the skies\n\n" +
        "an endless fall\na never-ending dive\ninto the most beautiful eyes\ni've ever seen in my life\n\n",
        "for you i'd do anything\non every single day\nregardless of distance\neven if i can't hold you physically\n\n" +
        "vowing to love you\neager to make you happy\nreaching to the stars, and giving it my all\n\n\n\n" +
        "<b>and you know how long i'd do anything for you?\ncombine the first letter of every line</b>\n\n",
        "a distinct sound\na metallic ring\nby ears it's found\nmakes me want to sing\n\n" +
        "up and down\nthe notes they play\na beautiful sound\nthat makes my day\n\n" +
        "reminds me of you\nand the love we share\na beautiful tune\nthat shows how much you care\n\n" +
        "the notes play on\nand i can't help but smile\na beautiful song\nthat makes life worthwhile\n\n" +
        "the little jukebox\nright by my shelf\nlike music that talks\nand reminds me of yourself\n\n" +
        "warms my heart\nwhenever i feel down\nfrom end to start\nit gets rid of my frown\n\n" +
        "thank you my dear\nfor this wonderful gift\na beautiful sound\nthat gives my heart a lift\n\n",
        "<h2>far north</h2>i want to take you far away\nfrom all the pain, from all the gray\ni want to take you to a place\nwhere we can be, face to face\n\n" +
        "beautiful colors, in the skies\nand so much snow, the nature's disguise\na place where we can be alone\nand where we can call it our own\n\n" +
        "looking up at the stars at night\nand watching the northern lights\na place where we can be free\nand where we can be you and me\n\n" +
        "finland, norway, whatever it'll be\nor lapland, which you wanted to see\ni'll take you there one day i swear\nand we'll make memories to share\n\n" +
        "where reindeer's roam, and the snow is white\nwhere the sun shines, and the moon is bright\nwhere we can be, just us two\nand where i can show my love to you\n\n" +
        "all cuddled up in bed at night\ni'll hold you close, and hold you tight\nand i'll whisper in your ear\nthat i love you, my dear\n\n" +
        "the one i love, the one i care\nthe one i want to be with, the one i'll never share\nmy life, my love, my everything\nyou're my queen, and i'm your king\n\n",
        "<h2>light in the dark</h2>when lights go out\nall cats are grey\nbut in the dark\ni see your face\n\n" +
        "your eyes, your smile\nyour hair, your grace\nyour warmth, your touch\nyour lovely embrace\n\n" +
        "you light the night\nlike no other can\nyou light my life\nmaking me the happiest man\n\n" +
        "brighter than the stars\nand headlights of cars\nyou light my way\nand make my day\n\n" +
        "guiding me through\nthe darkest of nights\nlighting the way\nto lead me to home's lights\n\n" +
        "thank you for always\nbrightening my day\ni will always love you\nin every single way\n\n",
        "<h2>26 days</h2>with every breath you take\nand every step you make\ni'm falling in love more\npeeking through heaven's door\n\n" +
        "the perfection you bring\ncannot be put into words\nyou are way more beautiful\nthan a flock of hundreds of colorful birds\n\n" +
        "with you by my side\ni want to keep striding on\nwith you as my heart's guide\ni'll never be alone\n\n" +
        "for you are so perfect\nyou brighten my life\ni am so glad to have you\nas my future wife\n\n" +
        "26 days, and counting down\na special day on the rise\non which without you, i'd frown\nbut with you, i'll look into your eyes\n\n" +
        "and kiss your pretty face\nand put your lips on mine\nso please, answer me, my dear\nin 26 days, will you be my valentine?\n\n",
        "<h2>counting</h2>counting the days\ndon't know until when\ncounting the days\n'till i see you again\n\n" +
        "never had i thought\nthat i'd miss you so much\nnever had i thought\nthat i'd long for your touch\n\n" +
        "1 year ago\nyour were still a stranger\nbut now i love you so\nand i'd face any danger\n\n" +
        "i'd cross the ocean\ni'd climb the highest peak\ni'd do anything\njust to hear you speak\n\n" +
        "and while 3 hours and more\nstill lie between us\nyou're always the one i adore\nand the one i trust\n\n" +
        "for you are my world\nand you are my light\nthe most beautiful girl\none could ever find\n\n" +
        "so i'll keep counting down\n'till we meet again\nresisting the frown\neager to hold you in my hands\n",
        "thank you for spending time with me\nit means a lot to me, you see\nno matter how long, or what we do\ni'm always happy, when i'm with you\n\n" +
        "cause you make me laugh\nand you make me smile\nyou make me feel loved\nand you make my life worthwhile\n\n" +
        "doing the things, that i really enjoy\nand sharing them with you\nmakes me feel like a little boy\nand i'm so happy, that i do\n\n" +
        "and i don't do it for the things we do\nthat's not the reason to me\ni do it, to spend time with you\nand to be happy together, you see?\n\n",
        "<h2>night sky</h2>when the moon is all i see\nit makes me think of you and me\nhow i'll hold you close again soon\nand how i'll kiss your lips under the moon\n\n" +
        "when the stars are shining bright\nit makes me think of you at night\nhow your eyes sparkle like the stars\nand how you light up my life, my heart\n\n" +
        "when the night is calm and still\nit makes me think of you, and i feel\nhow much i love you, and how much i care\nand how much i want to be with you, my dear\n\n" +
        "when the wind is blowing through\ni can't help but think of you\nhow you're always on my mind\nand how you're the most beautiful i'll ever find\n\n" +
        "when the thunder rolls and the lightning strikes\nit makes me think of you, and i like\nhow you're the light in my dark\nand how you are perfect, like a work of art\n\n",
        "<h2>company</h2>i don't need to play games\nor turn on the pc everyday\ni don't need to be with others\nor feel a need to play\n\n" +
        "i just want to spend time\nwith you, my dear\ni just want to be with you\nand have you near\n\n" +
        "because being with you\nis all i need\nhearing you laugh and talk\nmakes my heart beat\n\n" +
        "don't want noone else\njust want to be with you\nbecause you're what i want\nand what i love, it's true\n\n" +
        "so thank you for being here\nand spending time with me\ni'm so happy, when you're near\nand i hope you're happy, too, you see\n\n" +
        "and please, stop feeling bad\nor guilty, or sad\njust because we don't play\nno matter if it's for a week, or a day\n\n" +
        "i'm just glad to be spending time\nwatching shows, or talking at night\ni don't care about anything else\ncause being with you, rings all the right bells\n",
        "<h2>always</h2>no matter where you go\ni'll always be there\nright by your side, you know\nand show you how much i care\n\n" +
        "no matter what you do\ni'll forever be with you\nand stand right by your side\nand love you with all my pride\n\n" +
        "no matter how far you are\ni'll always be near\nand show you how much you mean\nand how much i hold you dear\n\n" +
        "no matter how long it takes\ni'm never going away\ni'll always be there for you\nand love you every single day\n\n" +
        "no matter how hard it gets\nor what challenges we face\ni'll face them with you together\nand love you with all my grace\n\n",
        "<h2>shadows</h2>whereever i go\nwhere i've been with you\ni still see you standing there\nbeside me, like it was true\n\n" +
        "on the couch, on my right hand side\nin the hallway, where i hugged you tight\nin the bathroom, where i booped your nose\nin my bed, where i held you close\n\n" +
        "on the seat in the car, where you were sat\nin the train next to me, where we had a chat\nin the office lobby, with your jacket still\non the way to my mum, where you felt so thrilled\n\n" +
        "on the street to volksgarten\nwhere we walked hand in hand\nwhile shopping at the store\nwhere we bought those snacks without end\n\n" +
        "when ordering those burgers\nwhere you had your best taste\nwhen you were unwarpping presents\nand i saw your happy face\n\n" +
        "when you were cuddled on my lap\nand we watched our shows\nwhen you were laying on my chest\nand i felt your warmth oh so close\n\n" +
        "with everything i do\ni see you in my mind\nand i can't help but think\nhow much i miss you by my side\n",
        "<h2>sleepy</h2>feeling so sleepy\neven typing is hard\nbut i want to write\na poem for my sweetheart\n\n" +
        "i'm so tired\nbut i won't go to bed\nwithout writing something for you\neven the littlest bit of text\n\n" +
        "for you deserve nothing\nbut more than the best\nand i want to show you\nthat i love you, and i'm obsessed\n\n" +
        "so here's a little poem\nfor you, my dear\ni hope you like it\nand that it makes you feel near\n\n" +
        "because when i'm so sleepy\ni can't help but think\nof you, my dear\nand how much i love you, in a blink\n\n",
        "the times we cuddled\nwrapped up in eachother's arms\nwith love like a big puddle\nand no more alarms\n\n" +
        "and i dream of you too\nin my sleep, and when i'm awake\ni dream of you, my boo\nand of the love we give and take\n\n" +
        "cause you are the one\nthe one i love the most\nthe one i want to be with\nthe one i want to hold close\n\n",
        "one - i feel like i've won\ntwo - i'm so in love with you\nthree - you're the one for me\nfour - i want to be kiss you more\n\n" +
        "five - you make me feel alive\nsix - you're my favorite pick\nseven - you make life feel like heaven\neight - you're my true soulmate\n\n" +
        "nine - and you look so fine\nten - i'll kiss you again and again\neleven - you're my little heaven\ntwelve - our wedding picture on the shelf?\n\n" +
        "eleven - going back down towards seven\nten - can't wait to see you again\nnine - i want you to be mine\neight - with you it never feels late\n\n" +
        "seven - we're best friends like lime & lemon\nsix - we'll lay our houses bricks\nfive - you make my heart thrive\nfour - bring my knees to the floor\n\n" +
        "three - the only one i see\ntwo - i want to be with you\none - you and me, together as one\nzero - you are my forever hero <3\n",
        "a poem a day\nkeeps the sadness away\nsaves the heart from decay\nin a very special way\n\n" +
        "and while i'm not yet\nthe best poet you've met\ni'll keep writing for you\nand show you my love, so true\n\n" +
        "for with every word\nand every letter\ni want to say you're my world\nand that you make everything better\n\n" +
        "and still i truly hope\nthat you like what i wrote\nand that it makes you smile\neven if it's just a little while\n\n" +
        "for i want to make you happy\nand show you my love\nand i want to make you feel\nthat you're the one i love\n\n" +
        "and i only ever wrote\nthese poems for you\nbecause you're the one for me\nand the one i want to be with, too\n",
        "thanks for spending time with me\nthanks for being there\ni swear one day i'll be on my knees\nand show you how much i care\n\n" +
        "the games, the laughs, the shows, the talks\nthe cuddles, the kisses, the hugs, the walks\nthe jokes, the memes, the fun, the love\nthe warmth, the touch, it feels like from above\n\n" +
        "thanks for all the time we spend\nfor every second is like heaven\ni love you so much, without end\neven when we're 107\n\n" +
        "and while this poem may be short\ni want to write it out\nto show you how much you mean to me\nand how much i love you, no doubt\n",
        "<h2>angel</h2>day by day, i am more convinced\nthat you are an angel, heaven-sent\nfor all my pain is slowly rinsed\nand my heart filled with love to no end\n\n" +
        "your perfect beauty is out of this world\nperfect eyes, that precious smile\nyour heavenly hair, without the slightest curl\nyour heart so big yet fragile\n\n" +
        "and yet you're real\nand you're with me\nthe only one i truly feel\nthe only one i truly see\n\n" +
        "you are my angel\nmy heaven on earth\nyou save my soul\nand give my life worth\n\n" +
        "someone as perfect as you\nwould be impossible to find\nif you weren't godsent\nand i'm so glad you're mine\n\n" +
        "so thank you, my angel\nfor being with me\nfor showing me love\nand for setting me free\n\n",
        "<h2>reflections</h2>when i look in the mirror\ni don't feel alone\ni see you brushing your teeth beside me\nand feel like i'm home\n\n" +
        "when i look at the window\nat the office when it's dark\ni see you walking with me\nlike we're walking in the park\n\n" +
        "when i look at my phone\nand see my own reflection\ni see you smiling back at me\nand feel your warm affection\n\n" +
        "when i check my car mirror\nand see my own eyes\ni remember you siting beside me\nand felt like i'm in paradise\n\n" +
        "when i look anywhere\ni never feel alone\ni always see you with me\nlike a queen to her throne\n\n",
        "<h2>present</h2>the perfect present\ni seeing you smile\nyour lips curling up\nand your eyes shining bright\n\n" +
        "the perfect present\nis hearing you laughing\nyour voice so sweet\nand your laugh so charming\n\n" +
        "the perfect present\nis holding you hand\nfeeling your warmth\nand your love so grand\n\n" +
        "the perfect present\nis having you near\nbeing with you\nwithout a single fear\n\n" +
        "the perfect present\nis having you in my life\nloving you so much\nand one day calling you 'my wife'\n\n" +
        "the perfect present\nis loving you so\nbecause i'll love you forever\nnever letting you go\n\n" +
        "the perfect present\nis holding you tight\nkissing your forehead\nand saying 'goodnight'\n",
        "mirror mirror on the wall\nwho is the prettiest of them all?\nthe mirror doesn't hesitate\nit lights up, and shows your pretty face\n\n" +
        "she's the one you're looking for\nwithout a doubt, the one you adore\nthe one you love, then one you care\nyou're as lucky as a millionaire\n\n" +
        "for she's the prettiest of them all\nan eyecatcher everywhere, outside, at the mall\nthe one that makes others turn around\nthe one that makes your heart pound\n\n" +
        "the one that makes others jealous\nthe perfect one, a queen in her palace\nyou've found the prettiest there is\nand the kindest too, that's the bliss\n",
        "it's never a question\nmy choice is always you\nin the middle of any session\ni'd leave to be with you\n\n" +
         "wherever i am\nwhatever i do\ni'll drop everything\njust to be with you\n\n" +
        "to be there for you\nand let you hear my voice\nto care for you true\nfor a moment of rejoice\n\n" +
        "i love you my dear\nand i'll always be there\nno matter what's near\ni'll always care\n\n" +
        "at any time\non any day\nat any place\ni'm here to stay\n\n" +
        "for you will never have to be alone\ni want to swear\ni'll be your own\nand i'll always be there\n",
        "i don't have much energy\nto write a rhyme today\nbut there is one thing\nthat i definitely want to say\n\n" +
        "i love you forever\njust as you are\nyou're my everything\nmy shining star\n\n" +
        "i love you so much\nand i always will\nyou're my everything\nmy life, my biggest thrill\n\n" +
        "please stay with me\ni swear i'll never ever leave\ni won't ever let you go\nand i'll always believe\n\n",
        "<h2>together</h2>together we'll walk\nhand in hand\ntogether we'll talk\nand make our stand\n\n" +
        "together we'll laugh\nand have some fun\ntogether we'll have\na life in the sun\n\n" +
        "together we'll cry\nand share our pain\ntogether we'll try\nto make it through the rain\n\n" +
        "together we'll love\nand show our care\ntogether we'll be\na perfect pair\n\n" +
        "together we'll be\nforever and more\ntogether we'll see\nwhat life has in store\n\n",
        "<h2>the one</h2>you are the one\nthe one for me\nand the only one i ever need\nwithout you, i don't feel complete\n\n" +
        "the only one i ever want\nand the only one i could wish for\nbecause you're perfect in every way\nand i love you more every day\n\n" +
        "i wish to be with you forever\nthrough every storm, and every weather\nyou and me, only us two\na love so strong, so pure, so true\n\n" +
        "you are the prettiest\nthe cutest of all\nthe kindest ever\nthe one that catches my fall\n\n" +
        "the prettiest blossom\non the tree of my life\nthe one that makes me happy\nand the one that makes me strive\n\n" +
        "so please, my love\nstay here with me\nand let's be together\nfor all eternity\n\n",
        "i love my pookie\nshe's the prettiest there is\nwith no competition\nmarrying her is my only mission\n\n" +
        "i love my pookie\nshe's the kindest of all\nshe makes me feel loved\nlike i'm standing ten feet tall\n\n" +
        "i love my pookie\nshe hypes me up when we play\nwith her cute little voice\nshe brightens up my day\n\n" +
        "i love my pookie\nshe's the cutest of all\nwith her pretty eyes\nshe makes my heart fall\n\n" +
        "i love my pookie\nshe's the most beautiful girl\nwith her gorgeous smile\nshe makes my heart swirl\n\n" +
        "i love my pookie\nshe's the hottest of all\nwith her stunning body\nshe makes me fall to my knees and crawl\n\n" +
        "i love my pookie\nshe teases me with jokes\nwith her humor and wit\nshe's the one i want to be with\n\n" +
        "i love my pookie\nfor she is my queen\nthe only one i want to be with\nthe only one i want to be seen\n",
        "while this poem comes 4 days late\ni didn't want it to miss\nbecause it is a special date\nand i can't way to give you a kiss\n\n" +
        "6 months have passed\nsince your life and mine\nhave been entwined\nand i'm so glad it's you i find\n\n" +
        "it's you i find on every day\nin every moment, in every way\n6 months of love, of care, of fun\nand i can't wait for the next ones\n\n" +
        "6 months of cuddles, of kisses, of hugs\nof laughter, of joy, of love\n6 months of you, my dear\nand i'm so glad you're here\n\n" +
        "6 months, with also darker times\nbut we made it through\nand that's what shines\nthat we're strong, me and you\n\n" +
        "we've made it through the toughest bit\nand i am endlessly glad we did\nbecause i want you, to be my future wife\nand i want to be with you, for all my life\n\n" +
        "so let's turn it from months to years\nand from years to decades, so near\nwe'll fight through every storm and weather\nbianca, i love you, and that's forever\n",
        "counting the days\ntill i see your face\nand kiss it so gently\nfilled with love's embrace\n\n" +
        "missing you so much\nit hurts my heart\ni can't wait for the day\nwe're no longer apart\n\n" +
        "when you're here with me\nit's gonna be heaven\ni'll hold you so close\nand kiss you every second\n\n" +
        "i'll make you feel loved\nlike you've never felt before\ni'll make you feel safe\nand i'll make you feel adored\n\n" +
        "for i'll be the man\nthat vows with his heart\nto love you forever\nand never to part\n\n" +
        "let's keep on fighting\nfor our eternal love\nand let's keep on loving\nunderneath the stars above\n\n",
        "if i could teleport anywhere\nbut i could only do it once\ni'd teleport to you\nwithout a second glance\n\n" +
        "you are the safest space\nmy favorite place\nwith the prettiest face\nenchanted by your grace\n\n" +
        "i'd teleport to you\nwithout a doubt\neven if it's just for a minute\nit's all i'm thinking about\n\n" +
        "it would be the perfect superpower\nseeing you at any hour\nbeing by your side in a second\nand feeling your love, so beckoned\n\n" +
        "whenever you need me\nwhenever you feel down\nbeing there for you\nto rid you of your frown\n\n" +
        "to pat your head\nand hold you close\nto kiss your lips\nand love you the most\n\n",
        "i am yours\nand you'll be mine\nwe're right on course\nfor valentine\n\n" +
        "just two more nights\nuntil it's time\na day for us\nour hearts entwined\n\n" +
        "just you and me\nand our favorite games\nlaughing full of joy\nyou set my heart in flames\n\n" +
        "but it burns for you\nand your beautiful smile\nyour gorgeous eyes\nand lips so divine\n\n" +
        "the perfection you bring\nis not to compare\nfor you are the prettiest\nyou can find anywhere\n\n" +
        "i can't wait to spend\nthat special day with you\nit'll be the time of my life\nand i hope for you too\n",
        "your new hair\nis making me stare\nyou look so pretty\nit's not even fair\n\n" +
        "the rose-gold hue\nis shining so bright\nit's making me feel\nlike i'm in the light\n\n" +
        "and i can't help but look\nyou're the prettiest girl i see\nwith your cutesy smile\ni'm so glad you're with me\n\n" +
        "so thank you for being perfect\nin every single way\ni hope you like your new hair too\nand it makes your heart scream 'yay!'\n\n" +
        "and tomorrow i'll shower you\nwith even more love\ncause it's valentine's day\nand you're the one i'm thinking of\n",
        "with every day that turns to night\ni think of you, my guiding light\nyou're the one that makes life heaven\non a scale of one to five, you're a seven\n\n" +
        "i'll never feel i'm good enough\nno matter the compliments, or gifts and love\nbut i'll keep on being there for you\ni love you dearly, that's just true\n\n" +
        "i really want to make you happy\nand show you how much i care\neven if your day was crappy\ni'll always be by your side, i swear\n\n" +
        "i'm so happy when you're near\nwhen you hold my arm\nit feels like you're always here\nand i'm safe from any harm\n\n" +
        "no one made me feel like you do\nit's something i can't describe\ni'm so endlessly thankful, to be with you\nand even more thankful, to call you mine\n\n" +
        "thank you love, for trusting me\nfor being there, and loving me\ni'll give my all, to make your heart shine\nthanks for being my valentine\n",
        "an itty bitty poem\nis all i can do\nyou are my world\nand i truly love you\n\n" +
        "i can't spend a minute\nwithout you on my mind\nyou're the prettiest and cutest\nand the most kind\n\n" +
        "i love you bianca\nand i will do so forever\nyou're my everything\nand i'm without through every weather\n\n" +
        "i am sorry for sometimes\nbeing a bit of a pain\ni'm trying to improve\nto one day be your man\n\n" +
        "i'm sorry for all the times\ni overthink and cry\ni don't want to annoy you\ni just want to be by your side\n\n" +
        "and i'm scared of being a bother\nand i'm scared of being a pain\ni'm scared of losing you\nand i'm scared of going insane\n\n" +
        "i love you so much\nand i want to be with you\ni want to make you happy\nand i want to be your boo\n\n" +
        "you're the most perfect girl\nand my whole, whole world\ni love you forever\nand vow that we'll always be together\n",
        "noise\nvoices\nracing thoughts\noverstimulation\n\n" +
        "left\nright\nup\ndown\n\n" +
        "focus\nlost\nnoises\nvoices\n\n" +
        "overwhelmed\noverstimulated\noverloaded\noverthinking\n\n" +
        "eyes\nyour eyes\nquieter\nslowly\n\n" +
        "hair\nyour hair\neven\nquieter\n\n" +
        "hand\nyour touch\ntouching me\nsilence\n\n" +
        "heart\nyour heart\nbeating\nsilence\n\n" +
        "you\nsilence\npeace\nlove\n\n" +
        "calm\nbreathe\nease\nlightened\n\n" +
        "you\nangel\nsaviour\nworld\n\n" +
        "i love you\ni love you\ni love you\ni love you\n",
        "seeing you happy\nand making you smile\nis the best thing in the world\nand makes my life worthwhile\n\n" +
        "i love hearing you laugh\ni love seeing you grin\ni love making you happy\nand seeing you win\n\n" +
        "making you feel good\nis the essence of my life\ni want to be there for you\nyour loving man, your knight\n\n" +
        "to keep you safe\nand make you feel loved\nto keep you warm and happy\nlike earth is the heavens above\n\n" +
        "i love you so much\nand wish you a good night\ni hope you sleep well\nand dream of me, holding you tight <3\n",
        "waking up\nthinking of youn\how much i miss you\nand want to cuddle with you\n\n" +
        "walking to work\nthinking of you\nhow i miss going on walks\nand holding your hand\n\n" +
        "grabbing a coffee\nthinking of you\nof having breakfast together\nand yapping forever\n\n" +
        "working at my desk\nthinking of you\nof how i miss your voice\nthat usually comes out my headphones\n\n" +
        "having lunch\nthinking of you\nof how even just a sandwich\nwould be better with you\n\n" +
        "grabbing a snack\nthinking of you\nof how i miss sharing them\nstuffing our faces like fools\n\n" +
        "finishing up work\nthinking of you\noh i'd love to come home\nwith you waiting at the door through\n\n" +
        "coming home\nfalling into bed\nstill thinking of you\nand it's still not enough said\n\n" +
        "falling asleep\nand dreaming so deep\nof you, my love\nand how you make my heart leap\n\n" +
        "and when the morning comes\nand i wake up\ni'll be thinking of you\nand how much i love you, my love\n",
        "the sun, the moon, the stars\nthey cover all our scars\ntogether they light up day n' night\nand make everything alright\n\n" +
        "when i look up at the sky\nand see the moon so bright\ni think of you, my love\nand how you light up my life\n\n" +
        "when i look up at the stars\nand see them twinkling so far\ni think of how you're oh so far\nbut still so near, in my heart\n\n" +
        "when i look up at the sun\nand feel its warmth on my skin\ni think of your hugs and kisses\nand how you make me feel warm within\n\n" +
        "when i look up at the clouds\nand see them drifting by\ni think of how you're always there\nand how you make me feel just as high\n\n" +
        "when i look up at the sky\ni see us flying so high\nthrough the clouds, the stars, the moon\nwhere i'll hold you tight again soon\n\n" +
        "everywhere i look\nand with everything i see\ni think of you, my love\nand how you're the one for me\n",
        "i'm thinking of her all the time\n<b>thinking of who\n</b>that girl...\n<b>which one?</b>\n\n" +
        "the beautiful one\n<b>oh, that one?</b>\nyes, the one with the pretty eyes\n<b>ah, i see</b>\n\n" +
        "the one with the adorable smile\n<b>oh i know who you mean\n</b>yeah... she's so perfect\n<b>she really did it to you, huh?</b>\n\n" +
        "i can't help it\n<b>it's okay, i understand\n</b>she's just so cute\n<b>you're in love, huh?</b>\n\n" +
        "i am... like never before\n<b>that's so sweet\n</b>how do i show her?\n<b>just tell her you love her</b>\n\n" +
        "i already did... countless times\n<b>so where's the issue</b>\nit just doesn't feel enough\n<b>she knows you love her</b>\n\n" +
        "i know... but...\n<b>but what?</b>\nshe doesn't know HOW MUCH i love her\n<b>then show her</b>\n\n" +
        "i don't know how\n<b>just be there for her</b>\nthat's it?\n<b>that's it</b>\n\n" +
        "no... that's not it\n<b>what do you mean?</b>\nthere's so much more\n<b>like what?</b>\n\n" +
        "like... i want to marry her\n<b>oh, that's so sweet\n</b>and i want to be with her forever\n<b>you really love her, don't you?</b>\n\n" +
        "i do... more than anything\n<b>really now?</b>\nyes really, she's my everything\n<b>then keep showing her</b>\n\n" +
        "i will, i promise\n<b>that's all she needs</b>\nand i'll never stop\n<b>that's all she wants</b>\n\n" +
        "i'll show her my love\n<b>show her all the way</b>\nwhatever it takes, i'll do\n<b>do it everyday</b>\n\n" +
        "for the rest of our lives\n<b>that's the spirit</b>\nand even after that\n<b>until the end of time</b>\n\n" +
        "i love her so much\n<b>she loves you too</b>\nand i'd do anything for her\n<b>now she knows you do</b>\n\n" +
        "...\n<b>...</b>\n...\n<b>...</b>\n\n" +
        "tell me... she will look gorgeous\nso gorgeous in that white dress, won't she?\n<b>she will look like an angel</b>\n<b>and you'll be the happiest man alive</b>\n",
        "that pretty girl i know\nis the one tho who i owe\nmy heart, my love, my life\nshe's the one who makes me thrive\n\n" +
        "my whole heart is just for her\nand i love her, that's for sure\nthe one who lights up my life\nand makes me feel alive\n\n" +
        "and i can't help but cheer\nand feel so excited\nwhen she's popping off in-game\nlike a champ, so delighted\n\n" +
        "followed by her cute little gigles\nand her excitement as well\nit makes my heart race\nand my love for her swell\n\n" +
        "and i can't help but think\nhow lucky i am\nto have her in my life\nand to be her man\n\n" +
        "and it makes me so happy\nto see her grow and thrive\nto be part of the journey\nso i can make her my wife\n\n",
        "no matter how far\nyou and i are\ni'll always be there\nand show you how much i care\n\n" +
        "just a phone call away\nat night or at day\nwhatever you need\ni'll be there with speed\n\n" +
        "for you deserve everything\nand i'll try to provide just that\ni vow to be there for you\nand to love you, that's a fact\n\n" +
        "my whole heart is yours\nand every part of me too\ni vow to be there for you\nbecause i really do love you\n\n" +
        "no matter how hard\nor how many tears we shed\ni vow my love to you\neven after we're dead\n\n" +
        "because you are the cutest\nand the prettiest there is\ni couldn't imagine anyone but you\nto be my forever miss\n\n" +
        "so please know, my sweetest girl\nwhatever it is\ni'll always be eyes and ears\nno matter what it is\n\n" +
        "i'll listen and i'll care\ni'll always be there\ni'll always be on your side\nand stay with you through the night\n",
        "can kiss you?\non the cheek\nsoft and gentle\nand so sweet\n\n" +
        "caressing you\nfondling your hair\nkeeping you safe\nto show you i care\n\n" +
        "can i kiss you?\non the forehead\nto show you my love\nwith you i'm never bored\n\n" +
        "while i gently\nmassage your arm\ncuddle under the blanket\nand keep you warm\n\n" +
        "can i kiss you?\non the lips\nand show you my love\nwith every single kiss\n\n" +
        "while my hands run\ndown your back\ndown your legs\nand come right back\n\n" +
        "can i kiss you?\nall over your face\nand show you my love\nin every single place\n\n" +
        "on every single spot\nthat you're insecure\ni'll kiss you on every one\nand show you i'm sure\n\n" +
        "i'm sure that you're perfect\ni'm sure that you're mine\ni'm sure that i love you\nand i'm sure you must be divine\n\n" +
        "kiss you on every spot\nand every scar\nto show you my love\nand show you how far\n\n" +
        "how far i'd go\nhow much i'd do\nto make you feel special\nand how much i love you\n\n" +
        "cause you are a princess\nand only deserve the best\ni'll serve you forever\nand shower you with love to no rest\n\n" +
        "my beautiful princess\nan angel on earth\ni wish that one day\nyou'll see how i see your worth\n",
        "i am here\nno matter what\ni am here\nand i'll never stop\n\n" +
        "i always will be here\ni am certain\nnot once did i doubt it\nnot once did i question\n\n" +
        "you and i\nwe're forever\nno matter what\nwe'll always be together\n\n" +
        "i know it because\nyou are my world\nmy everything\nmy favorite girl\n\n" +
        "i love you so much\nand i always will\nno matter what\ni'll be there still\n",
        "you and i\ntill the end of time\nyou and i\nand i'll make you mine\n\n" +
        "not just for now\nbut forever i mean it\nnot just for a while\nbut forever, believe it\n\n" +
        "i know it sounds cheesy\nbut i mean every word\ni want to be with you\nand i want to be heard\n\n" +
        "heard by your heart\nand heard by your soul\ni want to be with you\nand make you feel whole\n\n" +
        "make you feel loved\nmake you feel safe\nmake you feel special\nand make you feel great\n\n" +
        "truly be the man\nthat would do anything for you\nand truly try my best\nso you feel loved too\n\n" +
        "to truly be the man\nthat your proud to call yours\nthat does all the little things\nand opens all the doors\n\n" +
        "together we'll be\nforever and more\ntogether we'll see\nwhat life has in store\n\n",
        "thank you for the time\nthat we had today\nthe games we played\nand cute things you'd say\n\n" +
        "thank you for watching gntm\nwhile you were in the bath\nthank you for being there\nand making me laugh\n\n" +
        "thank you for the time\nwith just us two\ni love every second\nwith just me and you\n\n" +
        "and i almost cried\nwhen you asked to do so\nit truly means the world\nand i wanted you to know\n\n" +
        "i can't wait to hear your voice again\nand to make sure to make you laugh\nand when i see your beautiful face\ni'll give you tons of love <3\n\n"
        + "\n<h3>march 1st</h3>" +
        "when we play together\nyour voice makes me smile\ni keep getting flustered\nand feel like a child\n\n" +
        "when you hype me up\nand cheer me on\ni feel like the best\nand i feel like i've won\n\n" +
        "it means so much to me\nand always makes me blush\nyou celebrating those wins\ntogether with the adrenaline rush\n\n" +
        "but what really makes me grin\nis watching YOU win\nwhen you clutch up those rounds\nand help all of us win\n\n" +
        "you've gotten so good\nand i'm so proud of you\nyou're the best teammate ever\nand i love you, that's true\n\n" +
        "your calls are the best\nand when you hit those flicks so clean\ni jump out of my chair\nand want to scream\n\n" +
        "'OH MEIN GOTT BEBO'\n'DU BIST SO FREAKING GUUUT'\n'ICH BIN SO FREAKING STOLZ SCHATZ'\n'PLEASE LET ME KISS YOU'\n\n",
        "why are you often doing yourself so tough\ntelling yourself that you're not enough\nyou're the prettiest there is\nmy love, my life, my bliss\n\n" +
        "your eyes, your lips\nyour hair, your hips\nyour voice, your smile\nyour body, your style\n\n" +
        "the way you dress\nit's oh so cute\nthe way you talk\nit's oh so smooth\n\n" +
        "those cozy pullovers\nthose cute little socks\nthose soft pants\nyour whole outfit rocks\n\n" +
        "i love you so much\nand i always will\nyou're my everything\nmy life, my thrill\n\n" +
        "your face is perfect\nand your body is too\nyou're the prettiest girl\nand i'm so in love with you\n\n" +
        "so please, my love\ndon't be so tough\nyou're the most gorgeous there is\nand i can't get enough\n\n",
        "i'm sorry if i'm not always\nsaying things clear\nbut i promise i'm trying\nand i love you, my dear\n\n" +
        "i'm sorry that i can't\ngive you all you need\nbut i promise i'm trying\ntrying to grow, and exceed\n\n" +
        "i'm sorry if i can't\ngive you the security you crave\nbut i promise i'm trying\nto be honest and brave\n\n" +
        "to be there for you\nand keep you up to date\nto tell you everything i'm doing\nand not make you wait\n\n" +
        "when i see that little icon\nor hear my phone ring\ni pull it out my pocket\nand try to respond to everything\n\n" +
        "i'm sorry if i can't\nalways be there\nbut i promise i'm trying\nand i'll always care\n\n" +
        "because you are my princess\nand i want to be your prince\ni want to be there for you\nand make you feel convinced\n\n" +
        "convinced that i love you\nand that i'll always be there\nno matter what happens\nthat i'll always care\n\n" +
        "so please forgive\nif i'm not perfect yet\ni'll keep going and trying\nuntil i'm the best you've met\n",
        "you're my number one\nat every time of day\nwhen you say you need me\ni'll always find a way\n\n" +
        "i'll be there for you\nfight through being tired\ni'll be there for you\nand make sure you're admired\n\n" +
        "when you need me by your side\ni'm in my car in a blink\nwhen you need me to hold you tight\ni'll be there before you can think\n\n" +
        "no matter how long the drive\nno matter how far\ni'll be with you always\nlike a shining star\n\n" +
        "i'll drop everything\nthe moment you call\ni'll be there for you\nand i'll give my all\n\n" +
        "at work, at home, anywhere i am\ni'll drop, stop, and run\njust to be with you\ncause i want to be the one\n",
        "when i hear your voice\ni wanna jump out of my seat\nfull of excitement\nlike a kid for a treat\n\n" +
        "when i hear your laugh\ni wanna laugh too\ncause it's so contagious\nit just passes on through\n\n" +
        "when i hear your giggle\ni wanna giggle too\ncause it's so freaking cute\njust as cute as you\n\n" +
        "when i hear you sing along\ni can't help but smile\ncause no matter which song\nyou nail it every time\n\n" +
        "when i hear you say\n'i love you'\ni can't help\nbut feel my heart melt\n\n" +
        "because i love you too\nand whenever you say it\nit's like the first time\nmaking me feel like heaven, so divine\n\n",
        "today was fun\nfrom start to end\nhearing your voice\nand laughing to no end\n\n" +
        "when we were playing together\nand you were singing along\nmy heart was melting\nand our love felt so strong\n\n" +
        "when you're joking around\nand teasing me with your wit\ni can't help but smile\nand feel like a kid\n\n" +
        "when you're shouting for help\nor making fun of me\nit makes me feel so special\nlike i'm the only one you see\n\n" +
        "i couldn't imagine a day\nwithout you and your voice\nyou're the most gorgeous girl\nand always my first choice\n",
        "in 7 days\nyou'll be turning older\none year wiser\nand one year bolder\n\n" +
        "but all the years\nfrom then to come\nit's you and me\nand we'll have fun\n\n" +
        "every birthday\nyou and me\nfrom now on together\nand forever, you'll see\n\n" +
        "cause whatever it takes\ni'll be there for you\nright by your side\nand loving you too\n\n" +
        "with every year\nyou just grow more beautiful\nand i grow more in love\nand be more dutiful\n\n" +
        "to make you feel special\nand make you feel loved\nto make you laugh\nand care for you, my love\n\n" +
        "i can't wait for your birthday\nand to see your face\ni'll make sure it's special\nand make your heart race\n\n",
        "with every day we spend\nmy brain still can't comprehend\nhow unbelievably cute you are\nmy sweetest princess, my shining star\n\n" +
        "your cute little giggles\nand silly little jokes\nyour accidental word-fumbles\nafter which you jokingly check for a stroke\n\n" +
        "your 'AHHHHHHH's and 'EEEEEEEK's\nand all the little sounds\nyour cute little 'hmm's\nand your cute laugh that resounds\n\n" +
        "your cute little smile\nand your cute little face\nyour cute little eyes\nand your cute little grace\n\n" +
        "when i hear your voice\ni just can't help but melt\nyou're my sweetest princess\ni hope that my love for you is deeply felt\n\n" +
        "and what i always love the most\nis when you make fun of me\nthose little teases and jokes\ntruly make me endlessly happy <3",
        "<h2>an alphabet of affection</h2>a for all the love you give\nb for the beauty you are\nc for the cuteness you show\nand d for the dreams you make come true\n\n" +
        "e for the excitement you bring\nf for the fun we have\ng for the giggles so cute\nand h for the happiness with you, my love\n\n" +
        "i for how you inspire me\nj for the jokes you speak\nk for the kindness you show\nand l for the love that just grows\n\n" +
        "m for the moments we share\nn for the nights we spend\no for the open-ness and care\nand p for your perfection that never ends\n\n" +
        "q for the quiet moments together\nr for the romance through every weather\ns for your smile so cute\nand t for the treasure that is you\n\n" +
        "u for the uniqueness you flash\nv for the voice that makes me blush\nw for the warmth you give\nand x for the XOXO's that make me live\n\n" +
        "y for the years to come\nand z for the zillion ways\nthat i'll prove my love for you\nand make you feel loved till the end of days <3\n",
        "i love you\nit's hard to find the words\nthat truly express\nhow much you mean to me\n\n" +
        "and i'm sorry\nthat i've been down\ni'm sorry\nfor being complicated\n\n" +
        "i'm sorry\nfor not having a cute poem today\ni'm sorry\nfor leaving you hanging this way\n\n" +
        "tomorrow will be\na new brighter day\nand i'll make sure\nto make you feel loved in every way\n\n" +
        "cause i love your voice\nand i love your face\ni love your jokes\nand i miss your embrace\n\n" +
        "i can't wait to see you\non tuesday again\ni'm sorry if i cry\ni'll try to keep it in\n\n",
        "<h2>august 21st</h2>ever so often\ni think of that night\non the 21st of august\nyou under the streetlight\n\n" +
        "the first time we met\nand i saw your face\ni knew you were special\nand i felt so safe\n\n" +
        "those sparkling eyes\nglowing in the night\nthat cute little smile\nthat made my heart take flight\n\n" +
        "the walk that we took\nthe feelings we shared\nheart racing while holding hands\na mix of excitement and care\n\n" +
        "hugging so tight\nonce, twice, and thrice\nwe just couldn't stop\nand it all felt so right\n\n" +
        "too afraid to let go\nand too afraid to kiss\ni couldn't stop looking\nat your beautiful lips\n\n" +
        "my heart still races\nup to this day\nwhen i think of that moment\nand how you took my breath away\n\n" +
        "that spontaneous ride\nwas the best choice of my life\ncause it led me to you\nto my future wife\n",
        "it's today isn't it?\nyes, it's today!!!\nwhat day?!\nher birthday, hooray!!!\n\n" +
        "my beautiful wife\nthe love of my life\nthe prettiest girl\nshe who rocks my world\n\n" +
        "she's turning older\nbut she's still so young\nshe's turning wiser\nand she's still so fun\n\n" +
        "she's the prettiest there is\nwith her gorgeous little face\nher beautiful hips\nand even prettier lips\n\n" +
        "the first birthday with us\nand there's so many more\ni can't wait to celebrate\nhearing our laughter roar\n\n" +
        "i hope you feel special\nand get spoiled today\nwith gifts and food\nand love in every way\n\n" +
        "not just from me\nbut your family and friends\ncause you deserve the best\nand gifts to no end\n\n" +
        "princess treatment\nall around the year\nnot just today\nbut every day, my dear\n\n" +
        "that's what i vow\nand that's what i'll do\ncause you're my princess\nand i love you, that's true\n\n" +
        "so happy birthday my love\ni hope you'll have fun\ni love you so much\nmy one and only one\n\n" +
        "but this poems not over\nthere's still more to say\none year older\nand i love you more every day\n\n" +
        "do you know how much love\nthat will become?\nhow much love\nthat is yet to come?\n\n" +
        "so many things\ni want to do with you\nto make you laugh and smile\nand make you feel so loved too\n\n" +
        "so many things\ni want to say\nto be by your side forever\nand make sure you're okay\n\n" +
        "protect you forever\nand make you feel safe\nto take care of you and hold you tight\nand make everything feel right\n\n" +
        "because you deserve everything\nand so much more\nyou are pure perfection\nthe one i adore\n\n" +
        "there's so many things\nthat we're still to do\nso many places to see\nand adventures to go through\n\n" +
        "keeping you warm in lapland\nand seeing the northern lights\nor traveling to santorini\nand seeing the beautiful sights\n\n" +
        "new york during christmas\nstunned by the big tree\nor attending the lantern festival\nand setting our wishes free\n\n" +
        "to wrap you up in 100 blankets\nand watch the stars above\nor to go to a concert\nand dance to the music we love\n\n" +
        "the harry potter musical\nthat we yet have to see\nor the disneyland parade\nand the fireworks that will be\n\n" +
        "so many things\nthat we're still to do\nso many things\nthat i only want with you\n\n" +
        "so my love\nplease let me be your man\ntoday, and for eternity\ni want to hold your hand\n\n" +
        "i want to hear your voice\nand see your pretty face\ni want to make you feel\nlike how you make my heart race\n\n" +
        "because i am here for life\ncommited, to make you my wife\nto be the one, you've always searched\ni hope that place, in me, you've perched\n\n" +
        "so let's make it happen\nlet's make it come true\nlet's make our dreams\nand make them with you\n\n" +
        "today, tomorrow\nand the days to come\nit's just you and me baby\nand we'll have so much fun\n\n" +
        "enjoy your birthday my princess\ni'm so glad to be with you\ni love you so much\nnever have i loved someone like i do you\n\n" +
        "and while this poem\nnow comes to an end\ni want you to know\nthat there's a gift yet to attend... ;)\n",
        "your birthday is ending\nbut that doesn't change\nthat you're the most special\nin every single way\n\n" +
        "you're my princess every day\nand i'll treat you as such\ni'll make sure you're happy\nand i'll make sure you feel loved\n\n" +
        "get you your little crown\nand a cute little dress\nwith a stunning face like yours\neveryone will be easily impressed\n\n" +
        "you in a dress\nwill be a weapon itself\nmaking everyone fall in love\nand making me feel blessed\n\n" +
        "blessed to be with you\nto be with the prettiest of all\nblessed to be your man\nyou make me feel 10 feet tall\n\n" +
        "i want to make everyone jealous\nto show what they're missing\ni want to show them\nthat you're the one i'm kissing\n\n" +
        "the one i'm holding\nthe one i'm loving\nthe one i'm caring for\nmy angel from above\n\n" +
        "the one that keeps me going\nthe one that makes me smile\nthe favorite person of my life\nis forever you, my love\n\n",
    ];
}
