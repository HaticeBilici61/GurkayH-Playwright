import { test, expect } from '@playwright/test';

test('Xpath Locators', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/auth/register')

    // Tag Name
    await expect(page.locator('//h3')).toHaveText('Customer registration')

    // Attribute Value
    await page.locator('//*[@id="first_name"]').fill('Attribute Value')

    // Tag Name ve Attribute Value
    await page.locator('//input[@id="first_name"]').fill('Tag Name ve Attribute Value')

    // Multiple Attribute Value
    await page.locator('//input[@id="first_name" and @placeholder="Your first name *"]').fill('Multiple Attribute Value')

    // Full Text Value
    await expect(page.locator('//*[text()="Customer registration"]')).toBeVisible()
    await expect(page.locator('//*[.="Customer registration"]')).toBeVisible()

    // Contains Text Value
    await expect(page.locator('//*[contains(text(),"mer regis")]')).toHaveText('Customer registration')
});
