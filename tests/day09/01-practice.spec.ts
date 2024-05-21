import { test, expect } from '@playwright/test';

test('Personal Details Test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    // URL Doğrulama
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Title Doğrulama
    await expect(page).toHaveTitle('OrangeHRM')

    // Sayfa Başlığı Doğrulama
    await expect(page.getByRole('heading')).toHaveText('Login')

    // Username Input
    const username = 'Admin'
    const usernameInput = page.getByPlaceholder('Username')
    await expect(usernameInput).toBeEditable()
    await usernameInput.fill(username)
    await expect(usernameInput).toHaveValue(username)

    // Password Input
    const password = 'admin123'
    const passwordInput = page.getByPlaceholder('Password')
    await expect(passwordInput).toBeEditable()
    await passwordInput.fill(password)
    await expect(passwordInput).toHaveValue(password)

    // Login Button
    const loginButton = page.getByRole('button')
    await expect(loginButton).toBeEnabled()
    await loginButton.click()

    // Sayfa Başlığı Doğrulama
    await expect(page.getByRole('heading')).toHaveText('Dashboard')

    // My Info Linki
    await page.getByRole('link', { name: 'My Info' }).click()

    // Sayfa Başlığını Doğrulama
    await expect(page.locator('.oxd-topbar-header-breadcrumb')).toHaveText('PIM')
    // await page.waitForTimeout(5000) // Hard Wait

    // Loading Spinner
    await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' })

    // Firstname Input
    const firstName = 'Gürkay'
    const firstNameInput = page.getByPlaceholder('First Name')
    await expect(firstNameInput).toBeEditable()
    await firstNameInput.clear()
    await firstNameInput.fill(firstName)
    await expect(firstNameInput).toHaveValue(firstName)

    // Lastname Input
    const lastName = 'Birinci'
    const lastNameInput = page.getByPlaceholder('Last Name')
    await expect(lastNameInput).toBeEditable()
    await lastNameInput.clear()
    await lastNameInput.fill(lastName)
    await expect(lastNameInput).toHaveValue(lastName)

    // Save Button
    const saveButton = page.locator('form').filter({ hasText: 'Employee Full Name' }).getByRole('button')
    await expect(saveButton).toBeEnabled()
    await saveButton.click()

    // Success Text
    await expect(page.getByText('Successfully Updated')).toBeVisible()

    // Input Fields Assertion
    await expect(firstNameInput).toHaveValue(firstName)
    await expect(lastNameInput).toHaveValue(lastName)

    // Logout
    await page.locator('.oxd-userdropdown-name').click()
    await page.getByText('Logout').click()
    await expect(page.getByRole('heading')).toHaveText('Login')
});


test('Emergency Contacts Test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    // URL Doğrulama
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Title Doğrulama
    await expect(page).toHaveTitle('OrangeHRM')

    // Sayfa Başlığı Doğrulama
    await expect(page.getByRole('heading')).toHaveText('Login')

    // Username Input
    const username = 'Admin'
    const usernameInput = page.getByPlaceholder('Username')
    await expect(usernameInput).toBeEditable()
    await usernameInput.fill(username)
    await expect(usernameInput).toHaveValue(username)

    // Password Input
    const password = 'admin123'
    const passwordInput = page.getByPlaceholder('Password')
    await expect(passwordInput).toBeEditable()
    await passwordInput.fill(password)
    await expect(passwordInput).toHaveValue(password)

    // Login Button
    const loginButton = page.getByRole('button')
    await expect(loginButton).toBeEnabled()
    await loginButton.click()

    // Sayfa Başlığı Doğrulama
    await expect(page.getByRole('heading')).toHaveText('Dashboard')

    // My Info Linki
    await page.getByRole('link', { name: 'My Info' }).click()

    // Sayfa Başlığını Doğrulama
    await expect(page.locator('.oxd-topbar-header-breadcrumb')).toHaveText('PIM')

    // Emergency Contacts linki
    await page.getByRole('link', { name: 'Emergency Contacts' }).click()

    const kisiler = [
        { name: 'Ali', relationship: 'Kardeş', phone: '05556669988' },
        { name: 'Ayşe', relationship: 'Kuzen', phone: '05556669989' },
        { name: 'Hasan', relationship: 'Amca', phone: '05556669980' }
    ]

    for (const kisi of kisiler) {
        // Add Button
        await page.locator('.orangehrm-action-header').filter({ hasText: 'Assigned Emergency Contacts' }).getByRole('button').click()

        // Input Fields
        await page.locator('.oxd-form input').nth(0).fill(kisi.name)
        await page.locator('.oxd-form input').nth(1).fill(kisi.relationship)
        await page.locator('.oxd-form input').nth(2).fill(kisi.phone)

        // Save Button
        await page.getByRole('button', { name: 'Save' }).click()

        // Success Text
        await expect(page.getByText('Successfully Saved')).toBeVisible()

        // Loading Spinner
        await page.waitForSelector('.oxd-loading-spinner', { state: 'hidden' })
    }

    // All Checkboxes
    await page.getByRole('row', { name: 'Relationship' }).locator('i').check()

    // Delete Buttons
    await page.getByRole('button', { name: 'Delete Selected' }).click()
    await page.getByRole('button', { name: 'Yes, Delete' }).click()

    // Success Text
    await expect(page.getByText('Successfully Deleted')).toBeVisible()

    // Logout
    await page.locator('.oxd-userdropdown-name').click()
    await page.getByText('Logout').click()
    await expect(page.getByRole('heading')).toHaveText('Login')
});