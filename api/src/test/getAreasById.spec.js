const request = require('supertest');
const expect = require('chai').expect;


const baseurl = 'http://api.football-data.org/v4';
const apiKey = '1258228788d34b839c94234a7c92d9d6';

describe('Get Area by ID', () => {
	it('should successfully get the area by ID', (done) => {
		request(baseurl)
			.get('/areas/2099')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('X-Auth-Token', apiKey)
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.id).to.be.equal(2099);
				expect(res.body.name).to.be.equal('Guernsey');
				done();
			});
	});
	
});