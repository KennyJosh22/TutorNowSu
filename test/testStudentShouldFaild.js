var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Get Fail', function(){
    var requestResult;
    var response;

    before (function(done){
        chai.request("https://tutornowsu.azurewebsites.net")
            .get("/api/student/4")
            .end(function(err,res){
                requestResult = res.body;
                // console.log(requestResult)
                response = res;
                expect(err).to.be.null;
                expect(res).to.be.status(200);
                
                done();
            });
    });

    it('Should return status 200', function (){
		expect(response).to.have.status(200);
    });

    it ('The body should be empty', function(){
        expect(requestResult).to.eql({});
    });

  
});