let numeros = [] //Declara array global

function adicionarNumero() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')

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
    listaDeNumeros += numeros[i]
  }

}

