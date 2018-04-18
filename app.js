var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection',function(socket){
   console.log("///////////////////////       user connected /////////////////////////////////////////////");
   socket.on('trigger', function(data)
   {
      console.log("///////////////////////       inside trigger /////////////////////////////////////////////");
      console.log("data: " + data);
      socket.emit("location_resp", data);
   });

  socket.on('disconnect',function(){
    console.log("user disconnected");
  })
});

http.listen(80, function() {
   console.log('listening on localhost:3000');
});