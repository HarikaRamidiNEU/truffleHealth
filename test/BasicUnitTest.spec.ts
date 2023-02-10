import chai from "chai"
import chaiHTTP from "chai-http";
import app from "../src/app"
import bills from "./seedData.js"
import supertest from "supertest";

chai.use(chaiHTTP);
chai.config.includeStack = true;

const request = supertest(app);
const assert = chai.assert;
const expect = chai.expect;

describe('All Tests', () => {

    it('should return status 400 on POST items', (done) => {
        request
            .post('/api/v1/items')
            .send({})
            .expect(400)
            .expect((res)=> {
                expect(res.body).eq("PatientName and amount cannot be empty")
            })
            .end(done);
    });

    it('should return status 400 on POST items', (done) => {
       request
            .post('/api/v1/items')
            .send({
                "patientName": "patient1",
                "address": "patient2 address",
                "hospitalName": "HospitalB",
                "dateOfService": "2023 09 02",
                "amount": 1000
            })
            .expect(400)
            .expect((res)=> {
                expect(res.body).eq("Please enter valid date format")
            })
            .end(done);
    });

    it('should return status 400 on POST items', (done) => {
       request
            .post('/api/v1/items')
            .send({
                "patientName": "patient1",
                "address": "patient2 address",
                "hospitalName": "HospitalB",
                "dateOfService": "2023/09/02",
            })
            .expect(400)
            .expect((res)=> {
                expect(res.body).eq("PatientName and amount cannot be empty")
            })
            .end(done);
    });

    it('should return status 400 on POST items', (done) => {
       request
            .post('/api/v1/items')
            .send({
                "address": "patient2 address",
                "hospitalName": "HospitalB",
                "dateOfService": "2023/09/02",
            })
            .expect((res)=> {
                expect(res.body).eq("PatientName and amount cannot be empty")
            })
            .expect(400)
            .end(done);
    });

    it('should return status 200 on POST items', (done) => {
       request
            .post('/api/v1/items')
            .send(bills[0])
            .expect(200)
            .end(done);
    });

    it('should return status 200 on POST items', (done) => {
       request
            .post('/api/v1/items')
            .send(bills[1])
            .expect(200)
            .end(done);
    });

    it('should return status 200 on GET items', (done) => {
        request
            .get('/api/v1/items')
            .expect(200)
            .expect((res)=> {
                expect(res.body.length).eq(2)
                expect(res.body[0].patientName).eq(bills[0].patientName);
            })
            .end(() => {
                done()
            })
    });
});