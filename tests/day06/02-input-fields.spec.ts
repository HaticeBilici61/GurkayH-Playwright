import { test, expect } from '@playwright/test';

test('Input Fields', async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/')

    const nameInput = page.getByRole('textbox', { name: 'Name (required)' })
    
    await nameInput.fill('Gürkay Birinci')
    await nameInput.clear()
    await nameInput.pressSequentially('Gürkay Birinci', { delay: 100 })
    
    // Generic Assertion
    const nameInputValue = await nameInput.inputValue() // <-- Gürkay Birinci
    console.log(nameInputValue)
    expect(nameInputValue).toEqual('Gürkay Birinci')
    expect(nameInputValue).toContain('Gürkay')

    // Locator Assertion
    console.log(nameInput)
    await expect(nameInput).toHaveValue('Gürkay Birinci')
});
