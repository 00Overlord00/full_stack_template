var express = require( 'express' );
var app = express();
var path = require( 'path' );
var pg = require( 'pg' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var connectionString = 'postgres://localhost:5432/db_name';  //Database Name to be entered here.

app.listen( 8081, 'localhost', function( req, res ) {  //Determines server listening PORT.
  console.log( 'Hailing frequencies open, Captain. Listening on PORT 8081.' );
});

app.use( express.static( 'public' ) );  //Sets 'public' folder to static.

app.get( '/', function( req, res ) {  //BASE url.
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});

// app.post( '/postRoute', urlencodedParser, function( req, res ) {  //POST route.
//   pg.connect( connectionString, function( err, client, done ) {
//     client.query( '' );  //SQL syntax to be entered here.
//   });
// });
//
// app.get( '/getRoute', function( req, res ) {  //GET route.
//   pg.connect( connectionString, function( err, client, done ) {
//     client.query( '' );  //SQL syntax to be entered here, as well.
//   });
// });
