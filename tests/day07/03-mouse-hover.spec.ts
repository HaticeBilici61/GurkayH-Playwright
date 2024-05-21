import { test, expect } from '@playwright/test';

test('Mouse Hover', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice')

    await page.getByRole('button', { name: 'Mouse Hover' }).hover()
    await page.getByRole('link', {name: 'Reload'}).click()
});

