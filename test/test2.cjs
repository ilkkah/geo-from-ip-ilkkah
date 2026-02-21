// get node packages
const debug = require('debug')('geo-from-ip:main')
const path = require('path')
var MMDBReader = require('mmdb-reader');
const DBNAME_EMPTY = path.resolve(path.join(__dirname, '/../mmdb/GeoLite2-City-Test.mmdb'));
var mmdb = new MMDBReader(DBNAME_EMPTY);

const geodata = mmdb.lookup('91.158.238.100');

console.log(geodata);