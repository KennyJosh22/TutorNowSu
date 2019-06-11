var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test /api/tutors', function(){
    var requestResult;
    var response;

    before (function(done){
        chai.request("http://localhost:3000")
            .get("/api/tutors")
            .end(function(err,res){
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.be.status(200);
                done();
            });
    });

    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
		expect(response.body).to.have.length.above(2);
		expect(response).to.have.headers;
    });

    it ('The elements in the array have the expected properties', function(){
        expect(response.body).to.satisfy(
            function (body){
                for (var i = 0;i < body.length; i++){
                    expect(body[i]).to.have.property('firstName');
					expect(body[i]).to.have.property('lastName');
                    expect(body[i]).to.have.property('email');
                    expect(body[i]).to.have.property('bio');
					expect(body[i]).to.have.property('suId').that.is.a('number');
                    expect(body[i]).to.have.property('available').that.is.a('boolean');
                    expect(body[i]).to.have.property('workingHours').that.is.lessThan(40); 
                    expect(body[i]).to.have.property('isSelected').that.is.a('boolean');
                }
                return true;
            }
        );
    });
});