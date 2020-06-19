const supertest = require("supertest");
const server = require("./server.js");
// const auth = require("../auth/auth-router.js");
const db = require("../database/dbConfig.js");
const jokes = require("../jokes/jokes-router.js");

describe("server.js", () => {
  it("should user the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("return 200 status", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should be truthy", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBeTruthy();
  });
});

describe("POST /api/auth/register", () => {
  it("should return status code 404", async () => {
    const res = await supertest(server)
      .post("/register")
      .send({ username: "Gabe", password: "Gabe" });
    expect(res.status).toBe(404);
  });

  it("shouldn't have Gabe", async () => {
    const res = await supertest(server)
      .post("/register")
      .send({ username: "Gabe", password: "Gabe" });
    expect(res.body.username).toBe(undefined);
  });
});

describe("POST /api/auth/login", () => {
  it("should return status code 404", async () => {
    const res = await supertest(server)
      .post("/login")
      .send({ username: "Gabe", password: "Gabe" });
    expect(res.status).toBe(404);
  });

  it("shouldn't have Gabe", async () => {
    const res = await supertest(server)
      .post("/login")
      .send({ username: "Gabe", password: "Gabe" });
    expect(res.body.username).toBe(undefined);
  });
});
