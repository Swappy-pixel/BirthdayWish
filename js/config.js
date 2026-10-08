/* =====================================================================
   ✏️  EDIT ONLY THIS FILE — everything personal lives here.
   - Use {name} and {sender} anywhere in text; they auto-fill.
   - Use \n for a new line.
   - Put photos in assets/images, videos in assets/videos, music in assets/music.
   ===================================================================== */
const birthdayConfig = {
  name: "Sweetie",              // 🎂 birthday person
  sender: "Your Name",          // 💌 you
  music: "",                    // e.g. "assets/music/song.mp3"  ("" = no music, button hidden)
  couple: true,                 // 🧸💕 couple teddies (hug & kiss) on the birthday-wish steps
  coupleImage: "",              // optional: your own couple picture/GIF, e.g. "assets/images/couple.png"
  teddyImage: "",               // e.g. "assets/images/teddy.png" (replaces the drawn teddy)
  sections: { cake: true, memories: true },   // set false to skip a section

  texts: {                      // all on-screen wording
    hello: "Hey You Chikuu...❤️",
    hint: "Your boy has planned a little surprise for you...",
    ready: "Are you ready?",
    day1: "Today is not just another day... ✨",
    day2: "Because it's YOUR special day! 🎂❤️",
    cake: "Okay... let's make this official! 🎂",
    hb: "Happiest Birthday Babe's! 🎉❤️",
    wait: "But wait... I have something special for you.",
    envelope: "I wrote something special for you... 💌",
    to: "For {My Girrlll..}  💌",
    readQ: "Did you read everything? 👀❤️",
    memTitle: "Some Beautiful Memories... 📸❤️",
    memEnd: "Every moment becomes a little more special because of you. ❤️",
    memEnd2: "But this isn't the end yet... 🧸",
    again: "Once Again...",
    hbFinal: "Wish you Happiest Birthday My Chicks my Hotiee my Sexxa.! 🎂🎉❤️",
    madeWith: "I Hate❤️you Babe's.",
    bye: "Until the next surprise... 🧸✨"
  },

  letter: {                     // 💌 the letter inside the envelope
    title: "Happy Birthday Piyuu 🧸❤️",
    greeting: "Dear {Naina},",
 paragraphs: [
  "Dear Naina, kitna ajeeb hai na… hume 7 saal ho gaye and it still makes me feel like we are just mate 2 days ago 😂..",

  "Have you remember that how I wished you first time on your birthday 😂😆 (Hamare life main aur ek manhuj paida hone vali. Or sabko bore karne vali, achisi buri dikhni vali hamari burbak chudail ko uske manhus din ki shubhkamnaye 🤣🤣🤙🏻). Like this… and who knows ki ye boredom mujhe pasand ayega karke 😂 But now this is my sukoon vala space 🙂‍↔️🤌🏻💞.",

  "I'm so glad to have you in my life, my chicks 🤌🏻🐱. You are so beautiful, so elegant, just looking like a wowwww 🤌🏻😍😚💃🏻♥️✨ and I feel so proud always to call you my girrrlllhhhhh 😚🙂‍↕️🫶🏻.",

  "Yes, afsos main ye cheez confess nahi karta, but tere aane se pehle aur tere aane ke baad wala Swapnil… it's totally different. You changed me, you changed my entire life perspective 💯💫. But iske baad ab sir pe mat chadh jana, vaise tune vahi ghar bana liya hai mere sir mein 😶‍🌫️👻😶‍🌫️. Vetal jhaliys majhya life chi ata tu 🤦🏻😂 kuch kar bhi nahi sakta, gandi aadat jo dali hain...",

  "But funs apart, thank you so much to me to pull you in my life 🙂‍↕️🤙🏻💯. Dekha mere laaparwahi ka natija… is More ko Morni jo milgai 🦚🙂‍↔️🤭🫂.",

  "Now seriously funs apart, tere saare sapne pure ho… or sabse pehla sapna main hu, I know 🙂‍↕️🤌🏻😂💯.",

  "Thank you so much piyaa to support me every time whenever I feel down. Thank you for being my backbone 🤌🏻🫂♥️🦚.",

  "Currently mujhe itna kuch kehna hain ki main likh nahi pa raha hu. Agli baar likhunga, ek ek karke..",

  "But currently you are so grateful to have me in your life 🤌🏻😌🙂‍↔️♥️🤭🦚..",

  "Tbh, kyuki fasaliya hain Naina tune mujhe, ab tere bina kuch nahi dikhta mujhe. Har ek life perspective, point or view mein ab tujhe saath rehna hoga… aur nahi rahi to uthake le jaunga, bhale tere ghar se kitni bhi maar pade 🙂‍↕️💪🏻.",

  "7 saal complete kare hain, ab 70 tak koi objection nahi. Terko rehna hi padega 🙂‍↕️😂. Budhape mein bhi to hum bed 🛏️ todna hain 🙂‍↔️💦❤️‍🔥😁.",

  "You are my lucky charm 🧿🫂🦚♥️. Hate you a lot, Babe's 😌💋.",

  "I Hate You My girrrlllhhhhh 🦚😌💋🫂💝✨",

  "Your Handsome Bunny 😎😌..."
],
    quote: "“The best things in life are the people we love.”",   // "" to hide
    signature: "With lots of love,\nYour Bunnny 🧸❤️"
  },

  memories: [                   // 📸 add/remove any number of items (type: "image" | "video")
    { type: "image", src: "assets/images/photo1.jpg", caption: "Beautiful memory ❤️" },
    { type: "image", src: "assets/images/photo2.jpg", caption: "One of my favorite moments 🧸" },
    { type: "video", src: "assets/videos/video1.mp4", caption: "A special moment 🎥❤️" }
  ],

  finalMessage: "May your smile always stay this beautiful,\nmay you always be surrounded by happiness that is Me😎\nand may this year bring you everything you deserve that is also only Me...😎❤️"
};
