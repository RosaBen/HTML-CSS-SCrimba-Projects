const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

posts.forEach((post) => {
  const articles = document.querySelector(".posts");

  const article = document.createElement("div");
  article.classList.add("post");
  articles.appendChild(article);

  const sectionUser = document.createElement("section");
  sectionUser.classList.add("user-info");
  article.appendChild(sectionUser);

  const userAvatar = document.createElement("img");
  userAvatar.src = post.avatar;
  userAvatar.alt = post.username + "-avatar";
  sectionUser.appendChild(userAvatar);

  const divNameUser = document.createElement("div");
  divNameUser.classList.add("name-and-location");
  sectionUser.appendChild(divNameUser);

  const pName = document.createElement("p");
  const pLocation = document.createElement("p");
  pName.textContent = post.name;
  pLocation.textContent = post.location;
  divNameUser.appendChild(pName);
  divNameUser.appendChild(pLocation);

  const sectionImage = document.createElement("section");
  sectionImage.classList.add("image");
  article.appendChild(sectionImage);

  const postImage = document.createElement("img");
  postImage.src = post.post;
  postImage.alt = "portait of " + post.name;
  sectionImage.appendChild(postImage);

  const postInfos = document.createElement("section");
  postInfos.classList.add("image-info");
  article.appendChild(postInfos);

  const divIcons = document.createElement("div");
  divIcons.classList.add("icons");
  postInfos.appendChild(divIcons);
  const heart = document.createElement("img");
  const comment = document.createElement("img");
  const share = document.createElement("img");

  heart.src = "images/icon-heart.png";
  heart.alt = "Like post here";
  comment.src = "images/icon-comment.png";
  comment.alt = "Comment here";
  share.src = "images/icon-dm.png";
  share.alt = "Share post here";
  divIcons.appendChild(heart);
  divIcons.appendChild(comment);
  divIcons.appendChild(share);

  const divPostInfos = document.createElement("div");
  postInfos.appendChild(divPostInfos);
  divPostInfos.classList.add("post-infos");
  const pLikes = document.createElement("p");
  const pComment = document.createElement("p");
  const spanUsername = document.createElement("span");
  pLikes.textContent = post.likes + " likes";
  spanUsername.textContent = post.username;
  pComment.appendChild(spanUsername);
  pComment.appendChild(document.createTextNode(" " + post.comment));

  divPostInfos.appendChild(pLikes);
  divPostInfos.appendChild(pComment);
});
