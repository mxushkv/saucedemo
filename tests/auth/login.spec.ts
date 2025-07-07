import { test, expect } from '@/fixtures/baseTest';
import dotenv from 'dotenv';
dotenv.config();

test.describe('Login', () => { 

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

test('Successful login', async ({ page, loginPage }) => {
    await loginPage.login(process.env.LOGIN!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/inventory/);
});

test.describe('Negative login cases', () => {
  test('Empty username', async ({ loginPage }) => {
    await loginPage.login('', process.env.PASSWORD!);
    await loginPage.assertErrorText(/^Epic sadface: Username is required$/);
  });

  test('Invalid username', async ({ loginPage }) => {
    await loginPage.login('invalid_user', process.env.PASSWORD!);
    await loginPage.assertErrorText(/^Epic sadface: Username and password do not match any user in this service$/);
  });

  test('Empty password', async ({ loginPage }) => {
    await loginPage.login(process.env.LOGIN!, '');
    await loginPage.assertErrorText(/^Epic sadface: Password is required$/);
  });

  test('Invalid password', async ({ loginPage }) => {
    await loginPage.login(process.env.LOGIN!, 'invalid_passport');
    await loginPage.assertErrorText(/^Epic sadface: Username and password do not match any user in this service$/);
  });
  });
});
