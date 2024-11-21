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
    ]
}
