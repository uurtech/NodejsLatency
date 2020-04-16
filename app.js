const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer(function (req, res) {
    const queryObject = url.parse(req.url,true).query;
    if(typeof queryobject.time !== 'undefined'){
        let time = parseInt(queryobject.time) * 1000
        setTimeout(function(){
            res.end("hello")
        },time);
    }else{
        res.end('Feel free to add query parameters to the end of the url');

    }
  }).listen(8080);