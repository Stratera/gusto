var fork = require('child_process').fork;

var debug = false;

process.argv.forEach(function(arg) {
    if (arg === '--debug') {
        debug = true;
    }
});

function start() {
    console.log('starting new worker');

    var worker = fork('./src/api');

    worker.on('error', function (err) {
        console.log('worker failed with code ' + err.code + ' and signal ' + err.signal);
        worker.kill();
        start();
    });

    worker.on('exit', function(exit) {
        console.log('worker exited with code ' + exit.code + ' and signal ' + exit.signal);
        start();
    });

    worker.send({ id: worker.pid, message: 'ping'});

    process.on('exit', function() {
        console.log('process exiting');
        worker.removeAllListeners();
        worker.kill();
    });
}

/**
 * DEVELOPERS NOTE:
 * Developers should debug their app by running the command 'npm run debug'
 * this will provide the '--debug' parameter reqiuired to run this in repl.
 * This is also needed for break points to be hit in the worker while debugging
 **/
if (debug) {
    require('./src/api');
} else {
    start();
}

