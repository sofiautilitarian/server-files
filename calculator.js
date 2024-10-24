/*user@Sofia-Hypothetical MINGW32 ~/Downloads/Calculator
$ nodemon calculator.js
[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node calculator.js`
Listening to port 3000*/

//setting up express in my calculator folder's calculator.js
const express = require("express");
const app = express();
//setting my root route to receive request and send a response
app.get("/", function(request, response){
    response.send("<h1>hello, world !!</h1>");
});
//spinning up the server to listen to port number 3000
app.listen(3000, function(){
    console.log("Listening to port 3000");
});
// running with nodemon : nodemon calculator.js
