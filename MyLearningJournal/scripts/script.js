import { cards, headContent, articles } from "./data.js";

const homepageContent = (arr1) => {
  const { poster, alt, title, date, description } = arr1;
  return `
  <img src="${poster}" alt="${alt}" class="hero-img">
  <div class="main-article" id="hero-article">
    <p class="date">${date}</p>
    <h2>${title}</h2>
    <p class="main-text">${description}</p>
  </div>
  `;

};

document.getElementById("hero-post").innerHTML = homepageContent(headContent);


// import { blogs } from "./data.js";

// const getCardHtml = (array) => {

//   const cardHtml = array.map(card => {
//     const { date, title, poster, description, alt } = card;
//     return `
//                     <section class="card card-one">
//                     <img src="${poster}"
//                         alt="${alt}">
//                     <div class="blog">
//                         <p>${date}</p>
//                         <h3>${title}</h3>
//                         <p>${description}</p>
//                     </div>
//                 </section>
//     `;
//   }).join("");

//   return cardHtml;
// };

// const previewArticleHtml = () => {

//   return `
//  
//                         
//                         
//  `;
// };

// document.getElementById("hero-article").innerHTML = previewArticleHtml();
// document.getElementById("home-cards").innerHTML = getCardHtml(blogs);
// document.getElementById("post-article").innerHTML = previewArticleHtml();
// document.getElementById("view-post-cards").innerHTML = getCardHtml(blogs);
