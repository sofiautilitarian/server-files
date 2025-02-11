// (* $ cd Desktop/WeatherProject 

// user@Sofia-Hypothetical MINGW32 ~/Desktop/WeatherProject
// $ nodemon app.js
// [nodemon] 3.1.7
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching path(s): *.*
// [nodemon] watching extensions: js,mjs,cjs,json
// [nodemon] starting `node app.js`
// The server is running on port 3000 *)
//code runs
const express = require('express');
const https = require('https');
const app = express();
app.get('/', function(req, res){
    const url = 'https://www.weatherapi.com/weather/q/dhaka-174248';
    https.get(url, function(response){
        
        console.log(response);
    })
    res.send('Server is up and running');
})
app.listen(2999, function(){
    console.log('The server is running on port 3000');
})
