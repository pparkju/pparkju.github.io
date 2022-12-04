const quotes = [
  {
    quote:
      "If we can’t accept limitations, then we’re no better than the bad guys.",
    author: "- Iron Man -",
  },
  {
    quote: "With great power comes great responsibility.",
    author: "- Spiderman -",
  },
  {
    quote: "I want to choose my own path. Live in the moment.",
    author: "- Thor -",
  },
  {
    quote:
      "Cowards never start. The weak never finish and the winners never quit.",
    author: "- Iron Man -",
  },
  {
    quote:
      "Arrogance and fear keep you from learning the simplest and most significant lesson of all.",
    author: "- Doctor Strange -",
  },
  {
    quote: "I can do this all day.",
    author: "- Captain America -",
  },
  {
    quote:
      "Human development may feel slow, but something great may emerge in the process.",
    author: "- Eternals -",
  },
  {
    quote: "It’s still you inside of it.",
    author: "- Betty Ross -",
  },
  {
    quote:
      "You are the light of my life, my precious son, my little Star-Lord.",
    author: "- Meredith Quill -",
  },
  {
    quote:
      "You’re her hero, Scott. Just be the person that she already thinks you are.",
    author: "- Maggie Lang -",
  },
  {
    quote: "It’s hard for a good man to be a king.",
    author: "- Black Panther -",
  },
  {
    quote: "We can’t do this alone. We need you.",
    author: "- Carol Danvers -",
  },
  {
    quote:
      "The entire time I knew him, he only ever had one goal to wipe out half the universe.",
    author: "- Gamora -",
  },
  {
    quote: "You are my greatest adventure.",
    author: "- Mr. Incredible -",
  },
  {
    quote:
      "You must not let anyone define your limits because of where you come from. Your only limit is your soul.",
    author: "- Ratatouille -",
  },
  {
    quote: "Sometimes the smallest things take up the most room in your heart.",
    author: "- Pooh -",
  },
  {
    quote:
      "Never say good bye because goodbye means going away and going away means forgetting.",
    author: "- Peter Pan -",
  },
  {
    quote:
      "Don’t spend your time lookin’ around for something you want that can’t be found.",
    author: "- Jungle Book -",
  },
  {
    quote:
      "A conscience is that still, small voice that people won’t listen to.",
    author: "- Grandpa -",
  },
  {
    quote: "I have just met you and I love you.",
    author: "- Dug -",
  },
  {
    quote: "Today’s special moments are tomorrow’s memories.",
    author: "- Aladdin -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
