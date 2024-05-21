import { expect } from "@playwright/test"

export async function makeRequest(request, method, url, data, token) {
    return await request[method](url, {
        data: data,
        headers: { "Authorization": `Bearer ${token}` }
    })
}

export function validateContact(responseData, expecteddata) {
    for (const property in expecteddata) {
        expect(responseData[property]).toEqual(expecteddata[property])
    }
    expect(responseData).toHaveProperty('_id')
    expect(responseData).toHaveProperty('owner')
}