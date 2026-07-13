function sortear(){
   
    const valorMin = Math.ceil(document.querySelector('#input-min').value)
    const valorMax = Math.floor(document.querySelector('#input-max').value)

    const valorSorteado = Math.floor(Math.random() * (valorMax - valorMin + 1) + valorMin);
    alert(valorSorteado);
}