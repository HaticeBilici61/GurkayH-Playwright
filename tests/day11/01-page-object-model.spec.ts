import { test } from '@playwright/test';
import { NavigationPage } from '../../page-objects/navigationPage';
import { SignInPage } from '../../page-objects/signInPage';
import { PageManager } from '../../page-objects/pageManager';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/')
});


test('Navigation Test', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const signInPage = new SignInPage(page)
    
    await navigateTo.openSignInPage()
    await navigateTo.openContactPage()
    await navigateTo.openHandToolsPage()
    await navigateTo.openCategoriesPage('Rentals')

    await navigateTo.openSignInPage()
    await signInPage.performLogin('admin@practicesoftwaretesting.com', 'welcome01', 'Login')
});

test('Navigation Test - 2', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().openSignInPage()
    await pm.navigateTo().openContactPage()

});

test('Navigation Test - 3', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().openSignInPage()
    await pm.onSignInPage().performLogin('admin@practicesoftwaretesting.com', 'welcome01', 'Login')

    // await kullanici.anaMenuden().signInLinkineTiklar()
    // await kullanici.singInSayfasinda().loginOlur()
});
