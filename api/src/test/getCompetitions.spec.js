const request = require('supertest');
const expect = require('chai').expect;

const baseurl = 'http://api.football-data.org/v4';
const apiKey = '1258228788d34b839c94234a7c92d9d66';

describe('Get Competitions - 301', () => {
	it('should get 301 - Forbidden', (done) => {
		request(baseurl)
			.get('competitions/CL/matches')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('X-Auth-Token', apiKey)
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(301);
				done();
			});
	});
	
});