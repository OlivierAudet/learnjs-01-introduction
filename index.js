var fs = require('fs');

var book = fs.readFileSync('book.md');
book = book.toString().replace(/```/g, '\n~~~~~~~~\n');
fs.writeFileSync('leanpub/manuscript/chapters.txt', book);