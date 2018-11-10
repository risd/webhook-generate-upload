// rm-wh push-static \
//   webhook-assets.risd.systems \
//   --staticFolder=upload \
//   --staticPrefix=generator/{version}

var options = parseArgs( process.argv.slice( 2 ) )
var version = getGeneratorVersion()
var pusher = require( 'rm-webhook' ).pushStatic;

var pushOptions = Object.assign( {
  baseDomain: 'webhook-assets.risd.systems',
  staticFolder: 'upload',
  staticPrefix: `generator/${ version }`,
}, options )

pusher( pushOptions, function ( error ) {
  if ( error ) console.log( error )
} )


function parseArgs ( args ) {
  var options = {}
  if ( args.indexOf( '--debug' ) ) options.debug = true;
  return options;
}

function getGeneratorVersion () {
  return require( './generator/package.json' ).version
}
