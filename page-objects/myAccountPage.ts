import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class MyAccountPage extends HelperBase{
    constructor(page: Page) {
        super(page)
    }

    async clickOnTheMenuButton(buttonName: string) {
        await this.page.getByRole('button', {name: buttonName}).click()
    }

    async verifyPageHeader() {
        await expect(this.page.getByRole('heading')).toHaveText('My account')
    }

}