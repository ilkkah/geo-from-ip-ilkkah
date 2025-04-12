// get node packages
const debug = require('debug')('geo-from-ip:main')
const path = require('path')
const mmdbreader = require('maxmind-db-reader')
const DBNAME_EMPTY = path.resolve(path.join(__dirname, '/../mmdb/GeoLite2-City.mmdb'));
const mmdb = mmdbreader.openSync(DBNAME_EMPTY);

const geodata = mmdb.getGeoDataSync('91.158.238.100');

console.log(geodata);