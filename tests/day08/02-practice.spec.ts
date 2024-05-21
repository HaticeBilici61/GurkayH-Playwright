import { test, expect } from '@playwright/test';

test('Practice', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/')

    // 1- URL'i doğrula
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/#/')

    // 2- Title'ı doğrula
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')

    // 3- Arama motorunda 'Hammer' kelimesini arat
    const search = page.getByPlaceholder('Search')
    await expect(search).toBeEnabled()
    await search.fill('Hammer')

    const searchButton = page.getByRole('button', { name: 'Search' })
    await expect(searchButton).toBeVisible()
    await expect(searchButton).toBeEnabled()
    await searchButton.click()

    // 4- "Searched for:" başlığının görünürlüğünü doğrula
    await expect(page.getByText('Searched for:')).toBeVisible()

    // 5- Ürün listesindeki ürünlerin adedini doğrula
    const productList = page.getByTestId('search_completed').locator('a')
    await expect(productList).toHaveCount(7)

    // 6- Ürünlerden ilkine tıkla
    const productName1 = await productList.first().getByRole('heading').textContent()
    await productList.first().click()

    // 7- Ürün sayfası doğrulamalarını yap
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/#/product/01HWTVWB3G3QR4R21N2RGRTSC9')
    const productName2 = await page.getByTestId('product-name').textContent()
    expect(productName1).toContain(productName2)
});
