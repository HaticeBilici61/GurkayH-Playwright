import { expect, test } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';

test.describe('Test Suite', () => {
    test('Test - 1', async ({ page }) => {
        const pm = new PageManager(page)

        await page.goto('https://practicesoftwaretesting.com/#/')
        await page.screenshot({ path: 'screenshots/HomePage.png' })

        await pm.navigateTo().openSignInPage()
        await page.locator('.auth-form').screenshot({path: 'screenshots/LoginForm.png'})
    });

    test('Test - 2', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.1')
    });

    test('Test - 3', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')
    });
});