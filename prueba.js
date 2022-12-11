function addtransaction(transaction) {
    // creamos etiqueta article
    const accessHistorial = document.querySelector("#historial");
    const transactionHistorial = accessHistorial.createElement("article");
    

    //VAMOS POR AQUÍ DE VERDAD: buscar como funciona setAttribute
    
    transactionHistorial.setAttribute("id", tweet.id);

    let tweetContent = `
      <p>Autor: ${tweet.author}</p>
      <p>${tweet.message}</p>
      <p>${tweet.likes.length} likes y ${tweet.comments.length} comentarios</p>
      <button onclick="deleteTweet(${tweet.id})">Borrar tweet</button>
    `;

    if (tweet.comments.length > 0) {
      const tweetComments = generateTweetCommentsHTML(tweet.comments)
      tweetContent = tweetContent + `
        <hr>
        <p>Comentarios</p>
        <ul>${tweetComments}</ul>
      `;
    }

    tweetElement.innerHTML = tweetContent;

    // añadimos el tweet a la lista por el principio
    tweetListElement.prepend(tweetElement)
}

  // CÓDIGO ÚTIL:
  // CREO QUE NO HACE FALTA
  function generateTweetCommentsHTML(comments) {
    let HTMLResult = '';
  
    comments.forEach(comment => {
      HTMLResult = HTMLResult + `
        <li>
          <p>Autor: ${comment.author}</p>
          <p>${comment.message}</p>
        </li>
      `
    })
  
    return HTMLResult;
  }
  // PARA BORRAR - VER PRIMERO VÍDEO 4
  async function deleteTweet(tweetId) {
    console.log(tweetId);
  
    // usar aquí window.confirm
    const removeConfirmation = window.confirm("¿Estás seguro de borrar el tweet?");
  
    if (removeConfirmation) {
      await fetch(`https://kc-fake-tweets-api.onrender.com/posts/${tweetId}`, {
        method: "DELETE"
      })
  
      // borrar el tweet de la pantalla
      const tweetElement = document.getElementById(tweetId);
      tweetElement.remove();
    }
  
  }
  // ÚTIL
  function drawTweet(tweet) {
      // creamos etiqueta article
      const tweetElement = document.createElement("article");
  
      tweetElement.setAttribute("id", tweet.id);
  
      let tweetContent = `
        <p>Autor: ${tweet.author}</p>
        <p>${tweet.message}</p>
        <p>${tweet.likes.length} likes y ${tweet.comments.length} comentarios</p>
        <button onclick="deleteTweet(${tweet.id})">Borrar tweet</button>
      `;
  
      if (tweet.comments.length > 0) {
        const tweetComments = generateTweetCommentsHTML(tweet.comments)
        tweetContent = tweetContent + `
          <hr>
          <p>Comentarios</p>
          <ul>${tweetComments}</ul>
        `;
      }
  
      tweetElement.innerHTML = tweetContent;
  
      // añadimos el tweet a la lista por el principio
      tweetListElement.prepend(tweetElement)
  }
  
  async function drawTweets() {
    const response = await fetch("https://kc-fake-tweets-api.onrender.com/posts");
    const tweets = await response.json();
    tweetListElement.innerHTML = "";
  
    
  }
  
  drawTweets();


//pratica

  function sendToGastoIngreso(transaction){
    let ingreso = document.querySelector('#ingreso');
    let stringingreso = ingreso.value
    let realingreso =parseFloat(stringingreso)
    let gasto = document.querySelector('#gasto');
    let stringgasto = gasto.value
    let realgasto =parseFloat(stringgasto)
    let amount = document.querySelector("#quantity");
    let stringamount = amount.value
    let realamount = parseFloat(stringamount);
    console.log(realamount)
    //
   
    if(realamount<0){
        realgasto =  realgasto + realamount
        console.log(realgasto)
    }
    else{
        realingreso = realingreso + realamount
        console.log(realingreso)
    }
}



