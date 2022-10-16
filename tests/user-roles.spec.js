const { test, expect } = require("../fixtures/base")

let id
test.describe.serial("e2e Test", () => {
    

    test("API Test", async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users?page=2")
        expect(response.status()).toBeTruthy()
        expect(response.status()).toBe(200)
        const responseJson = await response.json()
        id = await responseJson.page
    })

    test("Response print", async () => {
        console.log(await id)
        
    })
})
