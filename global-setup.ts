import { chromium } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://www.saucedemo.com');
    await page.fill('[data-test="username"]', process.env.LOGIN!);
    await page.fill('[data-test="password"]', process.env.PASSWORD!);
    await page.click('[data-test="login-button"]');
    await page.waitForURL(/inventory/);

    await page.context().storageState({ path: 'storage/auth.json' });
};