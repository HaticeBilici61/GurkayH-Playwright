import { test } from '@playwright/test';

test.describe('Test Suite @regression', () => {
    test('Test - 1 @smoke', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
    });
    test('Test - 2 @tc02', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
    });
    test('Test - 3', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
    });
});
