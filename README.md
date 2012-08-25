#octOAuth

A simple Node.js library for getting an Oauth token for Github with a username and password

##Installation

Install with npm

```bash
npm install -S octoauth   # -S adds octoauth to your package.json for you
```

##Usage

You can instantiate octOAuth and pass a hash in with values you want

```javascript
var octOAuth = require('octoauth');

var params = {
  username: 'taterbase',
  password: 'password',
  scopes: [ 'gist' ]
};

var oa = new octOAuth(params);
```

Or you can assign them later

```javascript
var oa = new octOAuth();

oa.username = 'taterbase';
oa.password = 'password';
oa.scopes = ['gist', 'repo'];
```

You can even mix and match

``javascript
var params = {
  username: 'taterbase',
  password: 'password'
};

var oa = new octOAuth(params);

oa.scopes = [ 'gist' ];
```

After that just call <code>getToken</code>

```javascript
oa.getToken(function(err, token){
  //Use that token!
});
```

##Testing

To run tests this module needs a config folder structured like so:

```
node-octoauth
|
+--config
    |
    +--index.js
```

Inside config/index.js you should expose an object with working username and password like so:

```javascript
module.exports = {
  username: 'taterbase',
  password: '123Fake'
};
```

Now you can run <code>mocha</code> and test away.

---
MIT license
