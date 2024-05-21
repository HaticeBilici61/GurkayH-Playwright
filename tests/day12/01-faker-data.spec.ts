import { expect, test } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';
import { faker, fakerTR } from '@faker-js/faker'

test.describe('User Profile Data Tests', () => {
    test.describe.configure({ mode: 'serial' }) // Bu suit'teki testlerin sıralı olarak koşulmasını sağlar
    
    let randomFirstName, randomLastName, dateOfBirth, randomAddress, randomPostCode, randomCity,
        randomState, country, randomPhone, randomEmail, randomPassword

    test.beforeAll(async () => {
        randomFirstName = fakerTR.person.firstName()
        randomLastName = fakerTR.person.lastName()
        dateOfBirth = '1980-12-12'
        randomAddress = fakerTR.location.streetAddress()
        randomPostCode = fakerTR.location.zipCode()
        randomCity = fakerTR.location.city()
        randomState = fakerTR.location.state()
        country = 'TR'
        randomPhone = fakerTR.string.numeric({length: 11})
        randomEmail = faker.internet.email()
        randomPassword = faker.internet.password() + 'A*1a'
    });

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/#/')
    });

    test('FakerJS Data Register Test', async ({ page }) => {
        const pm = new PageManager(page)

        // Register sayfasına gidilir
        await pm.navigateTo().openSignInPage()
        await pm.onSignInPage().clickRegisterYourAccountLink()

        // Register formu doldurulur
        await pm.onRegistrationPage().enterFirstName(randomFirstName)
        await pm.onRegistrationPage().enterLastName(randomLastName)
        await pm.onRegistrationPage().enterDateOfBirth(dateOfBirth)
        await pm.onRegistrationPage().enterAddress(randomAddress)
        await pm.onRegistrationPage().enterPostcode(randomPostCode)
        await pm.onRegistrationPage().enterCity(randomCity)
        await pm.onRegistrationPage().enterState(randomState)
        await pm.onRegistrationPage().selectCountry(country)
        await pm.onRegistrationPage().enterPhone(randomPhone)
        await pm.onRegistrationPage().enterEmailAddress(randomEmail)
        await pm.onRegistrationPage().enterPassword(randomPassword)

        // Register butonuna basılır
        await pm.onRegistrationPage().clickRegisterButton()
        await pm.onSignInPage().verifyPageHeader()
    });

    test('FakerJS Data Login Test', async ({ page }) => {
        const pm = new PageManager(page)

        // Login olunur
        await pm.navigateTo().openSignInPage()
        await pm.onSignInPage().performLogin(randomEmail, randomPassword, 'Login')

        // Login işleminin başarılı olduğu doğrulanır
        await pm.navigateTo().verifyWithProfileName(randomFirstName, randomLastName)
        await pm.onMyAccountPage().verifyPageHeader()
    });

    test('FakerJS Data Profile Test', async ({ page }) => {
        const pm = new PageManager(page)

        // Login olunur
        await pm.navigateTo().openSignInPage()
        await pm.onSignInPage().performLogin(randomEmail, randomPassword, 'Login')

        // Profile sayfasına gidilir
        await pm.onMyAccountPage().clickOnTheMenuButton('Profile')
        await pm.onProfilePage().verifyPageHeader()

        // Register dataları ile Profile sayfasındaki datalar karşılaştırılarak doğrulanır
        await pm.onProfilePage().verifyFirstNameInputValue(randomFirstName)
        await pm.onProfilePage().verifyLastNameInputValue(randomLastName)
        await pm.onProfilePage().verifyEmailInputValue(randomEmail)
        await pm.onProfilePage().verifyPhoneInputValue(randomPhone)
        await pm.onProfilePage().verifyAddressInputValue(randomAddress)
        await pm.onProfilePage().verifyPostcodeInputValue(randomPostCode)
        await pm.onProfilePage().verifyCityInputValue(randomCity)
        await pm.onProfilePage().verifyStateInputValue(randomState)
        await pm.onProfilePage().verifyCountryInputValue(country)
    });
});



