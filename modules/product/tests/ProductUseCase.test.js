require('dotenv').config();
const ProductUseCase =  require('../useCase/ProductUseCase');
const productUseCase = new ProductUseCase;

describe("Testing Product Use Case", () => {
    it("should be success create new Product when data is valid", async () => {
        const body = {
            "name" : "Lemari",
            "qty": 11,
            "picture": "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
            "expiredAt": "2022-10-10"
        }

        const response = await productUseCase.addProduct(body);
        expect(response.success).toBe(true);
        expect(response.data.isActive).toEqual(true);
    })

    it("should be failed create new Product when data  invalid", async () => {
        const body = {
            name : "Lemari",
            picture : "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
            expiredAt: "2022-10-10"
        };

        const response = await productUseCase.addProduct(body);
        expect(response.success).toBe(false);
    })

    it("should be success get detail Product when data is valid", async () => {
        const params = {
            id : 27
        };

        const response = await productUseCase.getDetailProduct(params);
        console.log('response', response)
        expect(response.success).toBe(true);
    })

    it("should be failed get detail Product when data invalid", async () => {
        const params = {
            id : '3abcd'
        };

        const response = await productUseCase.getDetailProduct(params);
        expect(response.success).toBe(false);
    })

    it("should be success update  Quantity Product when data is valid", async () => {
        const body = {
            name : "Lemari",
            qty: 11,
            picture : "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
            expiredAt: "2022-10-10"
        };

        const params = {
           id : 33
        };

        const response = await productUseCase.updateProduct(params, body);
        expect(response.success).toBe(true);
        expect(response.data.isActive).toBe(true);
        expect(response.data.qty).notEqual(body.qty);
    })

    it("should be failed to update Product when data is valid", async () => {
        const body = {
            name : "Lemari",
            qty: 11,
            picture : "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
            expiredAt: "2022-10-10"
        };

        const params = {
           id : '3abcd'
        };

        const response = await productUseCase.updateProduct(params, body);
        expect(response.success).toBe(false);
    })

    it("should be success delete Product when data is valid", async () => {
        const params = {
            id : 32
        };

        const response = await productUseCase.deleteProduct(params);
        expect(response.success).toBe(true);
        expect(response.data.isActive).toBe(false);
    })

    it("should be failed delete Product when data is valid", async () => {
        const params = {
            id : '3abcd'
        };

        const response = await productUseCase.deleteProduct(params);
        expect(response.success).toBe(false);
    })


})