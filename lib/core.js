const request = require('request');

class Api {
  constructor(options) {
    this.key = options.key;
  }
  validate_email(email, callback) {
    let path = `https://api.zerobounce.net/v1/validate?apikey=${this.key}&email=${encodeURIComponent(email)}`;

    getRequest(path, function(err, res){
      if(!err) {
        callback(null, res);
      } else {
        callback(err);
      }
    });
  }
}

function getRequest(input, callback) {
  request.get(input, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, JSON.parse(body)); 
    } else {
      callback(err); 
    }
  });
}
 
function create (options) {
  return new Api(options)
}

module.exports = create;

/*
api returns in format 
 {
  "address":"flowerjill@aol.com",
  "status":"Valid",
  "sub_status":"",         
  "account":"flowerjill",
  "domain":"aol.com",
  "disposable":false,
  "toxic":false,
  "firstname":"Jill",
  "lastname":"Stein",
  "gender":"female",
  "location":null,
  "creationdate":null,
  "processedat":"2017-04-01 02:48:02.592"
 }
*/