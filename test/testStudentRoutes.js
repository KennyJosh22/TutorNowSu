var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Get Succesfully', function(){
    var requestResult;
    var response;

    before (function(done){
        chai.request("https://tutornowsu.azurewebsites.net")
            .get("/api/student/106132083938140080000")
            .end(function(err,res){
                requestResult = res.body;
                response = res;
                expect(err).to.be.null;
                expect(res).to.be.status(200);
                done();
            });
    });

    it('Should return 1 student object', function (){
		expect(response).to.have.status(200);
		expect(response).to.have.headers;
    });

    it ('The elements in the object have the expected properties', function(){
        expect(response.body).to.satisfy(
            function (body){
                for (var i = 0;i < body.length; i++){
                    expect(body[i]).to.have.property('firstName');
					expect(body[i]).to.have.property('lastName');
					expect(body[i]).to.have.property('email');
                    expect(body[i]).to.have.property('major');
                    expect(body[i]).to.have.property('suId').that.is.a('number');  
                }
                return true;
            }
        );
    });

    it ('The elements in the object have the expected values', function(){
        expect(response.body).to.satisfy(
            function (body){
                for (var i = 0;i < body.length; i++){
                    expect(body[i]).to.equal('John');
					expect(body[i]).to.equal('Howey');
					expect(body[i]).to.equal('duc.mh.vu@gmail.com');
                    expect(body[i]).to.equal('Computer Science');
                    expect(body[i]).to.equal('106132083938140080000');
                }
                return true;
            }
        );
    });
});


