
//desbloqueio de tela do telefone

const face = true
const pin = false
const digital = false 

const desblock = face || pin || digital ? "desbloquear telefone" : "não desbloquear telefone "

console.log(desblock)

// o celular ira ser desbloqueado atraves da expressão facial