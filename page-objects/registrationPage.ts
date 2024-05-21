import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class RegistrationPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async enterFirstName(firstName: string) {
        await this.page.getByLabel('First name').fill(firstName)
    }

    async enterLastName(lastName: string) {
        await this.page.getByLabel('Last name').fill(lastName)
    }

    async enterDateOfBirth(dateOfBirth: string) {
        await this.page.getByLabel('Date of birth').fill(dateOfBirth)
    }

    async enterAddress(address: string) {
        await this.page.getByLabel('Address', { exact: true }).fill(address)
    }

    async enterPostcode(postcode: string) {
        await this.page.getByLabel('Postcode').fill(postcode)
    }

    async enterCity(city: string) {
        await this.page.getByLabel('City').fill(city)
    }

    async enterState(state: string) {
        await this.page.getByLabel('State').fill(state)
    }

    async selectCountry(country: string) {
        await this.page.getByLabel('Country').selectOption(country)
    }

    async enterPhone(phone: string) {
        await this.page.getByLabel('Phone').fill(phone)
    }

    async enterEmailAddress(email: string) {
        await this.page.getByLabel('E-mail address').fill(email)
    }

    async enterPassword(password: string) {
        await this.page.getByLabel('Password').fill(password)
    }

    async clickRegisterButton() {
        await this.page.getByRole('button', { name: 'Register' }).click()
    }

}