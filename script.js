let numeros = [] //Declara array global

function adicionarNumero() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let outNumeros = document.getElementById('outNumeros')
  let outTexto = document.getElementById('outTexto')

  let numero = Number(inNumero.value) //Obtem conteúdo do campo de entrada

  //Verifica preenchimento dos campos
  if (numero == '' || isNaN(numero)) {
    alert('Digite um número válido')
    inNumero.focus()
    return
  }

  let listaDeNumeros = '' //Concatena saída
  //Adiciona dados ao array de objetos
  numeros.push(numero)
  let primeiroNumero = numeros[0]

  //Limpa campos e posiciona cursor em inNumero
  inNumero.value = ''
  inNumero.focus()

  //Percorre os elementos do array
  for (let i = 1; i < numeros.length; i++) {
    listaDeNumeros +=  numeros[i]
  }
  outNumeros.textcontent = primeiroNumero + listaDeNumeros
  outTexto.textContent = ''
}
//Cria referência ao btAdicionar e associa function ao evento click deste botão
let btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarNumero)

function verificarOrdem() {
  
  if (numeros.length == 0) {
    alert('Adicione um número')
    return
  }
  //Percorre os elementos do array
  for (let i = 0; i < numeros.length -1; i++) {
    if (numeros[i] < numeros[i -1]) {
      outTexto.textContent = 'Os números estão em órdem crescente!'
    }else{
      outTexto.textContent = 'Atenção... os números não estão em órdem crescentes!'
    }
  }
}
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarOrdem)

