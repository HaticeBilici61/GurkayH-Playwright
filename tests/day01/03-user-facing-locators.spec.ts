import { test, expect } from '@playwright/test';

test('User Facing Locators', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')

    // getByRole()
    await page.getByRole('textbox', { name: "Search" }).fill('pliers')
    await page.getByRole('button', { name: "Search" }).click()
    await page.getByRole('heading', { name: "Combination Pliers" }).click()
    
    // getByText()
    await page.getByText("Contact").click()

    // getByLabel
    await page.getByLabel('First name').fill('Ayşe')

    // getByPlaceholder
    await page.getByPlaceholder('Your last name').fill('Yılmaz')

    // getByTestId
    await page.getByTestId("email").fill('ayse@yilmaz.com')

    // getByTitle
    await page.getByTitle('Practice Software Testing').click()

    // getByAltText()
    await expect(page.getByAltText('Banner')).toBeVisible()

});
