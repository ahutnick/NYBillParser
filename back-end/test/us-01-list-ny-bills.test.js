import supertest from "supertest";
import app from "../src/app";

// Note - switch to mocks for GET /bills test

// Move to Own file

describe("US-01 List NY Bills", () => {
    describe("App", () => {
        describe("not found handler", () => {
            test("returns 404 for non-existent route", async () => {
                const response = await supertest(app)
                    .get("/recipes")
                    .set("Accept", "application/json");

                expect(response.status).toBe(404);
                expect(response.body.error).toBe("Path not found: /recipes");
            });
        });
    });

    // Pulls bills from this year 

    describe("GET /bills", () => {
        async function getBills() {
            const response = await supertest(app)
                .get("/bills")
                .set("Accept", "application/json");

            return response;
        }

        test("returns only bills from this year", async () => {

            const { status, body: { data } } = await getBills();

            const year = new Date().getFullYear();

            data.forEach(element => {
                expect(element).toHaveProperty('year', year);
            });
            expect(status).toBe(200);
        });

        // Only Pulls Bills that haven't been adopted

        test("returns only bills that are not adopted", async () => {
            const { status, body: { data } } = await getBills();

            data.forEach(element => {
                expect(element).toHaveProperty('adopted', false);
            });
            expect(status).toBe(200);
        });
    })
}) 
