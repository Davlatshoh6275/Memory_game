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

  cards.push(card_elm);

  conteiner_elm.appendChild(card_elm);
}

{
  /* <i class='bx bx-home'></i> */
}
{
  /* <i class='bx bxs-castle'></i> */
}
{
  /* <i class='bx bx-palette'></i>
<i class='bx bxl-visual-studio'></i>
<i class='bx bxl-github'></i>
<i class='bx bxl-apple'></i>
<i class='bx bxl-codepen'></i>
<i class='bx bxl-git'></i> */
}
