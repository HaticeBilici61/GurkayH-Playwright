import { test, expect } from '@playwright/test';

test('Practise 1 - User Facing Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    await expect(page.getByRole('heading')).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByRole('textbox', {name: 'Password'}).fill('admin123')
    await page.getByRole('button').click()

    await expect(page.getByRole('heading')).toHaveText('Dashboard')
    await page.getByRole('link', { name: 'My Info' }).click()
    await expect(page.getByRole('heading', {name: 'PIM'})).toBeVisible()
});

test('Practise 2 - User Facing Locators', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()
    
    await expect(page.getByText('Products')).toBeVisible()
    await page.getByAltText('Sauce Labs Backpack').click()

    await expect(page.getByRole('button', { name: "Back to products" })).toBeVisible()
    await page.getByRole('button', { name: "Add to cart" }).click()
    await expect(page.getByRole('button', { name: "Remove" })).toBeVisible()
    await expect(page.getByText('1', { exact: true })).toBeVisible()
    await page.getByTestId('shopping-cart-link').click()

    await expect(page.getByText('Your Cart')).toBeVisible()
    await page.getByRole('button', { name: 'Continue Shopping' }).click()
    await expect(page.getByText('Products')).toBeVisible()
});

test('Practise 3 - User Facing Locators', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/')

    await page.getByPlaceholder('Search entire store').fill('t-shirt')
    await page.getByTitle('Search').click()

    await page.getByAltText('Balboa Persistence Tee').click()
    await expect(page.getByRole('heading', { name: 'Balboa Persistence Tee' })).toBeVisible()
    await page.getByText('XL').click()
    await page.getByLabel('Green').click()
    await page.getByRole('button', { name: 'Add to Cart' }).click()
    await expect(page.getByRole('link', { name: '1' })).toBeVisible()
    await page.getByRole('link', { name: '1' }).click()
    await page.getByRole('button', { name: "Proceed to Checkout" }).click()
    
    await expect(page.getByText('Shipping Address')).toBeVisible()
});



