const request = require("supertest");

const app = require("../src/app");

// Move to Own file

describe("US-01 List NY Bills", () => {
    describe("App", () => {
        describe("not found handler", () => {
            test("returns 404 for non-existent route", async () => {
                const response = await request(app)
                    .get("/recipes")
                    .set("Accept", "application/json");

                expect(response.status).toBe(404);
                expect(response.body.error).toBe("Path not found: /recipes");
            });
        });
    });

    // Pulls bills from this year X
    // Pulls bills that aren't signed

    describe("GET /bills", () => {
        test("returns only bills from this year", async () => {
            const response = await request(app)
                .get("/bills")
                .set("Accept", "application/json");
            
            const year = new Date().getFullYear();

            const { status, body: { data } } = response;

            data.forEach(element => {
                expect(element).toHaveProperty('year', year);
            });
            expect(status).toBe(200);
        });
    })
}) 
