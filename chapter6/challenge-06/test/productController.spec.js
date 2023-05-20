const request = require('supertest');
const app = require('../app.js');

describe('product function', () => {
  let product  
  test('should return success message and product data', async () => {
      const response = await request(app).get('/api/product');
      product = response.body.data[0]
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('success');
      expect(response.body.data[0]).toHaveProperty('product_id');
      expect(response.body.data[0]).toHaveProperty('product_name');
      expect(response.body.data[0]).toHaveProperty('quantity');
      expect(response.body.data[0]).toHaveProperty('component');
      expect(Array.isArray(response.body.data[0].component)).toBe(true);
      // Lakukan pengecekan lainnya sesuai kebutuhan
    });

    test('get one product', async () => {
      const response = await request(app).get(`/api/product/${product.product_id}`);
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('success');
      expect(response.body.data).toHaveProperty('product_id');
      expect(response.body.data).toHaveProperty('product_name');
      expect(response.body.data).toHaveProperty('quantity');
      expect(response.body.data).toHaveProperty('component');
      expect(Array.isArray(response.body.data.component)).toBe(true);
      // Lakukan pengecekan lainnya sesuai kebutuhan
    });

    test('create one product', async () => {
      const response = await request(app).post(`/api/product`).send({
        "product_name": "PC",
        "quantity": 5,
        "component_id": "4169d255-c2e1-4167-8c80-e9d79ba95480"
    });
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('success');
      expect(response.body.data).toHaveProperty('product_id');
      expect(response.body.data).toHaveProperty('product_name');
      expect(response.body.data).toHaveProperty('quantity');
      expect(response.body.data).toHaveProperty('component');
      expect(Array.isArray(response.body.data.component)).toBe(true);
      // Lakukan pengecekan lainnya sesuai kebutuhan
    });

    test('negative create one product', async () => {
      const response = await request(app).post(`/api/product`).send({});
      expect(response.status).toBe(404);
      expect(response.body.message).toBe(`please enter product's name and quantity`);
      expect(response.body.data).toBeNull()
      // Lakukan pengecekan lainnya sesuai kebutuhan
    });

    test('update product by id', async () => {
      const response = await request(app).put(`/api/product/${product.product_id}`).send({
        "product_name": "PC gemink",
        "quantity": 5,
    });
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('success');
      expect(response.body).toHaveProperty('data');
      // Lakukan pengecekan lainnya sesuai kebutuhan
    });

    
    test('delete product by id', async () => {
      const response = await request(app).delete(`/api/product/${product.product_id}`)
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('success');
      expect(response.body.data).toBeNull()
      // Lakukan pengecekan lainnya sesuai kebutuhan
    });
  });

  