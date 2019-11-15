const request = require("supertest");

const server = require("./server.js");

it("should set db environment to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe('server', function() {
    describe('GET /', function() {
        it('should return 200 ok', function() {
            return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should get a list of smurf', function() {
        return request(server)
    .get('/')
    .then(res => {
      expect(res.status).toBe(200);
        });
    })

    it("should return JSON formatted response", function() {
        return request(server)
            .get("/")
            .then(res => {
            expect(res.type).toMatch(/json/i);
            });
        });
      
          it("should return an 'api' property with the value 'up' inside the body", function() {
            return request(server)
              .get("/")
              .then(res => {
                // expect(res.body).toEqual({ api: "up" });
                expect(res.body.api).toBe("up");
              });
          });
    })
    describe('GET /smurfs', function() {
        it('should get a list of smurf', function() {
            return request(server)
        .get('/smurfs')
        .then(res => {
          expect(res.status).toBe(200);
            });
        })
     })

     describe('POST /smurf', function() {
        it('should get a list of smurf', function() {
            return request(server)
        .post('/smurfs')
        .then(res => {
          expect(res.status).toBe(200);
            });
        })
     })

     describe('Delete /smurf:id', function() {
        it('should get a list of smurf', function() {
            return request(server)
        .delete('/smurfs/:id')
        .then(res => {
          expect(res.status).toBe(200);
            });
        })
     })
})
