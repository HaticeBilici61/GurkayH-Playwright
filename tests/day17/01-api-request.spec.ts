import { test, expect } from '@playwright/test';
import postData from '../../data/petPostData.json'


test.describe('Pet Store API Suite', () => {
    test.describe.configure({ mode: 'serial' })
    let petNo

    test('POST request - Pet Store', async ({ request }) => {
        const response = await request.post('https://petstore.swagger.io/v2/pet', { data: postData })
        const responseData = await response.json()
        petNo = responseData.id

        expect(response.status()).toBe(200)
        expect(responseData.category.id).toBe(1)
        expect(responseData.category.name).toEqual("Köpek")
        expect(responseData.name).toEqual("Pamuk")
        expect(typeof responseData.photoUrls[0]).toBe('string')
        expect(responseData.tags[0].id).toBe(1)
        expect(responseData.tags[0].name).toEqual("Sibirya Kurdu")
        expect(responseData.status).toEqual("satılık değil")
    });

    test('GET request - Pet Store', async ({ request }) => {
        const response = await request.get('https://petstore.swagger.io/v2/pet/' + petNo)
        const responseData = await response.json()

        expect(response.status()).toBe(200)
        expect(responseData.category.id).toBe(1)
        expect(responseData.category.name).toEqual("Köpek")
        expect(responseData.name).toEqual("Pamuk")
        expect(typeof responseData.photoUrls[0]).toBe('string')
        expect(responseData.tags[0].id).toBe(1)
        expect(responseData.tags[0].name).toEqual("Sibirya Kurdu")
        expect(responseData.status).toEqual("satılık değil")
    });

    test('DELETE request - Pet Store', async ({ request }) => {
        const response = await request.delete('https://petstore.swagger.io/v2/pet/' + petNo)
        const responseData = await response.json()

        expect(response.status()).toBe(200)
        expect(responseData.code).toBe(200)
        expect(responseData.type).toEqual('unknown')
        expect(responseData.message).toEqual(petNo.toString())
    });

    test('GET request Negatif Test - Pet Store', async ({ request }) => {
        const response = await request.get('https://petstore.swagger.io/v2/pet/' + petNo)

        expect(response.status()).toBe(404)
    });

});


