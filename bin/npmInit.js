var obj = {
  table: [],
};

obj.table.push({ id: 1, square: 2 });

var json = JSON.stringify(obj);
var fs = require('fs');
fs.writeFile('./object.json', json, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been created');
});
