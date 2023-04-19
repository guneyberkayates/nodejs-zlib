const zlib = require('zlib');
const fs = require('fs');

const countries = require('./countries.json');
const states = require('./states.json');
const cities = require('./cities.json');

// Compress the JSON data
const compressedCountries = zlib.deflateSync(JSON.stringify(countries));
const compressedStates = zlib.deflateSync(JSON.stringify(states));
const compressedCities = zlib.deflateSync(JSON.stringify(cities));

// Write the compressed data to files
fs.writeFileSync('./compressed/countries.json.gz', compressedCountries);
fs.writeFileSync('./compressed/states.json.gz', compressedStates);
fs.writeFileSync('./compressed/cities.json.gz', compressedCities);
