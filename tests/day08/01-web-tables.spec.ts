import { test, expect } from '@playwright/test';

test('Web Tables - 1', async ({ page }) => {
    await page.goto('https://letcode.in/table')

    const rowApple = page.getByRole('row', { name: 'Apple' })
    const targetColumn = rowApple.locator('td').last()

    await expect(targetColumn).toHaveText('180')
    console.log(await targetColumn.textContent())
});

test('Web Tables - 2', async ({ page }) => {
    await page.goto('https://letcode.in/table')

    const sourceRow = page.getByRole('row', { name: 'man@letcode.in' })
    const checkbox = sourceRow.getByRole('checkbox')

    await checkbox.check()
    
});

test('Web Tables - 3', async ({ page }) => {
    await page.goto('https://letcode.in/table')

    const sourceRow = page.getByRole('row', { name: '16' }).filter({ hasText: 'Gingerbread' })
    const targetColumn = sourceRow.locator('td').nth(5)

    await expect(targetColumn).toHaveText('60')
    console.log(await sourceRow.count())
});

test('Web Tables - 4', async ({ page }) => {
    await page.goto('https://letcode.in/advancedtable')

    const universities = ['American', 'Wales', 'Khan']
    const searchInput = page.getByLabel('Search:')

    for (let university of universities) {
        await searchInput.fill(university)
        const rows = page.locator('tbody tr')

        for (let row of await rows.all()) {
            const uniName = await row.locator('td').nth(1).textContent()
            expect(uniName).toContain(university)
        }
    }
});
