import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import app from '..';

chai.use(chaiHttp);

describe('Basic app configurations', () => {
  before(async () => {
    await mongoose.connection;
  });
  it("should respond with a 404 error if a user tries to access a route that doesn't exist", async () => {
    const res = await chai.request(app).get('/api/v1/northeast');
    expect(res).to.have.status(404);
    expect(res.body.message).to.eql('Not found');
  });
});
