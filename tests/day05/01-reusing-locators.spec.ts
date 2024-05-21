import { test, expect } from '@playwright/test';

test('Reusing Locators', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice')

    // Open Window butonunun locate'ini bir değişken içerisinde tanımladık.
    const openWindowButton = page.getByRole('button', { name: 'Open Window' })
    await expect(openWindowButton).toBeVisible()
    await expect(openWindowButton).toHaveText('Open Window')
    await openWindowButton.click()
});
