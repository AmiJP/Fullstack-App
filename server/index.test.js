import app from './index.js';
import request from 'supertest';

test('GET /hello', async () => {
  const response = await request(app).get('/hello');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello, world!');
});
