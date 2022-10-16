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
        console.log(await response.text())
        const responseJson = await response.json()
        id = await responseJson.id
        console.log(await id)
        
    })

    test("PUT - Update Whole User", async ({request}) => {
        const response = await request.put("https://reqres.in/api/users/"+id, {
            data : {
                "name": "Ahad",
                "job": "Tester"
            }
        })
        expect(response.status()).toBeTruthy()
        expect(response.status()).toBe(200)
        console.log(await response.text())
        const responseJson = await response.json()
        const jobTitle = await responseJson.job
        console.log(await jobTitle)
        expect(jobTitle).toBe("Tester")
        
    })

    test("PATCH - Update Single Field User", async ({request}) => {
        const response = await request.patch("https://reqres.in/api/users/"+id, {
            data : {
                "name": "Ahad M Khan",
                "job": "Tester"
            }
        })
        expect(response.status()).toBeTruthy()
        expect(response.status()).toBe(200)
        console.log(await response.text())
        const responseJson = await response.json()
        const nameRes = await responseJson.name
        console.log(await nameRes)
        expect(nameRes).toBe("Ahad M Khan")        
    })

    test("Delete - Delete Created User", async ({request}) => {
        const response = await request.patch("https://reqres.in/api/users/"+id)
        expect(response.status()).toBeTruthy()
        expect(response.status()).toBe(200)
        console.log(await response.text())      
    })
})
