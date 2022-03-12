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

      let content=document.createElement("div")
      content.setAttribute('class','content')
      card.appendChild(content)

      let name=document.createElement("h2")
      name.textContent=ele.name
      content.appendChild(name)

      let decUl=document.createElement("ul")
      content.appendChild(decUl)

      let nickname=document.createElement("li")
      nickname.textContent="His Nickname: "+ ele.nickname
      decUl.appendChild(nickname)

      let status=document.createElement("li")
      status.textContent="Status: "+ ele.status
      decUl.appendChild(status)

      let portrayed=document.createElement("li")
      portrayed.textContent="Portrayed: "+ ele.portrayed
      decUl.appendChild(portrayed)

      let category=document.createElement("li")
      category.textContent="Category: "+ ele.category
      decUl.appendChild(category)
      
    });
  })
  .catch((err) => {
    console.error(err);
    alert("there a problem please try later");
  });
