import request from 'supertest';

const baseUrl = 'http://localhost:3001/api/countries';

describe('Country Endpoints', () => {
  it('should return all countries', async () => {
    const res = await request(baseUrl).get('/');

    expect(res.statusCode).toEqual(200);

    expect(res.body).toHaveLength(3);
  });

  it('should return only Turkey', async () => {
    const res = await request(baseUrl).get('/1');

    expect(res.statusCode).toEqual(200);

    const expectedResBody = {id: 1, name: 'Turkey'};
    expect(res.body).toEqual(expect.objectContaining(expectedResBody));
  });
});
