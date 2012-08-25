var https = require('https');

var octOAuth = function(options){
  if(options){
    for(var option in options)
      this[option] = options[option];
  }

  this.getToken = function(cb){
    if(!this.username)
      return cb(new Error("No username provided"));

    if(!this.password)
      return cb(new Error("No password provided"));

    getOauthToken(this.username, this.password, this.scopes, function(err, response){
      if(err)
        return cb(err);

      if(response.note !== "octoauth")
        return cb(new Error("Received a bad request, try again"));

      cb(null, response.token);
    });
  };
};

function getOauthToken(username, password, scopes, cb){
  var response = '';

  var data = {
    scopes: scopes,
    note: "octoauth"
  };

  data = JSON.stringify(data);
  
  var options = {
    auth: username + ':' + password,
    host: 'api.github.com',
    path: '/authorizations',
    method: 'POST',
    headers: {
      'Content-Length': data.length,
      'Content-Type': 'application/json'
    }
  };

  var req = https.request(options,function(res){
    res.setEncoding('utf8');

    res.on('data', function(d){
      response += d; 
    });

    res.on('end', function(){
      return cb(null, JSON.parse(response))
    });

    res.on('error', function(err){
      return cb(err);
    });
  });

  req.write(data);
  req.end();
}

module.exports = octOAuth;
