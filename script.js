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
    ]
}
