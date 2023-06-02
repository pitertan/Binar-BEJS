const request = require('supertest');
const app = require('../app.js');

describe('supplier function', () => {
    let supplier
    test('should return success message and supplier data', async () => {
        const response = await request(app).get('/api/supplier');
        supplier = response.body.data[0]
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data[0]).toHaveProperty('supplier_id');
        expect(response.body.data[0]).toHaveProperty('supplier_name');
        expect(response.body.data[0]).toHaveProperty('address');
        // Lakukan pengecekan lainnya sesuai kebutuhan
    });

    test('get one supplier', async () => {
        const response = await request(app).get(`/api/supplier/${supplier.supplier_id}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data).toHaveProperty('supplier_id');
        expect(response.body.data).toHaveProperty('supplier_name');
        expect(response.body.data).toHaveProperty('address');
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });

      test('create one supplier', async () => {
        const response = await request(app).post(`/api/supplier`).send({
            name: "rico",
            address: "jelambar"
        });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data).toHaveProperty('supplier_id');
        expect(response.body.data).toHaveProperty('supplier_name');
        expect(response.body.data).toHaveProperty('address');
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });

      test('negative create one supplier', async () => {
        const response = await request(app).post(`/api/supplier`).send({});
        expect(response.status).toBe(404);
        expect(response.body.message).toBe(`please enter name and address`);
        expect(response.body.data).toBeNull()
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });

      test('update supplier by id', async () => {
        const response = await request(app).put(`/api/supplier/${supplier.supplier_id}`).send({
            supplier_name: "rico",
            address: "pamulang"
        });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('success');
        expect(response.body).toHaveProperty('data');
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });
  
      test('delete supplier by id', async () => {
        const response = await request(app).delete(`/api/supplier/${supplier.supplier_id}`)
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data).toBeNull()
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });
});