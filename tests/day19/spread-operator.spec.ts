import { test } from '@playwright/test';

test('Spread Operator', async ({ page }) => {
    const defaultSettings = {
        theme: 'light',
        autoSave: true,
        notifications: false
    }

    const userSettings = {
        theme: 'dark',
        notifications: true
    }

    const finalSettings = { ...defaultSettings, ...userSettings }
    /*
        theme: 'dark',
        autoSave: true,
        notifications: true
    */
    console.log(finalSettings)



});
