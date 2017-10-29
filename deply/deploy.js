global.Promise = require('bluebird');
require('isomorphic-fetch');

const fs = require( 'fs' );
const Qiita = require( 'qiita-js' );

if ( "false" !== process.env.TRAVIS_PULL_REQUEST ) {
  console.log( 'Thanks for contribution. :)' );
  process.exit();
}

// set your token
Qiita.setToken( process.env.QIITA_TOKEN );
Qiita.setEndpoint( 'https://qiita.com' );

fs.readFile( 'post_f7f8d692395949d76b5d.md', 'utf8', ( err, readme ) => {
  Qiita.Resources.Item.update_item( process.env.QIITA_POST_ID, {
    title: process.env.QIITA_POST_TITLE,
    body: readme,
    private: false,
  } ).then( function( res ) {
    console.log( res );
  } )
} );