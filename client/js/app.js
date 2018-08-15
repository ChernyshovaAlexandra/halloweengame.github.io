const view = require( 'raw!jade-html?pretty=true!../views/index.jade' );
document.body.innerHTML = view;

if( __DEV__ )
  console.log( 'dev mode' );

setTimeout(function () {
    document.getElementsByClassName('audio')[0].play();
});

require('./gameplay/initGame.js');
require('./gameplay/createUnit.js');
require('./gameplay/setLevel.js');
require('./gameplay/magicBook.js');
