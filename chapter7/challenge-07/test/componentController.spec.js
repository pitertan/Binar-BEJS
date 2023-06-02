const request = require('supertest');
const app = require('../app.js');

describe('component function', () => {
    let component
    test('should return success message and component data', async () => {
        const response = await request(app).get('/api/component');
        component = response.body.data[0]
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data[0]).toHaveProperty('component_id');
        expect(response.body.data[0]).toHaveProperty('component_name');
        expect(response.body.data[0]).toHaveProperty('description');
        // Lakukan pengecekan lainnya sesuai kebutuhan
    });

    test('get one component', async () => {
        const response = await request(app).get(`/api/component/${component.component_id}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data).toHaveProperty('component_id');
        expect(response.body.data).toHaveProperty('component_name');
        expect(response.body.data).toHaveProperty('description');
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });

      test('create one component', async () => {
        const response = await request(app).post(`/api/component`).send({
            "component_name": "keyboard mechanical",
            "description": "logitech"
        });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data).toHaveProperty('component_id');
        expect(response.body.data).toHaveProperty('component_name');
        expect(response.body.data).toHaveProperty('description');
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });

      test('negative create one component', async () => {
        const response = await request(app).post(`/api/component`).send({});
        expect(response.status).toBe(404);
        expect(response.body.message).toBe(`please enter component's name and description`);
        expect(response.body.data).toBeNull()
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });

      test('update component by id', async () => {
        const response = await request(app).put(`/api/component/${component.component_id}`).send({
            "component_name": "keyboard",
            "description": "razer"
        });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('success');
        expect(response.body).toHaveProperty('data');
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });
  
      test('delete component by id', async () => {
        const response = await request(app).delete(`/api/component/${component.component_id}`)
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('success');
        expect(response.body.data).toBeNull()
        // Lakukan pengecekan lainnya sesuai kebutuhan
      });
});