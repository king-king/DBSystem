/**
 * Created by WQ on 2015/5/22.
 */

var io = require( 'socket.io' )();
io.on( 'connection', function ( socket ) {
    socket.emit( 'an event', {some : 'data'} );
    socket.on( 'event', function ( data ) {
        console.log( data )
    } );
} );
io.listen( 5000 );