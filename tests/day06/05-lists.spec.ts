import { test, expect } from '@playwright/test';

test('Lists', async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/')

    const animalList = page.getByRole('list') // ul
    const animalEagle = page.getByText('Eagle')

    const animalListText = await animalList.allTextContents()
    const animalEagleText = await animalEagle.textContent()
    console.log(animalListText)
    console.log(animalEagleText)

    // Generic Assertion
    expect(animalListText).toEqual(['\n  Falcon\n  Eagle\n  Horsefly\n  Cheetah\n'])
    expect(animalEagleText).toEqual('Eagle')

    // Locator Assertion
    await expect(animalList).toHaveText(['\n  Falcon\n  Eagle\n  Horsefly\n  Cheetah\n'])
    await expect(animalList).toHaveCount(1)
    await expect(animalEagle).toHaveText('Eagle')
});