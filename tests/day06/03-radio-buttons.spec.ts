import { test, expect } from '@playwright/test';

test('Radio Buttons', async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/')

    const radioButtonRed = page.getByRole('radio', { name: 'Red' })
    const radioButtonBlue = page.getByRole('radio', { name: 'Blue' })

    await radioButtonRed.check()

    // Generic Assertion
    const radioRedStatus = await radioButtonRed.isChecked() // <-- True
    const radioBlueStatus = await radioButtonBlue.isChecked() // <-- False
    expect(radioRedStatus).toBeTruthy()
    expect(radioBlueStatus).toBeFalsy()

    // Locator Assertion
    await expect(radioButtonRed).toBeChecked()
    await expect(radioButtonBlue).not.toBeChecked()
});
