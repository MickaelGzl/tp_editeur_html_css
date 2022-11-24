let editor = document.querySelector('#editor');
let preview = document.querySelector('#preview');
let meter = document.querySelector('#meter');
let maxChars = document.querySelector('#maxChars');
let compteur = document.querySelector('.compteur');

let nbChars;

maxChars.addEventListener('input', function () {
  meter.max = maxChars.value;
  // compteur.innerText = `${editor.value.length} / ${meter.max}`;
});

editor.addEventListener('input', function () {
  preview.innerHTML = editor.value;
  nbChars = editor.value.length;
  meter.value = nbChars;
  compteur.innerText = `${nbChars} / ${meter.max}`;

  let toLimit = meter.max - nbChars;
  console.log(`${toLimit}/${meter.max}`);
});
/* test*/
