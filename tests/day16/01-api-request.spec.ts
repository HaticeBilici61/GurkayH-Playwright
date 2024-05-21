import { test, expect } from '@playwright/test';

test('GET request - Pet Store', async ({ request }) => {
    // API ile veri çekmek için kullanılır
    // Request gönderilir ve response alınır
    const response = await request.get('https://petstore.swagger.io/v2/pet/5')
    const respenseData = await response.json()
    const headers = response.headers()

    // Response body konsolda nasıl yazdırılır
    console.log(JSON.stringify(respenseData, null, 2))

    // Status Code doğrulaması nasıl yapılır
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    expect(response.statusText()).toEqual('OK')

    // Property (Başlık) doğrulaması nasl yapılır
    expect(respenseData).toHaveProperty('name')
    expect(respenseData).toHaveProperty('status')

    // Veri tipi doğrulaması nasıl yapılır
    expect(typeof respenseData.id).toBe('number')
    expect(typeof respenseData.category).toBe('object')
    expect(typeof respenseData.photoUrls).toBe('object')
    expect(typeof respenseData.name).toBe('string')
    expect(typeof respenseData.tags[0].name).toBe('string')

    // Veriler nasıl doğrulanır
    expect(respenseData.id).toBe(5)
    expect(respenseData.category.id).toBe(0)
    expect(respenseData.category.name).toEqual("string")
    expect(respenseData.name).toEqual("doggie")
    expect(respenseData.photoUrls[0]).toEqual("string")
    expect(respenseData.tags[0].id).toBe(0)
    expect(respenseData.tags[0].name).toEqual("string")
    expect(respenseData.status).toEqual("string")

    // Header datası nasıl doğrulanır
    console.log(headers) // Tüm header'ları konsolda yazdırır
    expect(headers['content-type']).toEqual('application/json')
    expect(headers['server']).toContain('Jetty')

});

test('POST request - Pet Store', async ({ request }) => {
    const payload = {
        "id": 9898, "category": { "id": 1, "name": "Köpek" }, "name": "Pamuk",
        "photoUrls": ["https://dxcgs7v732qty.cloudfront.net/kopekler.jpg"],
        "tags": [{ "id": 1, "name": "Sibirya Kurdu" }], "status": "satılık değil"
    }

    const response = await request.post('https://petstore.swagger.io/v2/pet', { data: payload })
    const responseData = await response.json()

    console.log(JSON.stringify(responseData, null, 2))
});

