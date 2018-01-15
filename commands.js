module.exports = {
    pwd: function(item) {
        console.log('Current working directory is ' + process.cwd());
        process.stdout.write("prompt > ");    
    },
    ls: function (item) {
        var fs = require('fs')
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    },
    date: function (item) {
        console.log('Current date is '+ Date());
        process.stdout.write("prompt > ");
    },
    echo: function(item){
        console.log(item);
        process.stdout.write("prompt > ");
    },
    cat: function(item){
        var fs = require('fs');

        fs.readFile(item, function(err, files) {
            if (err) throw err;
            process.stdout.write(files.toString());
          });

          process.stdout.write("prompt > ");
    },
    head: function(item){
        var fs = require('fs');
        var file = fs.readFileSync(item, 'utf8');
        var lines = file.split('\n');

        for(var i = 0; i < 5; i++){
            console.log(lines[i]);
        }
    },
    tail: function(item){
        var fs = require('fs');
        var file = fs.readFileSync(item, 'utf8');
        var lines = file.split('\n');
        
        for(var i = lines.length - 5; i < lines.length; i++){
            console.log(lines[i]);
        }

    }
}

process.stdout.write('\nprompt > ');
