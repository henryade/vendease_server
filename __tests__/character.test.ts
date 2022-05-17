import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';

chai.use(chaiHttp);

describe('Options tests', () => { 
    it('checking default options', () => { 
      chai.request(app)
      .get('/episode')
      .end((err, res) => {
          console.log(res.body)
        expect(res.body.message).equal('success');
      });
    });
});