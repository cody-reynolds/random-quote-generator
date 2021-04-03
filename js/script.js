//Treehouse FSJS Techdegree: project 1 - A Random Quote Generator
//by Cody Reynolds


/*** 
 * `quotes` array 
***/

  // This array contains 10 movie quotes stored as objects. 
  // Source refers to the actor.
  // Citation refers to the movie the quote is taken from.

let quotes = [
{
  quote: `My mama always said life was like a box of chocolates. You never know what you're gonna get.`,
  source: "Tom Hanks",
  character: "Forrest Gump",
  citation: "Forrest Gump",
  year: 1994
},
{
  quote: `A martini. Shaken, not stirred.`,
  source: "Sean Connery",
  character: "James Bond",
  citation: "Goldfinger",
  year: 1964
},
{
  quote: `Toto, I have a feeling we're not in Kansas anymore. We must be over the rainbow!`,
  source: "Judy Garland",
  character: "Dorothy Gale",
  citation: "The Wizard of Oz",
  year: 1939
},
{
  quote: `All those moments will be lost in time, like tears in rain.`,
  source: "Rutger Hauer",
  character: "Roy Batty",
  citation: "Blade Runner",
  year: 1982
},
{
  quote: `Just when I thought I was out, they pull me back in!`,
  source: "Al Pacino",
  character: "Michael Corleone",
  citation: "The Godfather: Part III",
  year: 1990
},
{
  quote: `Roads? Where we're going, we don't need roads.`,
  source: "Christopher Lloyd",
  character: "Dr. Emmett Brown",
  citation: "Back to the Future",
  year: 1985
},
{
  quote: `The answer is out there, Neo. It's looking for you, and it will find you if you want it to.`,
  source: "Carrie-Anne Moss",
  character: "Trinity",
  citation: "The Matrix",
  year: 1999
},
{
  quote: `Your scientists were so preoccupied with whether or not they could that they didn't stop to think if they should.`,
  source: "Jeff Goldblum",
  character: "Dr. Ian Malcolm",
  citation: "Jurassic Park",
  year: 1993
},
{
  quote: `I am altering the deal. Pray I don't alter it any further.`,
  source: "James Earl Jones",
  character: "Darth Vader",
  citation: "Star Wars: The Empire Strikes Back",
  year: 1980
},
{
  quote: `I'd buy that for a dollar!`,
  source: "S.D. Nemeth",
  character: "Bixby Snyder",
  citation: "Robocop",
  year: 1987
}
]


/***
 * `getRandomQuote` function
***/

  // This function uses JavaScript Math methods to obtain a random number from 0 to the maximum index value of the array (9). 
  // The variable randomQuote uses the randomNumber to access the quote object at that index number.


  function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}


/***
 * `printQuote` function
***/

  // This function first performs the getRandomQuote function to obtain a quote object from the array.
  // The randomly obtained quote is stored in a variable called result.
  // Next, the function uses string interpolation to bring in the values of the quote and source properties of the object.
  // These are stored within a template literal variable called html.
  // Conditional formulas check to see if additional quote properties are available.
  // If so, the values of those properties are added to html as spans.
  // Finally, the function sets the contents of the quote-box to the contents of html.
  // For extra credit: the page's background color is set to a random color using the randomColorValue function below.


function printQuote() {
  let result = getRandomQuote();
  let html = `<p class="quote">${result.quote}</p><p class="source">${result.source}`;
  if (result.character) {
   html += `<span class="character">${result.character}</span>`;
  }
  if (result.citation) {
   html += `<span class="citation">${result.citation}</span>`;
  }
  if (result.year) {
   html += `<span class="year">${result.year}</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = `rgb(${randomColorValue()})`;
}

printQuote();

/***
 * `randomColorValue` function
***/

  // This function uses JavaScript Math methods to obtain three random numbers from 0 to 155 to generate an RGB color value.
  // These 3 numbers are concatenated into a string and stored as randomColor.
  // 155 is used as a maximum so the colors will be darker and provide better contrast to white text.


function randomColorValue() {
  let randomRedValue = Math.floor(Math.random() * 156);
  let randomGreenValue = Math.floor(Math.random() * 156);
  let randomBlueValue = Math.floor(Math.random() * 156);
  let randomColor = (`${randomRedValue}, ${randomGreenValue}, ${randomBlueValue}`);
  return randomColor;
}


//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);


//Updated countdown timer
//Thanks to Alex Hipolito (https://github.com/alexhippo) for teaching me this use of setInterval.
let timeRemaining = 15;
let quoteButton = document.getElementById('load-quote');

quoteButton.innerHTML = `Show a new quote in ${timeRemaining} seconds`;

function countdown() {
  if (timeRemaining == 0) {
  printQuote();
  timeRemaining = 15;
  quoteButton.innerHTML = `Show a new quote in ${timeRemaining} seconds`;
  } else {
    timeRemaining --;
    quoteButton.innerHTML = `Show a new quote in ${timeRemaining} seconds`;
  }
}

window.setInterval(countdown, 1000);