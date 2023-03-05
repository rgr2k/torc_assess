const request = require('supertest');
const expect = require('chai').expect;

const baseurl = 'http://api.football-data.org/v4';
const apiKey = '1258228788d34b839c94234a7c92d9d6';

describe('Get Areas', () => {
	it('should successfully get the areas', (done) => {
		request(baseurl)
			.get('/areas')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('X-Auth-Token', apiKey)
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.areas[0].id).to.be.equal(2000);
				expect(res.body.areas[0].name).to.be.equal('Afghanistan');
				done();
			});
	});
	it('should return 404', (done) => {
		request(baseurl)
			.get('/areass')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('X-Auth-Token', apiKey)
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(404);
				expect(res.body.error).to.be.equal(404);
				done();
			});
	});
	it('check count', (done) => {
		request(baseurl)
			.get('/areas')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('X-Auth-Token', apiKey)
			.end(function (err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.count).to.be.greaterThan(270);
				done();
			});
	});
});