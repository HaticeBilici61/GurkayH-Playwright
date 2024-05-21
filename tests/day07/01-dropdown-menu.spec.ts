import { test, expect } from '@playwright/test';

test('Single Select Dropdown Menu', async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/')

    const siblingMenu = page.locator('#siblings')
    const siblingOptions = page.locator('#siblings').locator('option')
    const optionText = await siblingOptions.allTextContents()
    console.log(optionText)

    // Menüdeki bir seçeneği seçme
    await siblingMenu.selectOption({label: 'Yes'})
    await siblingMenu.selectOption('no')

    // Menüdeki seçeneklerin adedini doğrulama
    await expect(siblingOptions).toHaveCount(4)

    // Seçili olan seçeneğin değerini doğrulama
    await expect(siblingMenu).toHaveValue('no')

    // Menüde, beklenen seçeneklerin olup olmadığını doğrulama
    expect(optionText).toEqual(['', 'Yes', 'No', 'Maybe'])
    await expect(siblingOptions).toContainText(['Yes', 'No'])
});

test('Multiple Select Dropdown Menu', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice')

    const multipleMenu = page.locator('#multiple-select-example')

    // Menüden çoklu seçim yapma
    await multipleMenu.selectOption(['Apple', 'Peach'])

    // Menünün sayfada görünür olup olmadığını doğrulama
    await expect(multipleMenu).toBeVisible()

    // Menüden bir seçimin yapılabilirliğinin doğrulanması
    await expect(multipleMenu).toBeEnabled() 
});