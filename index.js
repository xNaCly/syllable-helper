// TODO: load words (https://github.com/davidak/wortliste/blob/master/wortliste.txt) into efficient store
// TODO: search words for syllable, return at least 7

window.addEventListener("load", () => {
  const syllable = document.getElementById("syllable");
  const syllableDisplay = document.getElementById("syllable-display");
  syllable.addEventListener("input", (e) => {
    let syllable = e.target?.value;
    syllableDisplay.innerText = syllable;
  });
});
