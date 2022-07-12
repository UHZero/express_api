const { getMongoUri } = require("../../../config/utils/getMongoUri")

describe("[configs/utils] - Testes do getMongoUri", ()=>{
    it("Deve retornar a variavel de ambiente padrao", ()=>{
        const mongoUri = getMongoUri();

        expect(mongoUri).toBe("mongodb+srv://USERNAME:PASSWORD@cluster123.abc12.mongodb.net/app_test")
    })
})