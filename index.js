// Constantes
const transactionFormElement = document.querySelector('#transactionForm');
const listElements = document.querySelector('#list');
const inputConcept = document.querySelector("#concept");
const inputQuantity = document.querySelector("#quantity");
let quantityArray = []

// PRINCIPAL:

transactionFormElement.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    
    let transaction = {
      concept: inputConcept.value,
      quantity: inputQuantity.value,
    };

    
    // Llamar a la función que muestra los inputs en el historial
    showList(transaction);
    //addQuantities();
    //sendToGastoIngreso(transaction);


    // vaciamos los datos para poder hacer más transacciones
    inputConcept.value = "";
    inputQuantity.value = "";
    
    
  });


  //PASANDO DATOS AL HISTORIAL:
  function showList(transaction) {

    const listElement = document.createElement("article");
    listElement.setAttribute("id", transaction.id)

    let gastoIngreso = `
        <p>${transaction.concept}: ${transaction.quantity}€</p>
        <button onclick='deleteTransaction(${transaction.id})'>✘</button>
    `;
    // añadir quantity al array y que sea un número
    quantityArray.push(parseFloat(transaction.quantity));
    console.log(quantityArray)
    listElement.innerHTML = gastoIngreso;
    listElements.appendChild(listElement);

  }

  // función eliminar transacción del historial 
  function deleteTransaction(transactionId){
    console.log(transactionId)
    const removeConfirmation = window.confirm("¿Estás seguro de borrar la transacción?");

    const transactionElement = document.getElementById(transactionId);
    transactionElement.remove();
    // borrar quantity en array de la transacción borrada
    quantityArray.splice(transactionId,1)
    console.log(quantityArray)
  }


// función sumar elementos del array y mostrarlo


// PASANDO LOS DATOS DEL HISTORIAL A GASTOS O INGRESOS



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
    while (index < listElements.length){
        if(realamount<0){
            realgasto =  realgasto + realamount
            index++;
            
        }
        else{
            realingreso = realingreso + realamount
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


