var http = require( "http" );

http.createServer( function ( req, res ) {
    var data = "";
    req.on( "data", function ( d ) {
        data += d;
    } );
    req.on( "end", function () {
        console.log( data );
        var div = document.createElement( "div" );
        div.innerHTML = JSON.parse( data ).message;
        document.body.appendChild( div );
        res.writeHead( 200, {
            'Content-Type' : 'application/json; charset=utf-8',
            "Access-Control-Allow-Origin" : "*"
        } );
        res.end();
    } );

} ).listen( 8686 );