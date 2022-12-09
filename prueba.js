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