import { test, expect } from '@playwright/test';

test('Alert Popup', async ({ page }) => {
    await page.goto('https://practice-automation.com/popups/')

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Hi there, pal!')
        dialog.accept()
    })

    await page.getByRole('button', {name: 'Alert Popup'}).click()
});

test('Confirm Popup', async ({ page }) => {
    await page.goto('https://practice-automation.com/popups/')

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('OK or Cancel, which will it be?')
        dialog.dismiss()
    })

    await page.getByRole('button', {name: 'Confirm Popup'}).click()
});

test('Prompt Popup', async ({ page }) => {
    await page.goto('https://practice-automation.com/popups/')

    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Hi there, what\'s your name?')
        dialog.accept('Gürkay')
    })

    await page.getByRole('button', {name: 'Prompt Popup'}).click()
});
