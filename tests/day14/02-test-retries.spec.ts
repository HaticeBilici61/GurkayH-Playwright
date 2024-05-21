import { expect, test } from '@playwright/test';

test.describe('Test Suite', () => {
    test.describe.configure({ retries: 2 }) // Bu suit'teki fail olan testlerin 2 kez koşulmasını sağlar
    // Terminalde --retries=3 eklentisi ile fail olan testler tekrar koşulabilir

    test.describe.configure({ mode: 'parallel'}) // Bu suit'teki testlerin paralel olarak koşulmasını sağlar

    test('Test - 1', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')
    });
    test('Test - 2', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')
    });
    test('Test - 3', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')
    });
});