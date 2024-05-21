import { test, expect } from '@playwright/test';
import postData from '../../data/postContact.json'
import putData from '../../data/putContact.json'
import patchData from '../../data/patchContact.json'
import { getToken } from '../../utils/auth-service';
import { makeRequest, validateContact } from '../../utils/api-utils';

test.describe('Contact List API Test Suite', () => {
    test.describe.configure({ mode: 'serial' })
    let token
    let contactId
    let baseUrl = 'https://thinking-tester-contact-list.herokuapp.com/contacts/'

    test.beforeAll(async () => {
        token = await getToken()
    });

    test('Add Contact', async ({ request }) => {
        const response = await makeRequest(request, 'post', baseUrl, postData, token)
        const responseData = await response.json()
        contactId = responseData._id

        expect(response.status()).toBe(201)
        validateContact(responseData, postData)
    });

    test('Get Contact', async ({ request }) => {
        const response = await makeRequest(request, 'get', `${baseUrl}${contactId}`, {}, token)
        const responseData = await response.json()

        expect(response.status()).toBe(200)
        validateContact(responseData, postData)
    });

    test('Get Contact List', async ({ request }) => {
        const response = await makeRequest(request, 'get', baseUrl, {}, token)
        const responseData = await response.json()

        // Status Code Doğrulaması
        expect(response.status()).toBe(200)

        // Veri tipinin doğrulanması
        expect(Array.isArray(responseData)).toBeTruthy()

        // Property varlığının doğrulanması
        expect(responseData[0]).toHaveProperty('_id')
        expect(responseData[0]).toHaveProperty('owner')

        // Listte veri olduğunun doğrulanması
        expect(responseData.length).toBeGreaterThan(0)
    });

    test('Update Contact', async ({ request }) => {
        const response = await makeRequest(request, 'put', `${baseUrl}${contactId}`, putData, token)
        const responseData = await response.json()

        expect(response.status()).toBe(200)
        validateContact(responseData, putData)
    });

    test('Partial Update Contact', async ({ request }) => {
        const response = await makeRequest(request, 'patch', `${baseUrl}${contactId}`, patchData, token)
        const responseData = await response.json()

        expect(response.status()).toBe(200)
        const finalData = {...putData, ...patchData}
        validateContact(responseData, finalData)

    });

    test('Delete Contact', async ({ request }) => {
        const response = await makeRequest(request, 'delete', `${baseUrl}${contactId}`, {}, token)
        const responseData = await response.text()
        const expectedData = 'Contact deleted'

        expect(response.status()).toBe(200)
        expect(responseData).toEqual(expectedData)
    });
});
