var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test /api/student/addNewStudent', function(){
    var requestResult;
    var response;

    before (function(done){
        chai.request("https://tutornowsu.azurewebsites.net/")
            .post("/api/student/addNewStudent")
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(
                {
                    firstName: 'John',
                    lastName: 'Smith',
                    email: 'smithJohn@email.com',
                    major: 'Computer Science',
                    suId: '20'
                }
            )

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
                expect(body).to.have.property('firstName');
                expect(body).to.have.property('lastName');
                expect(body).to.have.property('email');
                expect(body).to.have.property('major');
                expect(body).to.have.property('suId').that.is.a('number');  
                return true;
            }
        );
    });

    it ('The elements in the object have the expected values', function(){
        expect(response.body).to.satisfy(
            function (body){
                expect(body.firstName).to.equal('John');
                expect(body.lastName).to.equal('Smith');
                expect(body.email).to.equal('smithJohn@email.com');
                expect(body.major).to.equal('Computer Science');
                expect(body.suId).to.equal(20);
                return true;
            }
        );
    });
});