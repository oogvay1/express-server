const express = require( "express" )

const app = express()

app.get( "/health", ( req, res ) => res.send( { message: "OKAY!" } ) )

app.listen( 3000, () => console.info( "Server running at :3000" ) )
