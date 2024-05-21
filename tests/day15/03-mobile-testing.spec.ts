import { expect, test } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';

test.describe('Test Suite', () => {
    test('Test - 1', async ({ page }, testInfo) => {
        const pm = new PageManager(page)

        await page.goto('https://practicesoftwaretesting.com/#/')

        if (testInfo.project.name == 'mobile') {
            await page.locator('.navbar-toggler-icon').click()
        }
        
        await pm.navigateTo().openSignInPage()
    });

});