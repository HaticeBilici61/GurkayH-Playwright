import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class ProfilePage extends HelperBase{
    constructor(page: Page) {
        super(page)
    }

    async verifyPageHeader() {
        await expect(this.page.getByRole('heading', {name: 'Profile'})).toHaveText('Profile')
    }

    async verifyFirstNameInputValue(firstName: string) {
        await expect(this.page.getByTestId('first-name')).toHaveValue(firstName)
    }

    async verifyLastNameInputValue(lastName: string) {
        await expect(this.page.getByTestId('last-name')).toHaveValue(lastName)
    }

    async verifyEmailInputValue(email: string) {
        await expect(this.page.getByTestId('email')).toHaveValue(email)
    }

    async verifyPhoneInputValue(phone: string) {
        await expect(this.page.getByTestId('phone')).toHaveValue(phone)
    }

    async verifyAddressInputValue(address: string) {
        await expect(this.page.getByTestId('address')).toHaveValue(address)
    }

    async verifyPostcodeInputValue(postcode: string) {
        await expect(this.page.getByTestId('postcode')).toHaveValue(postcode)
    }

    async verifyCityInputValue(city: string) {
        await expect(this.page.getByTestId('city')).toHaveValue(city)
    }

    async verifyStateInputValue(state: string) {
        await expect(this.page.getByTestId('state')).toHaveValue(state)
    }

    async verifyCountryInputValue(country: string) {
        await expect(this.page.getByTestId('country')).toHaveValue(country)
    }



}