let container = document.querySelector(".container");

fetch("https://www.breakingbadapi.com/api/characters")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
    alert("there a problem please try later");
  });
