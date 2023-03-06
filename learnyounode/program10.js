var net = require('net');
var server = net.createServer(function(socket){
    var date = new Date();
    var fullYear = date.getFullYear();
    var month = date.getMonth() + 1;
    var formattedMonth = month < 10 ? '0' + month : month;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    socket.end([fullYear, formattedMonth, day].join('-') + ' ' + [hours, minutes].join(':') + '\n');
});
server.listen(process.argv[2]);