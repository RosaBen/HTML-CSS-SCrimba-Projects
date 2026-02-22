import { cards, headContent, articles } from "./data.js";

// HTML selector
const homePage = document.getElementById("home-page");
const viewMoreBtn = document.getElementById("view-more");
const articlePage = document.getElementById("article-page");
const navLinks = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

console.log(navLinks);


// HTML contents

const mainArticle = (array) => {
  const { poster, alt, title, date, description } = array;
  return `
  <img src="${poster}" alt="${alt}" class="hero-img">
  <div class="main-article" id="article">
    <p class="date">${date}</p>
    <h2>${title}</h2>
    <p class="main-text">${description}</p>
  </div>
  `;
};

const journeyHtml = (array) => {
  const showJourneys = array(journey => {
    const { title, par1, par2 } = journey;
    return `
      <h4>${title}</h4>
      <p>${par1}</p>
      <br>
      <p>${par2}</p>
    `;
  }).join("");

  return showJourneys;
};

const getCards = (array) => {

  const displayCardsHtml = array.map(card => {
    const { date, poster, alt, description, title } = card;
    return `
    <section class="card card-one">
    <img src="${poster}" alt="${alt}" class="card-img">
    <div class="blog">
    <p class="date">${date}</p>
    <h3>${title}</h3>
    <p>${description}</p>
    </div>
    </section>
    `;
  }).join("");
  return displayCardsHtml;
};

// Navigation

const navigatePage = () => {
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetPage = this.dataset.page;

      pages.forEach(page => {
        page.classList.remove("active");
      });

      document.getElementById(targetPage + "-page").classList.add("active");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
};

navigatePage();


// Addeventlistener

viewMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  homePage.classList.remove("active");
  articlePage.classList.add("active");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// Display html
document.getElementById("hero-post").innerHTML = mainArticle(headContent);
document.getElementById("home-cards").innerHTML = getCards(cards);
document.getElementById("author-journey").innerHTML = journeyHtml(articles);
document.getElementById("article-page").innerHTML = articlePageContent(headContent, articles, cards)



