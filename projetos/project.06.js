/*            controle de fluxo 
if = se 
else = se não 
else if = mais se...
*/

const temperature = 31

if (temperature >= 36 && temperature <=39){
    console.log('a pessoa esta saudavel')
}
else if (temperature > 39){
  console.log('a pessoa esta com febre')
}
else {
  console.log('a pessoa NÃO esta saudavel')
}