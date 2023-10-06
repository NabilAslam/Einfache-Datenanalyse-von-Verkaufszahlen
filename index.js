// Setting up csv for use
const csv = require('csv-parser');
const fs = require('fs');
const result = []


// Reading the csv file and filer by sales
fs.createReadStream('verkaufszahlen.csv')
    .pipe(csv())
    .on('data', (data) => result.push(parseInt(data.Verkäufe)))
    .on('end', () => {
       
        x = Math.max(...result)
        y = Math.min(...result)
        console.log(x, y);
    });



