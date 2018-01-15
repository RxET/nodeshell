module.exports = {
    pwd: function() {
        console.log('Current working directory is ' + process.cwd());    
    },
    ls: function () {
        var fs = require('fs')
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    },
    date: function () {
        console.log('Current date is '+ Date());
    }
}

process.stdout.write('\nprompt > ');