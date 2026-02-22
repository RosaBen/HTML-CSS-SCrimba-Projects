import { cards, mainArticle, articles } from "./data.js";


// HTML selector
const navLinks = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");
const heroImg = document.getElementById("hero");
const viewMoreBtn = document.getElementById("view-more");
const homePage = document.getElementById("home-page");
const articlePage = document.getElementById("article-page");
const aboutPage = document.getElementById("about-page");
const allPages = document.querySelectorAll(".page");

// HTML contents

const getMainArticle = (array) => {
  const { date, title, description } = array;
  return `
    <p class="date">${date}</p>
    <h2>${title}</h2>
    <p class="main-text">${description}</p>
  `;
};

const getMainImg = (array) => {
  const { poster, alt } = array;
  return `
    <img src="${poster}" alt="${alt}" class="main-img">
  `;
};

const getCards = (array) => {

  const showCards = array.map(card => {
    const { date, poster, alt, description, title, id } = card;
    return `
    <div class="grid-card card${id}">
    <img src="${poster}" alt="${alt}" class="card-img">
    <div class="blog">
    <p class="date">${date}</p>
    <h3>${title}</h3>
    <p>${description}</p>
    </div>
    </div>
    `;
  }).join("");

  return showCards;
};

const getJourneys = array => {
  const showJourneys = array.map(journey => {
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

viewMoreBtn.addEventListener("click", function () {
  allPages.forEach(page => {
    page.classList.remove("active");
  });

  articlePage.classList.add("active");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// Display html

document.querySelector(".hero-article").innerHTML = getMainArticle(mainArticle);
document.querySelector(".hero-img").innerHTML = getMainImg(mainArticle);
document.getElementById("home-card").innerHTML = getCards(cards);
document.querySelector(".main-article").innerHTML = getMainArticle(mainArticle);
document.querySelector(".article-img").innerHTML = getMainImg(mainArticle);
document.getElementById("article-journeys").innerHTML = getJourneys(articles);
document.getElementById("article-card").innerHTML = getCards(cards);
document.getElementById("about-card").innerHTML = getCards(cards);
document.getElementById("about-journeys").innerHTML = getJourneys(articles)



