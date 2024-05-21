import { test, expect } from '@playwright/test';

test('Drag and Drop - 1', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/drag-and-drop')

    const a = page.locator('#column-a')
    const b = page.locator('#column-b')

    await a.dragTo(b)
});

test('Drag and Drop - 2', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')

    const frame = page.frameLocator('[data-src="../../demoSite/practice/droppable/photo-manager.html"]')

    const resim1 = frame.getByAltText('The peaks of High Tatras')
    const trash = frame.locator('#trash')

    await resim1.dragTo(trash)
});

test('Drag and Drop - 3', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')

    const frame = page.frameLocator('[data-src="../../demoSite/practice/droppable/photo-manager.html"]')

    const resim1 = frame.getByAltText('The peaks of High Tatras')
    const trash = frame.locator('#trash')

    await resim1.hover() // Fareyi resmin üzerine getirdik
    await page.mouse.down() // Farenin sol tuşuna tıkladık
    await trash.hover() // Fareyi Trash adlı alanın üzerine getirdik
    await page.mouse.up() // Farenin sol tuşunu bıraktık
});

test('Drag and Drop - 4', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/drag-and-drop')

    await page.dragAndDrop('#column-a', '#column-b')
    // dragAndDrop() metodu iki parametre alır.
    // Birincisi, taşınacak elementin locate'i,
    // İkincisi, elementin taşınacağı hedefin locate'i.
});
