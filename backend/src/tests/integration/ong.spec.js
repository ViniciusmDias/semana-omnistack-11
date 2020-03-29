const request = require("supertest");
const app = require("../../app");
const connection = require("../../database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "AFID",
        email: "contato@apae.com.br",
        whatsapp: "9999999911",
        city: "São José",
        uf: "SC"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
