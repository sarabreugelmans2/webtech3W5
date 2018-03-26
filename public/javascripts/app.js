
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
      
        console.log(data);
        console.log(data.question);
        
        console.log(data.action);
        if(data.question && title){
            title.innerHTML=data.question;
        }
       
        if (data.question != undefined){
        if (data.action == 'spaghetti' && title){
           
            
            s--;   
            console.log(s);

            title.innerHTML=data.question;
            spa.style.backgroundColor = "hsl(168, 100%, "+s+"%)";
            
        }

        if(data.action == 'lasagne' && title){
            l--;
            console.log(l);
            //title.innerHTML="You voted for Lasagne!!";
            las.style.backgroundColor = "hsl(168, 100%, "+l+"%)";
        }
        
    if (s ==5){   
    sw++;
    titlespa.innerHTML="Wins spaghetti: "+sw;   
    }
    if (l == 5){
    lw++;
    titlelas.innerHTML="Wins Lasagne: "+sw;
    }
    if(s==5 || l==5){
        s=60;
        l=60;
        spa.style.backgroundColor = "hsl(168, 100%, "+s+"%)";
        las.style.backgroundColor = "hsl(168, 100%, "+l+"%)";
        title.innerHTML="...";
    }
}

});


/* ----- FORMSUBMIT PART ------ */
var question= document.getElementById("question");
var a1=document.getElementById("a1");
var a2=document.getElementById("a2");

function submitForm(){
    question= document.getElementById("question").value;
    a1= document.getElementById("a1").value;
    a2=document.getElementById("a2").value;
    //console.log(question, a1, a2);
    primus.write({question: question, answer1:a1, answer2:a2});

}




   /* var question=document.getElementById("question").value;
    var a1=document.getElementById("a1").value;
    var a2=document.getElementById("a1").value;*/
/*var question= "de vraag";
var a1= "antw 1";
var a2= "antw 2";*/

    document.querySelector(".spaghetti").addEventListener("click", function(e){
        console.log("Spagheti Time");
        var option= "spaghetti";
        e.preventDefault();
   
    primus.write({question: question, answer1:a1, answer2:a2, action:option});
    
 
    })

    document.querySelector(".lasagne").addEventListener("click", function(e){
        console.log("Lasagne time");
        var option= "lasagne";
       
        e.preventDefault();
    
        primus.write({action:option});
   
    })
    
    //CLEARFORM






/*
/* ------- VOTING PART ------------ 
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

*/