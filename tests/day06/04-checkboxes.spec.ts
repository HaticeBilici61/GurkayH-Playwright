import { test, expect } from '@playwright/test';

test('Checkboxes', async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/')

    const checkboxWater = page.getByRole('checkbox', {name: 'Water'})
    const checkboxMilk = page.getByRole('checkbox', { name: 'Milk' })
    const allCheckboxes = page.getByRole('checkbox')
    
    await checkboxWater.check() // Water seçeneği seçilir
    await checkboxMilk.click() // Milk seçeneği seçilir
    await checkboxWater.check() // Water seçeneği seçili kalır
    await checkboxMilk.click() // Water seçeneğinin seçimi kaldırılır

    await checkboxWater.uncheck() // Water seçimini kaldırdık

    // Generic Assertion
    await checkboxWater.check()
    const checkboxWaterStatus = await checkboxWater.isChecked() // <-- True
    const checkboxMilkStatus = await checkboxMilk.isChecked() // <-- False
    expect(checkboxWaterStatus).toBeTruthy()
    expect(checkboxMilkStatus).toBeFalsy()

    // Locator Assertion
    await expect(checkboxWater).toBeChecked()
    await expect(checkboxMilk).not.toBeChecked()

    // Tüm Checkbox'ları işaretleme
    for (const box of await allCheckboxes.all()) {
        await box.check() // Seçimi kaldırmak için uncheck() metodu da kullanılabilir
        expect(await box.isChecked()).toBeTruthy() // <-- True
    }
});
