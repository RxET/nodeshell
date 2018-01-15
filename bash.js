var commands = require('./commands');

process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();
    var splitCmd = cmd.split(' ');
    var method = splitCmd[0];

    commands[method](splitCmd.slice(1).join(' '));
    
    //process.stdout.write('You typed: ' + cmd + '\n');
});