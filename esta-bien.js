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
    listElement.innerHTML = gastoIngreso;
    listElements.appendChild(listElement);

  }

  // función eliminar transacción del historial
  function deleteTransaction(transactionId){
    console.log(transactionId)
    const removeConfirmation = window.confirm("¿Estás seguro de borrar la transacción?");

    const transactionElement = document.getElementById(transactionId);
    transactionElement.remove();
  }


// almacenando las cantidades del historial en una array 