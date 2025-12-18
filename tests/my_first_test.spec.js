//import {test, expect} from '@playwright/test'

const { test, expect } = require('@playwright/test');

test('My First Test', async ({ page }) => {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
    await expect(page).toHaveTitle('Google3')
    await expect(page).toHaveTitle('Google2')
})