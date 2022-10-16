const { test, expect } = require("../fixtures/base")

let id
test.describe.serial("e2e Test", () => {
    

    test("GET API Test", async ({ request }) => {
        const response = await request.get("https://reqres.in/api/users?page=2")
        expect(response.status()).toBeTruthy()
        expect(response.status()).toBe(200)
    })

    test("POST - Create User", async ({request}) => {
        const response = await request.post("https://reqres.in/api/users", {
            data : {
                "name": "morpheus",
                "job": "leader"
            }
        })
        expect(response.status()).toBeTruthy()
        expect(response.status()).toBe(201)
        const responseJson = await response.json()
        id = await responseJson.id
        console.log(await id)
        
    })
})
