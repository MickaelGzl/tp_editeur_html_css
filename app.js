let editor = document.querySelector('#editor');
let preview = document.querySelector('#preview');
let meter = document.querySelector('#meter');
let maxChars = document.querySelector('#maxChars');
let compteur = document.querySelector('.compteur');
let confirm = document.querySelector('#confirm');
let save = 200;


compteur.innerText = `0 / ${meter.max}`;

confirm.addEventListener('click', function () {
  if(maxChars.value < editor.value.length){
    maxChars.value = save;
    return alert('Attention, la valeur maximale de caractères autorisés ne peut pas' + 
      'être inférieure au nombre de caractères actuellement utilisés !');
  }
  else{
    meter.max = maxChars.value;
    compteur.innerText = `${editor.value.length} / ${meter.max}`;
    meter.low = meter.max / 2;
    meter.high = meter.max / 1.25;
    save = maxChars.value;
  }
});

editor.addEventListener('input', function () {
  if(editor.value.length <= meter.max){
    preview.innerHTML = editor.value;
    meter.value = editor.value.length;
    compteur.innerText = `${meter.value} / ${meter.max}`;
  }
  else{
    return alert("Vous avez dépassé le nombre maximal de caractères !")
  }

  /*let toLimit = meter.max - nbChars;
  console.log(`${toLimit}/${meter.max}`);*/
});
/* test*/
