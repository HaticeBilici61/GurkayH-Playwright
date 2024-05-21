import { test, expect } from '@playwright/test';
import postData from '../../data/postContact.json'
import putData from '../../data/putContact.json'
import patchData from '../../data/patchContact.json'
import { getToken } from '../../utils/auth-service';

test.describe('Contact List API Test Suite', () => {
    test.describe.configure({ mode: 'serial' })
    let token
    let contactId

    test.beforeAll(async () => {
        token = await getToken()
    });

    test('Add Contact', async ({ request }) => {
        const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
            data: postData,
            headers: { "Authorization": "Bearer " + token }
        })
        const responseData = await response.json()
        contactId = responseData._id

        console.log(JSON.stringify(responseData, null, 2))

        // Status Code Doğrulaması
        expect(response.status()).toBe(201)

        // Veri eşitliğinin doğrulanması
        expect(responseData.firstName).toEqual(postData.firstName)
        expect(responseData.lastName).toEqual(postData.lastName)
        expect(responseData.birthdate).toEqual(postData.birthdate)
        expect(responseData.email).toEqual(postData.email)
        expect(responseData.phone).toEqual(postData.phone)
        expect(responseData.street1).toEqual(postData.street1)
        expect(responseData.street2).toEqual(postData.street2)
        expect(responseData.city).toEqual(postData.city)
        expect(responseData.stateProvince).toEqual(postData.stateProvince)
        expect(responseData.postalCode).toEqual(postData.postalCode)
        expect(responseData.country).toEqual(postData.country)

        // Property varlığının doğrulanması
        expect(responseData).toHaveProperty('_id')
        expect(responseData).toHaveProperty('owner')
    });

    test('Get Contact', async ({ request }) => {
        const response = await request.get(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, {
            headers: { "Authorization": "Bearer " + token }
        })
        const responseData = await response.json()

        console.log(JSON.stringify(responseData, null, 2))

        // Status Code Doğrulaması
        expect(response.status()).toBe(200)

        // Veri eşitliğinin doğrulanması
        expect(responseData._id).toEqual(contactId)
        expect(responseData.firstName).toEqual(postData.firstName)
        expect(responseData.lastName).toEqual(postData.lastName)
        expect(responseData.birthdate).toEqual(postData.birthdate)
        expect(responseData.email).toEqual(postData.email)
        expect(responseData.phone).toEqual(postData.phone)
        expect(responseData.street1).toEqual(postData.street1)
        expect(responseData.street2).toEqual(postData.street2)
        expect(responseData.city).toEqual(postData.city)
        expect(responseData.stateProvince).toEqual(postData.stateProvince)
        expect(responseData.postalCode).toEqual(postData.postalCode)
        expect(responseData.country).toEqual(postData.country)

        // Property varlığının doğrulanması
        expect(responseData).toHaveProperty('_id')
        expect(responseData).toHaveProperty('owner')
    });

    test('Get Contact List', async ({ request }) => {
        const response = await request.get(`https://thinking-tester-contact-list.herokuapp.com/contacts/`, {
            headers: { "Authorization": "Bearer " + token }
        })
        const responseData = await response.json()

        console.log(JSON.stringify(responseData, null, 2))

        // Status Code Doğrulaması
        expect(response.status()).toBe(200)

        // Veri tipinin doğrulanması
        expect(typeof responseData).toBe('object')
        expect(Array.isArray(responseData)).toBeTruthy()

        // Property varlığının doğrulanması
        expect(responseData[0]).toHaveProperty('_id')
        expect(responseData[0]).toHaveProperty('owner')

        // Listte veri olduğunun doğrulanması
        expect(responseData.length).toBeGreaterThan(0)
    });

    test('Update Contact', async ({ request }) => {
        const response = await request.put(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, {
            data: putData,
            headers: { "Authorization": "Bearer " + token }
        })
        const responseData = await response.json()

        console.log(JSON.stringify(responseData, null, 2))

        // Status Code Doğrulaması
        expect(response.status()).toBe(200)

        // Veri eşitliğinin doğrulanması
        expect(responseData.firstName).toEqual(putData.firstName)
        expect(responseData.lastName).toEqual(putData.lastName)
        expect(responseData.birthdate).toEqual(putData.birthdate)
        expect(responseData.email).toEqual(putData.email)
        expect(responseData.phone).toEqual(putData.phone)
        expect(responseData.street1).toEqual(putData.street1)
        expect(responseData.street2).toEqual(putData.street2)
        expect(responseData.city).toEqual(putData.city)
        expect(responseData.stateProvince).toEqual(putData.stateProvince)
        expect(responseData.postalCode).toEqual(putData.postalCode)
        expect(responseData.country).toEqual(putData.country)

        // Property varlığının doğrulanması
        expect(responseData).toHaveProperty('_id')
        expect(responseData).toHaveProperty('owner')
    });

    test('Partial Update Contact', async ({ request }) => {
        const response = await request.patch(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, {
            data: patchData,
            headers: { "Authorization": "Bearer " + token }
        })
        const responseData = await response.json()

        console.log(JSON.stringify(responseData, null, 2))

        // Status Code Doğrulaması
        expect(response.status()).toBe(200)

        // Veri eşitliğinin doğrulanması
        expect(responseData.firstName).toEqual(patchData.firstName)
        expect(responseData.lastName).toEqual(patchData.lastName)
        expect(responseData.birthdate).toEqual(putData.birthdate)
        expect(responseData.email).toEqual(putData.email)
        expect(responseData.phone).toEqual(putData.phone)
        expect(responseData.street1).toEqual(putData.street1)
        expect(responseData.street2).toEqual(putData.street2)
        expect(responseData.city).toEqual(putData.city)
        expect(responseData.stateProvince).toEqual(putData.stateProvince)
        expect(responseData.postalCode).toEqual(putData.postalCode)
        expect(responseData.country).toEqual(putData.country)

        // Property varlığının doğrulanması
        expect(responseData).toHaveProperty('_id')
        expect(responseData).toHaveProperty('owner')
    });

    test('Delete Contact', async ({ request }) => {
        const response = await request.delete(`https://thinking-tester-contact-list.herokuapp.com/contacts/${contactId}`, {
            headers: { "Authorization": "Bearer " + token }
        })
        const responseData = await response.text()
        const expectedData = 'Contact deleted'

        // Status Code Doğrulaması
        expect(response.status()).toBe(200)

        // Response body doğrulaması
        expect(responseData).toEqual(expectedData)

    });
});




