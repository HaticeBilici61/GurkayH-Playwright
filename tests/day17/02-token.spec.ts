import { test, expect } from '@playwright/test';
import contactData from '../../data/postContact.json'
import { getToken } from '../../utils/auth-service';

test('Add Contact', async ({ request }) => {
    const token = await getToken() // Tokeni alır

    const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/contacts', {
        data: contactData,
        headers: { "Authorization": "Bearer " + token}
    })
    const responseData = await response.json()

    console.log(JSON.stringify(responseData, null, 2))
});
