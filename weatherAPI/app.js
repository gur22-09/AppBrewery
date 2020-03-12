const express = require('express');
const app = express();
const https = require('https');
const body = require('body-parser');

app.use(body.urlencoded({extended:true}));




app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');
    

            

        
    
});


app.post('/',function(req,res){

    console.log(req.body);
    let city = req.body.city;

    let unit = req.body.unit;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a865d05eab3aa7e4d80567ca47b76b48&units=${unit}`;
    https.get(url,function(respond){
         
        if(respond.statusCode == 200){
             respond.on('data',function(data){
            
             const weatherData = JSON.parse(data);

             const temp = weatherData.main.temp;

             const description = weatherData.weather[0].description;

             const icon = weatherData.weather[0].icon;
            
             const iconUrl =  `http://openweathermap.org/img/wn/${icon}@2x.png`;
            
            
            
            
             res.write(`<p>the weather description is ${description} </p>` );
             res.write(`<img src=${iconUrl} alt='weather-icon'>`);
             res.write(`<h1>the tempertaur in ${city} is currently ${temp}&deg</h1>`);
            
             res.send();
            });
        }else{
            res.send(`<h1>Oops! something went wrong try again please!</h1>`)
        }

    });

});    






    app.listen(3000,function(){
    console.log(`server up on port 3000`);
    
});