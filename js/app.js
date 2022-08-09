// Variable declaration.

const cardsContainer = document.querySelector(".cardContainer"); //Container for the cards.
const imgs = document.querySelectorAll(".imgs");
const scrollUp = document.querySelector(".scrollUpBtn");
const showBtn = document.querySelector("#showBtn");
const clearPage = document.querySelector("#clearBtn");
let cardsAmount = document.querySelector("#cards-amount");
let searchCharacter = document.querySelector("#search-field");

// Function to display multiple cards.
const displayCards = async (cardsAmount) => {
  for (let i = 1; i <= cardsAmount; i++) await createCard(i);
};

// Function to remove displayed cards.
const removeCards = () => {
  cardsContainer
    .querySelectorAll(".card")
    .forEach((card) => cardsContainer.removeChild(card));
};

// Function to fetch data from the API and display a new card.
const createCard = async (id) => {
  try {
    const char = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const { id: charId, name, species, status, image } = char.data;
    let card = document.createElement("div");
    card.classList.add("card");
    cardsContainer.append(card);
    card.innerHTML = `<img src=${image}></img>
    <p><b>ID: </b>${charId}</p>
    <div class='divider'></div>
    <p><b>Name: </b>${name}</p>
    <div class='divider'></div>
    <p><b>Species: </b>${species}</p>
    <div class='divider'></div>
    <p><b>Status: </b>${status}</p>`;
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
  displayCards(parseInt(cardsAmount.value));
});
