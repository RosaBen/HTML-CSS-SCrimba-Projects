import { cards, mainArticle, articles } from "./data.js";
console.log(mainArticle);

// HTML selector



// HTML contents

const getMainArticle = (array) => {
  const { poster, alt, date, title, description } = array;
  return `
  <div class="main-article hero-article" id="article">
    <p class="date">${date}</p>
    <h2>${title}</h2>
    <p class="main-text">${description}</p>
  </div>
  <img src="${poster}" alt="${alt}" class="main-img hero-img article-img">
  `;
};



// Navigation




// Addeventlistener




// Display html

document.getElementById("hero").innerHTML = getMainArticle(mainArticle)



