
var url="/";

var primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });
  var s=60;
  var l=60;
  var sw =0;
  var lw =0;
primus.on('data', function(data){
     
        var title= document.querySelector(".title--live");
        var titlespa= document.querySelector(".title--spa");
        var titlelas= document.querySelector(".title--las");
        var spa= document.querySelector(".spaghetti--live");
        var las= document.querySelector(".lasagne--live");
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
           
            
            s--;   
            console.log(s);

            title.innerHTML="You voted for Spaghetti!!";
            spa.style.backgroundColor = "hsl(168, 100%, "+s+"%)";
            
        }

        if(data.action == 'lasagne' && title){
            l--;
            console.log(l);
            title.innerHTML="You voted for Lasagne!!";
            las.style.backgroundColor = "hsl(168, 100%, "+l+"%)";
        }
        
    if (s ==5){   
    sw++;
    titlespa.innerHTML="Spaghetti won "+sw+" times";   
    }
    if (l == 5){
    lw++;
    titlelas.innerHTML="Spaghetti won "+sw+" times";
    }
    if(s==5 || l==5){
        s=60;
        l=60;
        spa.style.backgroundColor = "hsl(168, 100%, "+s+"%)";
        las.style.backgroundColor = "hsl(168, 100%, "+l+"%)";
        title.innerHTML="...";
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