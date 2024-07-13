// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

pokemonImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let container = document.querySelector(".container");

for (let index = 1; index <= 151; index++) {
  let pokemon = document.createElement("img");
  pokemon.src = `${pokemonImg}${index}.png`;

  container.append(pokemon);
}
