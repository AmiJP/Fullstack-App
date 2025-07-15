import supertest from 'supertest';
import app from './index.js'; // Adjust the import based on your file structure

test('GET /hello', async () => {
  const res = await request(app)
    .get('/hello');
  expect(res.text).toBe('Hello, world!');
});
