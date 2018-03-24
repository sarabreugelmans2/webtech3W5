
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
    //var spa= document.querySelector(".spaghetti--live");
    //var las= document.querySelector(".lasagne--live");
    //maar op je homepage is er geen classe title--live -> if loop
    /*if (title ){
        //&& data=action->fox
        title.innerHTML="Vakje clicked"
    }*/
    console.log(data);
    //vanaf hier ga ik knoeien::
    //var d = JSON.parse(this.data);
    console.log(data.action);
    if (data.action == 'spaghetti' && title){
        title.innerHTML="Spaghetti bitches";
        //spa.style.backgroundColor = "red";
    }

    if(data.action == 'lasagne' && title){
        title.innerHTML="Lasagne!!";
        //las.style.backgroundColor = "red";
    }


});



  // klikken op div spaghetti -> naar server sturen
 document.querySelector(".spaghetti").addEventListener("click", function(e){
    console.log("Spagheti Time");
    primus.write({action: 'spaghetti'});
    // op je primus object dat je met de server hebt geconnecteerd
e.preventDefault();
    //om te zorgen dat je muis niet verspringt? 
    //e staat voor event , je geeft het event mee aan je functie
})

document.querySelector(".lasagne").addEventListener("click", function(e){
    console.log("Lasagne time");
    primus.write({action: 'lasagne'});
   
    e.preventDefault();


})