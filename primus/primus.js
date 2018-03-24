exports.kickstart= function(server){
    console.log("hallo");
    const Primus = require('primus');
    let primus = new Primus(server, {});
    
    primus.on('connection', function(spark){
        console.log("spark connected");
    });
}