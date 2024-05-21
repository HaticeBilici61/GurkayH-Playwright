import { test, expect } from '@playwright/test';

test('Non-retrying assertion methods', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice')

    // toBeTruthy() - toBeFalsy()
    const bmwRadio = page.locator('#bmwradio')

    let bmwRadioStatus = await bmwRadio.isChecked() // False
    expect(bmwRadioStatus).toBeFalsy()

    await bmwRadio.check()
    bmwRadioStatus = await bmwRadio.isChecked() // True
    expect(bmwRadioStatus).toBeTruthy()

    // toBeGreaterThan() - toBeLessThan() veya toBeGreaterThanOrEqual() - toBeLessThanOrEqual()
    const radioButtons = page.getByRole('radio')
    const radioButtonsCount = await radioButtons.count()

    expect(radioButtonsCount).toBeGreaterThan(0)
    expect(radioButtonsCount).toBeLessThan(10)
    expect(radioButtonsCount).toBeGreaterThanOrEqual(3)
    expect(radioButtonsCount).toBeLessThanOrEqual(3)

    // toContain()
    const header = await page.getByRole('heading').textContent()

    expect(header).toContain('Practice')

    // toEqual()
    expect(header).toEqual('Practice Page')
});
