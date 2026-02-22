import { cards, mainArticle, articles } from "./data.js";


// HTML selector
const navLinks = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");
const heroImg = document.getElementById("hero");

// HTML contents

const getMainArticle = (array) => {
  const { poster, alt, date, title, description } = array;
  const imgMain = document.createElement("img");
  imgMain.src = poster;
  imgMain.alt = alt;
  imgMain.classList.add("main-img", "hero-img", "article-img");
  heroImg.appendChild(imgMain);
  return `
    <p class="date">${date}</p>
    <h2>${title}</h2>
    <p class="main-text">${description}</p>
  `;
};

const getCards = (array) => {

  const showCards = array.map(card => {
    const { date, poster, alt, description, title } = card;
    return `
    <img src="${poster}" alt="${alt}" class="card-img">
    <div class="blog">
    <p class="date">${date}</p>
    <h3>${title}</h3>
    <p>${description}</p>
    </div>
    `;
  }).join("");

  return showCards;
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




// Display html

document.querySelector(".hero-article").innerHTML = getMainArticle(mainArticle);
document.getElementById("home-card").innerHTML = getCards(cards);
document.getElementById("article-page").innerHTML = getMainArticle(mainArticle)



