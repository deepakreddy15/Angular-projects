var http=require('http');
var fs=require('fs');
var readable=fs.createReadStream(__dirname + '/stuff/new.txt','utf8');
var writable=fs.createWriteStream(__dirname + '/t.txt');
readable.on('data',function (chunk) {
    writable.write(chunk);
})
http.createServer(function (req,res) {
    console.log(req.url);
    if(req.url==='/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var readable = fs.createReadStream(__dirname + '/first.json', 'utf8');
        readable.pipe(res);
    }
    else if(req.url==='/first-html'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var readable = fs.createReadStream(__dirname + '/first.html', 'utf8');
        readable.pipe(res);
    }


    else {
        res.writeHead(200, {'Content-Type': 'text/plain '});
        res.end("error");
    }
}).listen(3000);
