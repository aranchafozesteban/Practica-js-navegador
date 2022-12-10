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

     // hacer que se sumen los ingresos 
     let sumaIngresos =0
     let sumaGastos = 0
 
     const ingresos = quantityArray.filter((valor)=> valor > 0)
     const gastos = quantityArray.filter((valor)=> valor < 0)
 
     for (let i = 0; i < ingresos.length; i++) {
       sumaIngresos += ingresos[i]
     }
 
     for (let i = 0; i < gastos.length; i++) {
       sumaGastos += gastos[i]
     }
      // mostrar en cosola ingresos
       const getIngreso = document.querySelector("#getIngreso");
       const ingresosP = document.createElement("p");
       ingresosP.classList.add('ingreso');
 
       //la suma entre corchetes bonitos!!!!
       let ingreso = `
           <p>${sumaIngresos}€</p>
 
       `;
 
       ingresosP.innerHTML = ingreso;
       getIngreso.appendChild(ingresosP);
       console.log(sumaIngresos)
      
        // mostrar en cosola gastos
        const getGasto = document.querySelector("#getGasto");
        const gastosP = document.createElement("p");
        gastosP.classList.add('gasto');
  
        //la suma entre corchetes bonitos!!!!
        let gasto = `
            <p>${sumaGastos}€</p>
  
        `;
  
        gastosP.innerHTML = gasto;
        getGasto.appendChild(gastosP);
        console.log(sumaGastos)
   
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

