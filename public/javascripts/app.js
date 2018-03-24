var url="/";

var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

primus.on('data', function(data){
    var title= document.querySelector(".title--live");
    //maar op je homepage is er geen classe title--live -> if loop
    if (title ){
        //&& data=action->fox
        title.innerHTML="Cavia clicked"
    }
    
    //alert("YO");
    //wordt op beide paginas, / en /live een alert getoond
})



  // klikken op cavia -> naar server sturen
document.querySelector(".cavia").addEventListener("click", function(e){
    console.log("Cavia clicked");
    primus.write({action: 'cavia'});
    // op je primus object dat je met de server hebt geconnecteerd
    e.preventDefault();
    //om te zorgen dat je muis niet verspringt? 
    //e staat voor event , je geeft het event mee aan je functie
})
document.querySelector(".fox").addEventListener("click", function(e){
    console.log("Fox clicked");
    primus.write({action: 'fox'});
   
    e.preventDefault();


})