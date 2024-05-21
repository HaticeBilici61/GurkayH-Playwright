import { request } from '@playwright/test';
import authData from '../data/contactAuthData.json'

export async function getToken() {
    const context = await request.newContext()
    const response = await context.post('https://thinking-tester-contact-list.herokuapp.com/users/login', { data: authData })
    const responseData = await response.json()

    return responseData.token
}

export async function getTokenPST() {
    const context = await request.newContext()
    const response = await context.post('https://api.practicesoftwaretesting.com/users/login', {
        data: {
            "email": "admin@practicesoftwaretesting.com",
            "password": "welcome01"
          }
    })
    const responseData = await response.json()

    return responseData.access_token
}