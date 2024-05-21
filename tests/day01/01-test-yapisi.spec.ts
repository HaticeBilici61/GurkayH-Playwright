import { test } from '@playwright/test'

// Temel Test Bloğu
test('İlk test', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')
    await page.getByText('Sign in').click()
    await page.getByText('Register your account').click()
})

test('İkinci test', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')

})

test('Üçüncü test', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')

})

// Test Suite ile Testleri Gruplandırma
test.describe('Test Suite 1', () => {
    test('İlk test', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
        await page.getByText('Sign in').click()
        await page.getByText('Register your account').click()
    })
    
    test('İkinci test', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
    
    })
})

test.describe('Test Suite 2', () => {
    test('İlk test', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
        await page.getByText('Sign in').click()
        await page.getByText('Register your account').click()
    })
    
    test('İkinci test', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
    
    })
    
})