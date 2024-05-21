import { expect, test } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';

test.describe('Test Suite', () => {
    test('Test - 1', async ({ page }) => {
        const pm = new PageManager(page)

        await page.goto('https://practicesoftwaretesting.com/#/')
        await expect(page).toHaveScreenshot()

        await pm.navigateTo().openSignInPage()
        // await page.getByPlaceholder('Enter your E-mail').fill('Gürkay Birinci')
        await expect(page.locator('.auth-form')).toHaveScreenshot({maxDiffPixels: 100})
    });

});