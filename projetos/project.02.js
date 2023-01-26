// transferencia bancaria

const balance = true
const isNotbloked = true
const accountExist = true

const transferok = balance && isNotbloked && accountExist ? 'transferir dinheiro' : 'nao transferir dinheiro'

console.log(transferok)

// o dinheiro so sera trasferido se : tiver dinheiro na conta , a conta não esta bloqueada , e a conta for existente
