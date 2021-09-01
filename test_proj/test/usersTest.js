let chai = require("chai");
let chachaiHttpi = require("chai-http");

//Assertion Style
chai.should();

chai.use(chaihttp);

describe('Tasks API', () => {

/**
 * Test GET request to return 50 users
 * https://sandbox.union54.technology/users?limit=50
 */
descibe("GET /api/users", () =>{
    it("It should get all the users", (done) => {
        const token = 'TokenValue'
        chai.request("https://sandbox.union54.technology")
        .get("/users?limit=50")
        .set("Authorization", "Bearer " + token)
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eq(50);
            done();
        });
    });

});

/**
 * Test GET request Joe Bloggs user
 * Bearer token must be retieved dynamically and not hardcoded in this example
 * https://sandbox.union54.technology/user?user?user=uuidValue
 */
 descibe("GET /api/user", () =>{
    it("It should get Joe Blogss user", (done) => {
        const uuidUser = 'BFE34ENR34DF'
        const token = 'TokenValue'
        chai.request("https://sandbox.union54.technology")
        .get("/user?user=" + uuidUser)
        .set("Authorization", "Bearer " + token)
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('uid');
            response.body.should.have.property('firstName');
            response.body.should.have.property('firstName').eq('Joe');
            response.body.should.have.property('lastName');
            response.body.should.have.property('lastName').eq('Bloggs');
            response.body.should.have.property('kycCountry');
            response.body.should.have.property('address');
            response.body.should.have.property('city');
            response.body.should.have.property('postalCode');
            response.body.should.have.property('physicalCardCount');
            response.body.should.have.property('virtualCardCount');
            done();
        });
    });

 }); 


/**
 * Test POST request to reister a new user
 * https://sandbox.union54.technology/user/register
 */
 descibe("POST /api/user/register", () =>{
    it("It should register a new user", (done) => {
        const token = 'TokenValue'

        const body = {
            "firstName": "Fred",
            "lastName": "Jones",
            "kycCountry": "USA",
            "uid": "sdrw3432",
            "address": "1 country road",
            "city": "New York",
            "postalCode": "110011"
        }

        chai.request("https://sandbox.union54.technology")
        .post("/user/register")
        .set("Authorization", "Bearer " + token)
        .send(task)
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('uid');
            response.body.should.have.property('uid').eq('sdrw3432');
            response.body.should.have.property('selfieUploadUrl');
            response.body.should.have.property('idUploadUrl');
            response.body.should.have.property('u54UserId');
            done();
        });
    });

 });


});