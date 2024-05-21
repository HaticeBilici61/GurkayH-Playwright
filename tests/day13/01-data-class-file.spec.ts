import { test } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';
import { singleUserCredentials as user } from '../../data/userCredentials';
import { listUserCredentials as userList } from '../../data/userCredentials';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')
});

test('Login Test with Single Data', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().openSignInPage()
    await pm.onSignInPage().performLogin(user.email, user.password, 'Login')
    await pm.onSignInPage().waitForSeconds(3)
});

for (const user of userList) {
    test(`Login Test with List Data ${user.email}`, async ({ page }) => {
        const pm = new PageManager(page)
    
        await pm.navigateTo().openSignInPage()
        await pm.onSignInPage().performLogin(user.email, user.password, 'Login')
        await pm.onSignInPage().waitForSeconds(3)
    });
}



