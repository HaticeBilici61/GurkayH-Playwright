import { test, expect } from '@playwright/test';

test('Practice - CSS Selector', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')

    await page.locator('#user-name').fill('standard_user')
    await page.locator('[id="password"]').fill('secret_sauce')
    await page.locator('.submit-button').click()

    await expect(page.locator(':text-is("Products")')).toBeVisible()
    await page.locator('[alt="Sauce Labs Bike Light"]').click()

    await expect(page.locator('#back-to-products')).toHaveText('Back to products')
    await expect(page.locator('.btn_small')).toHaveText('Add to cart')
    await page.locator('.btn_small').click()
    await expect(page.locator('.btn_small')).toHaveText('Remove')
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
    await page.locator('.shopping_cart_badge').click()

    await expect(page.locator(':text-is("Your Cart")')).toBeVisible()
    await page.locator('button[name="continue-shopping"]').click()
    await expect(page.locator(':text-is("Products")')).toBeVisible()
});
