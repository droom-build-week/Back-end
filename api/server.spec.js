const server = require('./server');
const request = require('supertest');

describe('server api file', () => {
  
  test('should have the right environment variable DB_ENV=testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })

  describe('[GET] home endpoint works', () => {
    test('Should respond with statusCode 200', async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    })

    test("Should return html text 'Welcome to Droom' ", async () => {
      const res = await request(server).get("/");
      expect(res.text).toContain("Welcome to Droom");
    })
    
  })
})
