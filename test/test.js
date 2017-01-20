var expect = require('chai').expect;
var http = require('http');
var server = require('../bin/www');

describe('server', function () {
  before(function () {
    server.listen(3000);
  });

  after(function () {
    server.close();
  });
});

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000', function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should say "Let Me In!"', function (done) {
    http.get('http://localhost:3000', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        expect(data).to.include('Let Me In!');
        done();
      });
    });

  });
});
