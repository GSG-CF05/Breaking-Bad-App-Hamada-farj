let container = document.querySelector(".container");

fetch("https://www.breakingbadapi.com/api/characters")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((ele) => {
      let card = document.createElement("section");
      card.setAttribute("class", "card");
      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.error(err);
    alert("there a problem please try later");
  });
