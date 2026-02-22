import { cards, headContent, articles } from "./data.js";

// HTML selector
const homePage = document.getElementById("home-page");
const viewMoreBtn = document.getElementById("view-more");
const articlePage = document.getElementById("article-page");
const navLinks = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

console.log(navLinks);


// HTML contents

const homepageContent = (array) => {
  const { poster, alt, title, date, description } = array;
  return `
  <img src="${poster}" alt="${alt}" class="hero-img">
  <div class="main-article" id="hero-article">
    <p class="date">${date}</p>
    <h2>${title}</h2>
    <p class="main-text">${description}</p>
  </div>
  `;

};

const articlePageContent = (array1, array2, array3) => {
  const { poster, alt, title, date, description } = array1;
  const showJourneys = array2.map(journey => {
    const { title, par1, par2 } = journey;
    return `
    <div id="author-journey" class="author-journey">
      <h4>${title}</h4>
      <p>${par1}</p>
      <br>
      <p>${par2}</p>
    </div>
    `;
  }).join("");
  return `
    <div class="main-article" id="article">
    <p class="date">${date}</p>
    <h2>${title}</h2>
    <p class="main-text">${description}</p>
    <img src="${poster}" alt="${alt}" class="card-img">
    </div>
    ${showJourneys}
    <h3 class="recent-posts">Recent posts</h3>
    ${getCards(array3)}

  `;

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
document.getElementById("hero-post").innerHTML = homepageContent(headContent);
document.getElementById("home-cards").innerHTML = getCards(cards);
document.getElementById("article-page").innerHTML = articlePageContent(headContent, articles, cards)


