const conteiner_elm = document.querySelector("#container");
const cards_lngth = 16;
const cards = [];

let previous_shown_card = undefined;

let icons = [
  "bx-home",
  "bxs-castle",
  "bx-palette",
  "bxl-visual-studio",
  "bxl-github",
  "bxl-apple",
  "bxl-codepen",
  "bxl-git",
];

// copy the icons again (doubl them)
icons.push(...icons);

for (let i = 0; i < cards_lngth; i++) {
  const card_elm = document.createElement("div");
  card_elm.classList.add("card");

  card_elm.innerHTML = `
        <div class='front'>
            <i class='bx ${icons[i]}'></i>
        </div>
        <div class='back'>
            <small>Click me</small>
        </div>
    `;

  card_elm.onclick = () => {
    if (!card_elm.classList.contains("show")) {
      card_elm.classList.add("show");
    }

    if (!previous_shown_card) {
      previous_shown_card = card_elm;
    } else {
      const icon_one = previous_shown_card.querySelector("i").classList[1];

      const icon_two = card_elm.querySelector("i").classList[1];

      if (icon_one !== icon_two) {
        const temp = previous_shown_card;
        setTimeout(() => {
          temp.classList.remove("show");
          card_elm.classList.remove("show");
        }, 1000);
      }

      previous_shown_card = undefined;
    }
  };

  cards.push(card_elm);

  conteiner_elm.appendChild(card_elm);
}
