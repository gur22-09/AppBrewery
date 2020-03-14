const express = require('express');
const app = express();
const body = require('body-parser');
const https = require('https');



app.use(express.static(__dirname+'/public'));
app.use(body.urlencoded({extended: true}));


app.get('/',function(req,res){

 res.sendFile(__dirname+'/signUp.html');
 

});


app.post('/',function(req,res){
    //console.log(`sucess`);
    const  firstName = req.body.firstName;
    const  lastName = req.body.lastName;
    const email = req.body.email;
    //console.log(req.body);
    

    let data = {
        members:[
            {
              email_address:email,
              status:'subscribed',
              merge_fields:{
                 FNAME:firstName,
                 LNAME:lastName 
              }  
            }
        ]
    };
    
    let jsonData = JSON.stringify(data);

    const options ={
      method:'POST',
      auth: 'gurprit:80a1d1ba60f321997340ddfe19470cfc-us4'
    }
     //endpoint - https://us4.api.mailchimp.com/3.0
     //path - lists/{list-id}

    
    const url = `https://us4.api.mailchimp.com/3.0/lists/73de2bc8f6`;
    
    
    
   const request= https.request(url,options,function(response){

     console.log(response.statusCode);
      
     response.on('data',function(data){
        
        //console.log(data);
        

     });

     response.statusCode === 200? res.sendFile(__dirname+'/success.html'): res.sendFile(__dirname+'/failure.html');
     
    
    })


    request.write(jsonData);
    request.end();
  
  
   
    
   
   



});

app.post('/failure',function(req,res){

  res.redirect('/');

});






app.listen(process.env.PORT || 3000,function(){

  console.log(`server up and running on port 3000`);

});

//apikey = 80a1d1ba60f321997340ddfe19470cfc-us4
//list id-73de2bc8f6
