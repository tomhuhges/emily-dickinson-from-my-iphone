const fetch = require('node-fetch');
const flat = require('flat');
const toArray = require('object-values-to-array');
const fs = require('fs');

fetch('http://poetrydb.org/author/dickinson/lines')
  .then(response => response.json())
  .then((json) => {
    const data = toArray(flat(json)).filter(line => line !== '');
    fs.writeFile('lines.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('file saved\n');
    });
  });
