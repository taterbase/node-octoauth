var config = require('../config')
  , octOAuth = require('../lib')
  ;

describe('octOAuth', function(){

  describe('setup', function(){

    it('should accept a hash with parameters for scope, username and password', function(done){
      var scopes = [ 'gist' ];
      var params = {
        username: config.username,
        password: config.password,
        scopes: scopes
      };

      var oa = new octOAuth(params);

      oa.username.should.equal(config.username);
      oa.password.should.equal(config.password);
      oa.scopes.should.equal(scopes);
      done();
    });

    it('should allow setting the scope, username and password after instantiation', function(done){
      var oa = new octOAuth();
      var scopes = [ 'gist' ];

      oa.username = config.username;
      oa.password = config.password;
      oa.scopes = scopes;

      oa.username.should.equal(config.username);
      oa.password.should.equal(config.password);
      oa.scopes.should.equal(scopes);
      done();
    })

  });

  describe('authorization', function(){
  
    var oa = new octOAuth(config);
    oa.scopes = [ 'gist' ];

    it('should return an oauth token', function(done){
      oa.getToken(done);
    });

    it('should work if not scopes are provided', function(done){
      var no_oa = new octOAuth(config);

      no_oa.getToken(done);
    });
  })
});
