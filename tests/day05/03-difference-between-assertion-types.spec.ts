import { test, expect } from '@playwright/test';

test('Difference between assertion types - 1', async ({ page }) => {
    await page.goto('https://demoqa.com/dynamic-properties')

    const buttonLocator = page.locator('#colorChange')

    // Non-retrying Assertion
    const buttonClassValue = await buttonLocator.getAttribute('class') // <-- mt-4 btn btn-primary
    expect(buttonClassValue).toEqual('mt-4 text-danger btn btn-primary') // FAIL

    // Auto-retrying Assertion
    await expect(buttonLocator).toHaveValue('mt-4 text-danger btn btn-primary')
});

test('Difference between assertion types - 2', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls')

    const buttonLocator = page.locator('#checkbox-example').getByRole('button')
    await buttonLocator.click()

    // Non-retrying Assertion
    const buttonText = await buttonLocator.textContent() // <-- Remove
    expect(buttonText).toEqual('Add') // FAIL

    // Auto-retrying Assertion
    await expect(buttonLocator).toHaveText('Add')
});