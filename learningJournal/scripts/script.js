import { blogs } from "./data.js";

const getCardHtml = (array) => {

  const cardHtml = array.map(card => {
    const { date, title, poster, description, alt } = card;
    return `
                    <section class="card card-one">
                    <img src="${poster}"
                        alt="${alt}">
                    <div class="blog">
                        <p>${date}</p>
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                </section>
    `;
  }).join("");

  return cardHtml;
};

document.getElementById("home-cards").innerHTML = getCardHtml(blogs);
