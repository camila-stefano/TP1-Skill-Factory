// Variable declaration.
const cardsContainer = document.querySelector(".cardContainer"); //Container for the cards.
const imgs = document.querySelectorAll(".imgs");
const scrollUp = document.querySelector(".scrollUpBtn");
const showBtn = document.querySelector("#showBtn");
const clearPage = document.querySelector("#clearBtn");
const cardsAmount = document.querySelector("#cards-amount");
const searchCharInput = document.querySelector("#search-field");
const searchBtn = document.querySelector("#search-btn");
const loadingRick = document.querySelector(".loading");

// Function to remove displayed cards.
const removeCards = () => {
  cardsContainer
    .querySelectorAll(".card")
    .forEach((card) => cardsContainer.removeChild(card));
};

// Show results from search input.
const showSearchResults = async (name) => {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    displayCards(res.data.results.slice(0, parseInt(cardsAmount.value)));
  } catch (err) {
    console.log("There was an error.", err);
  }
};

const getMultipleCharacters = async (amount) => {
  try {
    const list = [];
    for (let i = 1; i <= parseInt(amount); i++) {
      list.push(i);
    }
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${list}`
    );
    displayCards(res.data);
  } catch (err) {
    console.log("Error. ", err);
  }
};

// Function to fetch data from the API and display a new card.
const displayCards = async (data) => {
  try {
    data.forEach((char) => {
      const { id: charId, name, species, status, image } = char;
      let card = document.createElement("div");
      card.classList.add("card");
      cardsContainer.append(card);
      card.innerHTML = `  <img src=${image}></img>
      <h4><b>${name}</b></h4>
      <div class='divider'></div>
      <p><b>ID: </b>${charId}</p>
      <div class='divider'></div>
      <p><b>Species: </b>${species}</p>
      <div class='divider'></div>
      <p><b>Status: </b>${status}</p>`;
    });
  } catch (err) {
    console.log("Error. ", err);
  }
};

// Listener to display the scroll-up button.
document.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollUp.style.display = "block";
  } else scrollUp.style.display = "none";
});

// Listener for the clear-page button.
clearPage.addEventListener("click", removeCards);

// Listener for scroll-up button.
scrollUp.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

// Listener for the show-cards button.
showBtn.addEventListener("click", () => {
  if (cardsContainer.querySelectorAll(".card")) removeCards();
  if (!searchCharInput.value) {
    getMultipleCharacters(parseInt(cardsAmount.value));
  }
});

//Listener for the search button.
searchBtn.addEventListener("click", () => {
  if (searchCharInput.value) {
    if (cardsContainer.querySelectorAll(".card")) removeCards();
    showSearchResults(searchCharInput.value);
  }
  searchCharInput.value = "";
});

// Listener for the enter key on the search input.
searchCharInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (searchCharInput.value) {
      if (cardsContainer.querySelectorAll(".card")) removeCards();
      showSearchResults(searchCharInput.value);
    }
    searchCharInput.value = "";
  }
});
