#OctoAuth

A simple Node.js library for getting an Oauth token for Github with a username and password

##Testing

To run tests this module needs a config folder structured like so:

```
node-octoauth
|
|--config
    |
    |--index.js
```

Inside you should expose an object with working username and password like so:

```javascript
module.exports = {
  username: 'taterbase',
  password: '123Fake'
};
```

Now you can run <code>mocha</code> and test away.

---
MIT license
