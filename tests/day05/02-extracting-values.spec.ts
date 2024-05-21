import { test, expect } from '@playwright/test';

test('Extracting Values', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice')

    // Text Value
    const openWindowButton = page.getByRole('button', { name: 'Open Window' })
    const openWindowButtonText = await openWindowButton.textContent() // <-- Open Window
    expect(openWindowButtonText).toEqual('Open Window')

    // Input Value
    const inputField = page.getByPlaceholder('Enter Your Name')
    await inputField.fill('Gürkay')
    const inputFieldValue = await inputField.inputValue() // <-- Gürkay
    expect(inputFieldValue).toEqual('Gürkay')

    // Attribute Value
    const inputFieldNameAttibuteValue = await inputField.getAttribute('name') // <-- enter-name
    expect(inputFieldNameAttibuteValue).toEqual('enter-name')
});
