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

      let imgBox=document.createElement("div");
      imgBox.classList.add("imgBox")
      card.appendChild(imgBox)

      let img=document.createElement("img");
      img.src=ele.img;
      imgBox.appendChild(img)
    });
  })
  .catch((err) => {
    console.error(err);
    alert("there a problem please try later");
  });
