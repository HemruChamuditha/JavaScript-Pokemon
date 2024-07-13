// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

pokemonImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let container = document.querySelector(".container");

for (let index = 1; index <= 151; index++) {
  let pokemonBox = document.createElement("div");
  let pokemon = document.createElement("img");
  let number = document.createElement("span");

  pokemon.src = `${pokemonImg}${index}.png`;
  number.append(index);

  pokemonBox.append(pokemon);
  pokemonBox.append(number);

  container.append(pokemonBox);
}
