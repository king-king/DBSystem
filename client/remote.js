/**
 * Created by WQ on 2015/5/25.
 */

window.remote = {
    log : function ( message ) {
        var xhr = new XMLHttpRequest();
        xhr.open( "post", "http://localhost:8686", true );
        xhr.send( JSON.stringify( {
            message : message
        } ) );
    }
};