function sendToGastoIngreso(transaction){
    let ingreso = document.querySelector('#ingreso');
    let stringingreso = 0
    let realingreso =parseFloat(stringingreso)
    let gasto = document.querySelector('#gasto');
    let stringgasto = 0
    let realgasto =parseFloat(stringgasto)
    let amount = document.querySelector("#quantity");
    let stringamount = amount.value
    let realamount = parseFloat(stringamount);
    console.log(realamount)
    
    if(realamount<0){
        realgasto =  realgasto + realamount
        console.log(realgasto)
    }
    else{
        realingreso = realingreso + realamount
        console.log(realingreso)
    }
}




//UTIL HECHO POR MI
// función sumar elementos del array y mostrarlo
let index = 0
let position = 0
let ingresosSum =0 
let gastosSum= 0
function sumArray(ingresosSum, gastosSum){
  while(index<quantityArray.length){
    if(quantityArray[position]<0){
      gastosSum += quantityArray[position];
      index++;
      position++;
    }else{
      ingresosSum += quantityArray[position];
      index++;
      position++;
  
    }
  }
  console.log(ingresosSum)
  console.log(gastosSum)
}


// por aqui en sucio
function sendToGastoIngreso(transaction){
  const historialList = document.querySelector('#list');

  let ingreso = document.querySelector('#ingreso');
  let stringingreso = ingreso.value
  let realingreso =parseFloat(stringingreso)
  let gasto = document.querySelector('#gasto');
  let stringgasto = gasto.value
  let realgasto =parseFloat(stringgasto)
  let amount = document.querySelector("#quantity");
  let stringamount = amount.value
  let realamount = parseFloat(stringamount);
  console.log(realamount)

  index = 0
  //Suma pero no tods los elementos del historial entre ellos 
  while (index < quantityArray.length){
      if(quantityArray[position]<0){
          realgasto =  realgasto + quantityArray[position]
          index++;
          
      }
      else{
          realingreso = realingreso + quantityArray[position]
          index++;
      }
      console.log(realgasto)
      console.log(realingreso)
}}

function addQuantities(){
const inputQuantity = document.querySelector("#quantity");
let stringQuantity = inputQuantity.value;
let realQuantity =parseFloat(stringQuantity);
console.log(realQuantity);

let gastosArray = []
let ingresosArray =[]
if(realQuantity<0){
  gastosArray.push(realQuantity)
}else{
  ingresosArray.push(realQuantity)
}

console.log(gastosArray)
console.log(ingresosArray)
//hacer que se sume
let sumaIngreso = 0
for(var i = 0; i <= ingresosArray.length; i++){
  
  ingresoIndice = ingresosArray[i];
  sumaIngreso += ingresoIndice;
}
// mostrar en cosola ingresos
const getIngreso = document.querySelector("#getIngreso");
const ingresosP = document.createElement("p");
ingresosP.classList.add('ingreso');

//la suma entre corchetes bonitos!!!!
let ingreso = `
    <p>${sumaIngreso}</p>

`;

ingresosP.innerHTML = ingreso;
getIngreso.appendChild(ingresosP);
}



const gastosTotales = document.querySelector("#gasto");
console.log(gastosTotales)
const ingresosTotales = document.querySelector("#ingreso");
let diferencia = sumIngresos - sumGastos

const balance= document.querySelector("#ahorro");

let finalBalance = `
  <p>${diferencia}€</p>
`;

balance.innerHTML(finalBalance);

function showBalance(resultado) {
  const ingresoTotal = document.querySelector("#ingreso");
  const gastoTotal = document.querySelector("#gasto");
  let ahorros = document.querySelector('#ahorros')
  const ahorroTotal = document.createElement("p");
  ahorros.setAttribute("id", resultado)

  let gastoIngreso = `
      <p>${ingresoTotal-gastoTotal}€</p>
  `;
  ahorros.innerHTML = gastoIngreso;
  ahorroTotal.appendChild(ahorros);

}