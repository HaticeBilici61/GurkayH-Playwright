import { test } from '@playwright/test';

// test.beforeAll(async ({ page }) => {
    
// })

// test.afterAll(async ({ page }) => {
    
// })

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')
})

// test.afterEach(async ({ page }) => {
    
// })

test.describe('Contact Sayfası Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Contact').click()
    })
    test('Test 1', async ({ page }) => {
        
    });

    test('Test 2', async ({ page }) => {
        
    });
})

test.describe('Login Sayfası Test Suite', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Sign in').click()
    })
    test('Test 1', async ({ page }) => {
        
    });

    test('Test 2', async ({ page }) => {
        
    });
})






