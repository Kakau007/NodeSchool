var http = require('http');
var urlData = [];
var urls = process.argv.splice(2);
var count = urls.length;

for(var i = 0; i < urls.length; i++) {
    httpGet(urls[i], i);
}

function httpGet(url, index) {
    http.get(url, function(response){        
        var stringData = '';
        response.setEncoding('utf8');

        response.on('error', function(error){
            console.log(error);
        });
        
        response.on('data', function(data) {
            stringData += data;
        });

        response.on('end', function(){
            urlData[index] = stringData;
            count--;

            if(count === 0) {
               printUrls();
            }
        });
    });
}

function printUrls() {
    urlData.forEach(function(item) {
        console.log(item);
    });
}