import { test, expect } from '@playwright/test';

test('CSS Selector Locators', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/auth/register')

    // Tag Name
    await page.locator('input').first().fill('Tag Name')

    // ID
    await page.locator('#first_name').fill('ID')

    // Class Name
    await page.locator('.form-control').first().fill('Class Name')

    // Attribute Value
    await page.locator('[id="first_name"]').fill('Attribute Value')

    // Class Value
    await page.locator('[class="form-control ng-untouched ng-dirty ng-valid"]').fill('Class Value')

    // Tag Name ve Attribute Value
    await page.locator('input[id="first_name"]').fill('Tag Name ve Attribute Value')

    // Tag Name ve Multiple Attribute Value
    await page.locator('input[id="first_name"][placeholder="Your first name *"]').fill('Tag Name ve Multiple Attribute Value')

    // Partial Text
    await expect(page.locator(':text("Customer")')).toBeVisible()

    // Exact Text
    await expect(page.locator(':text-is("Customer registration")')).toBeVisible()
});
