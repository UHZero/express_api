const DrinkModel = require("../../models/DrinkModel");
const request = require("supertest");
const server = require("../../server");

describe("[controllers] Testes do DrinkController", ()=>{
    const testDrink = {
        name: "Teste",
        price: 12.34,
        available: true,
    }
    const drink = new DrinkModel(testDrink);

    beforeEach(async ()=>{
        await drink.save();
    })

    afterEach(async ()=>{
        await drink.delete();
    })
    it("Deve obter um drink", async ()=>{
        const response = await request(server).get("/drinks").expect(200)
        expect(response._body[0].name).toBe(testDrink.name)
    })
})