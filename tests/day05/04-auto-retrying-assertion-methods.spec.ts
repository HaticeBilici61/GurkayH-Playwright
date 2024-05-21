import { test, expect } from '@playwright/test';

test('Auto-retrying assertion methods', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice')

    // toBeChecked() - not.toBeChecked() -- Checkbox'larda kullanılır
    const bmwCheckBox = page.locator('#bmwcheck')
    await expect(bmwCheckBox).not.toBeChecked()
    await bmwCheckBox.check()
    await expect(bmwCheckBox).toBeChecked()

    // toBeEnabled() - toBeDisabled() -- Kullanıcının element ile etkileşime geçip geçemeyeceğini doğrular
    const enableDisableInput = page.locator('#enabled-example-input')
    await expect(enableDisableInput).toBeEnabled()
    await page.getByRole('button', {name: 'Disable'}).click()
    await expect(enableDisableInput).toBeDisabled()

    // toBeEditable() - not.toBeEditable() -- Kullanıcının element üzerinde değişiklik yapıp yapamayacağını doğrular
    await expect(enableDisableInput).not.toBeEditable()
    await page.getByRole('button', {name: 'Enable'}).click()
    await expect(enableDisableInput).toBeEditable()

    // toBeEmpty() - not.toBeEmpty() -- Bir elementin içinin boş olup olmadığını doğrular
    await expect(enableDisableInput).toBeEmpty()
    await enableDisableInput.fill('Test')
    await expect(enableDisableInput).not.toBeEmpty()

    // toBeVisible() - toBeHidden() -- Bir elementin sayfada görünür olup olmadığını doğrular
    const visibleHiddenInput = page.getByPlaceholder('Hide/Show Example')
    await expect(visibleHiddenInput).toBeVisible()
    await page.getByRole('button', { name: 'Hide' }).click()
    await expect(visibleHiddenInput).toBeHidden()

    // toContainText() - not.toContainText() -- Bir elementin bir metni içerip içermediğini doğrular
    const switchTitle = page.locator('#alert-example-div')
    await expect(switchTitle).toContainText('Switch To Alert')
    await expect(switchTitle).not.toContainText('Test')

    // toHaveAttribute() - not.toHaveAttribute() -- Bir elementin belirtilen attribute ve value'ya sahip olup olmadığını doğrular
    await expect(bmwCheckBox).toHaveAttribute('name')
    await expect(bmwCheckBox).toHaveAttribute('name', 'cars')
    await expect(bmwCheckBox).not.toHaveAttribute('name', 'apple')
    await expect(bmwCheckBox).not.toHaveAttribute('class')

    // toHaveClass() - not.toHaveClass() -- Bir elementin belirtilen value'ya sahip bir class attribute'üne sahip olup olmadığını doğrular
    const openWindowButton = page.getByRole('button', { name: 'Open Window' })
    await expect(openWindowButton).toHaveClass('btn-style class1')
    await expect(openWindowButton).not.toHaveClass('Test')

    // toHaveCount() - not.toHaveCount() -- Bir elementin bir listedeki adedini doğrular
    const radioButtonList = page.getByRole('radio')
    await expect(radioButtonList).toHaveCount(3)
    await expect(radioButtonList).not.toHaveCount(5)

    // toHaveId() - not.toHaveId() -- Bir elementin belirtilen value'ya sahip bir ID attribute'üne sahip olup olmadığını doğrular
    await expect(openWindowButton).toHaveId('openwindow')
    await expect(openWindowButton).not.toHaveId('Test')

    // toHaveText() - not.toHaveText() -- Bir elementin belirtilen text ile birebir eşleşip eşleşmediğini doğrular
    const pageTitle = page.getByRole('heading')
    await expect(pageTitle).toHaveText('Practice Page')
    await expect(pageTitle).not.toHaveText('Test')

    // toHaveValue() - not.toHaveValue() -- Input alanındaki değeri doğrular
    await expect(enableDisableInput).toHaveValue('Test')
    await expect(enableDisableInput).not.toHaveValue('Apple')

    // toHaveTitle() - not.toHaveTitle() -- Ziyaret edilen sayfanın başlığını doğrular
    await expect(page).toHaveTitle('Practice Page')
    await expect(page).not.toHaveTitle('Test')

    // toHaveURL() - not.toHaveURL() -- Ziyaret edilen sayfanın URL'ini doğrular
    await expect(page).toHaveURL('https://www.letskodeit.com/practice')
    await expect(page).not.toHaveURL('https://www.letskodeit.com/')
});
