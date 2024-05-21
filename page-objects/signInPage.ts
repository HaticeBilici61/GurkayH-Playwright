import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class SignInPage extends HelperBase{
    constructor(page: Page) {
        super(page)
    }

    /**
     * 
     * @param email Kayıtlı bir email adresi girilmeli
     * @param password Kayıtlı kullanıcının password bilgisi girilmeli
     * @param optionText Sayfada tıklanmak istenen butonun ismi girilmeli
     */
    async performLogin(email: string, password: string, optionText: string) {
        await this.page.getByPlaceholder('Enter your E-mail').fill(email)
        await this.page.getByPlaceholder('Enter your Password').fill(password)
        await this.waitForSeconds(3)
        await this.page.getByRole('button', {name: optionText}).click()
    }

    async clickRegisterYourAccountLink() {
        await this.page.getByRole('link', {name: 'Register your account'}).click()
    }

    async verifyPageHeader() {
        await expect(this.page.getByRole('heading')).toHaveText('Login')
    }

}