import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <div class="character-inner">
      <article class="character-card">
        <image src=${character.image} alt="">
        <h2>${character.name}</h2>
      </article>
      <article class="character-card">
        <h3>Episodes:  <span>${character.episode.length}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
