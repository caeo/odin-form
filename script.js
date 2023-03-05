const nome = document.querySelector('#primeiro-nome')
const sobrenome = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const senha = document.querySelector('#senha')
const confirmarSenha = document.querySelector('#confirmar-senha')

const nomeError = document.querySelector('#nome-erro')
const sobrenomeError = document.querySelector('#sobrenome-erro')
const emailError = document.querySelector('#email-erro')
const telefoneError = document.querySelector('#telefone-erro')
const senhaErro = document.querySelector('#senha-erro')
const confirmarSenhaErro = document.querySelector('#confirmar-senha-erro')

nome.addEventListener('input', function (e) {
  if (nome.value === '') {
    nomeError.textContent = 'Por favor, digite seu primeiro nome'
  } else {
    nomeError.textContent = ''
  }
})

sobrenome.addEventListener('input', function () {
  if (sobrenome.value === '') {
    sobrenomeError.textContent = 'Por favor, digite seu sobrenome'
  } else {
    sobrenomeError.textContent = ''
  }
})

email.addEventListener('input', function () {
  if (email.validity.typeMismatch) {
    emailError.textContent =
      'Por favor, digite um email válido, Ex.: joao@email.com'
  } else {
    emailError.textContent = ''
  }
})

telefone.addEventListener('input', function () {
  if (telefone.validity.patternMismatch) {
    telefoneError.textContent =
      'Por favor, utilize o seguinte formato: (xx) xxxxx-xxxx'
  } else {
    telefoneError.textContent = ''
  }
})

senha.addEventListener('input', function () {
  if (senha.validity.patternMismatch) {
    valorAtual = senha.value
    regexCaps = /A-Z/g
    regexDigito = /[0-9]/g
    let resultado = ''
    if (regexCaps.test(valorAtual)) {
      resultado += ''
    } else {
      resultado += 'Está faltando pelo menos 1 letra maiúscula.'
      resultado += '\n'
    }
    if (regexDigito.test(valorAtual)) {
      resultado += ''
    } else {
      resultado += 'Está faltando pelo menos 1 dígito'
      resultado += '\n'
    }
    if (valorAtual.length <= 8) {
      resultado += 'A senha precisa conter pelo menos 8 caracteres'
      resultado += '\n'
    } else {
      resultado += ''
    }

    console.log(resultado)
    senhaErro.textContent = resultado
  } else {
    senhaErro.textContent = ''
  }
})

confirmarSenha.addEventListener('input', function () {
  if (confirmarSenha.value != senha.value) {
    confirmarSenhaErro.textContent = 'As senhas não correspondem'
  } else {
    confirmarSenhaErro.textContent = ''
  }
})
