import { test, expect } from '@playwright/test';

test('Parent Locators - 1', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')

    await expect(page.locator('.checkbox').filter({hasText: 'Power Tools'}).locator('input')).toHaveCount(5)
});

test('Parent Locators - 2', async ({ page }) => {
    await page.goto('https://www.kitapyurdu.com/')

    await expect(page.locator('.box').filter({hasText: 'En Çok Satılanlar'}).locator('.bestseller-item')).toHaveCount(10)
});

