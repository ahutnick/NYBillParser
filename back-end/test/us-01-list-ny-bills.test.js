const supertest =  require("supertest");
const {list} = require("../src/bills/bills.services");
const app = require("../src/app");
const axios = require("axios");

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
        afterEach(() => {
            jest.clearAllMocks()
        })

        test("calls with proper url, including only bills from this year", async () => {
            jest.spyOn(axios, "get");

            const year = new Date().getFullYear();
            const bills = { result: { items: [{result: { year: year, adopted: false }}  ] } }

            axios.get.mockImplementation(() => Promise.resolve(bills));

            const data = await list();

            expect(axios.get).toHaveBeenCalledWith(`https://legislation.nysenate.gov/api/3/bills/${year}/search?term=adopted:false&view=info&key=${process.env.API_KEY}`, expect.any(Object));
        });

        // Only Pulls Bills that haven't been adopted

        test("status returns 200", async () => {
            const { status } = await supertest(app)
                .get("/bills")
                .set("Accept", "application/json");
            expect(status).toBe(200);
        });
    })
}) 
