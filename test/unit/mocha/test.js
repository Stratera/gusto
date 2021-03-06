var assert = require('assert');
var should = require('should');
var request = require('supertest');
var app = require('../../../src/api.js').getApp;

describe('Routes', function(){
  it('GET / responds with a 200', function(done){
    request(app)
      .get('/')
      .expect(200)
      .expect('whatever you do, do it with gusto.', done);
  });
  it('GET /stub responds with a 302', function(done){
    request(app)
      .get('/stub')
      .expect(302, done);
  });
  it('GET /version responds with a 302', function(done){
    request(app)
      .get('/version')
      .expect(200, done);
  });
  it('GET /v1/proxy/drug/event.json responds with a 302', function(done){
    request(app)
      .get('/v1/proxy/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&count=patient.reaction.reactionmeddrapt.exact')
      .expect(200, done);
  });
})