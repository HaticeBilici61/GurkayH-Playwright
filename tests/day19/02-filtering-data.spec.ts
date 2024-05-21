import { test, expect } from '@playwright/test';
import { getTokenPST } from '../../utils/auth-service';

test('Filtering List Data', async ({ request }) => {
    const token = await getTokenPST()

    const response = await request.get('https://api.practicesoftwaretesting.com/users', {
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const responseData = await response.json()
    console.log(JSON.stringify(responseData, null, 2))

    const userId = responseData.data.find(item => item.email === 'customer@practicesoftwaretesting.com').id
    console.log('UserID: ' + userId)

});
