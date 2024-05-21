import { test, expect } from '@playwright/test';

test('Iframe', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice')

    const frame = page.frameLocator('iframe')

    const titlePage = await page.locator('h1').textContent()
    console.log(titlePage)

    const titleFrame = await frame.locator('h1').textContent()
    console.log(titleFrame)

    expect(titleFrame).toEqual('All Courses')
});
