function search(syllable) {
  let r = [];
  for (let i = 0; i < wordList.length && r.length <= 5; i++) {
    let w = wordList[i].toUpperCase();
    if (w.includes(syllable)) {
      r.push(w);
    }
  }
  return r;
}

window.addEventListener("load", () => {
  const syllable = document.getElementById("syllable");
  const syllableDisplay = document.getElementById("syllable-display");
  const matchesContainer = document.getElementById("matches-container");
  syllable.addEventListener("input", (e) => {
    let syllable = e.target?.value.toUpperCase();
    syllableDisplay.innerText = syllable;
    let r = search(syllable).map((e) => {
      let r = document.createElement("p");
      r.innerText = e;
      return r;
    });
    matchesContainer.replaceChildren(...r);
  });
});
