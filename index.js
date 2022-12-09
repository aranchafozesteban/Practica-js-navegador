// Haciendo que el form pase los datos introducidos a gastos o ingresos:

// PASANDO DATOS AL HISTORIAL:

const transactionFormElement = document.querySelector('#transactionForm');
const listElements = document.querySelector('#list');

transactionFormElement.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const inputConcept = document.querySelector("#concept");
    const inputQuantity = document.querySelector("#quantity");
    
    
    let transaction = {
      concept: inputConcept.value,
      quantity: inputQuantity.value,
    };

    
    // Llamar a la función que muestra los inputs en el historial
    showList(transaction);
    sendToGastoIngreso(transaction);

    // vaciamos los datos para poder hacer más transacciones
    inputConcept.value = "";
    inputQuantity.value = "";
    
    
  });

  // Creamos la función que añada los datos del input al historial
  function showList(transaction) {

    const listElement = document.createElement("article");
    listElement.classList.add('getList');

    let gastoIngreso = `
        <p>${transaction.concept}: ${transaction.quantity}€</p>

    `;

    listElement.innerHTML = gastoIngreso;
    listElements.appendChild(listElement);

  }

// PASANDO LOS DATOS DEL HISTORIAL A GASTOS O INGRESOS

function sendToGastoIngreso(transaction){
    const historialList = document.querySelector('#historial');

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
    //Suma pero no tods los elementos del historial entre ellos 
        if(realamount<0){
            realgasto =  realgasto + realamount
            console.log(realgasto)
        }
        else{
            realingreso = realingreso + realamount
            console.log(realingreso)
        }
}

