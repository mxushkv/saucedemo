import { test, expect } from '@/fixtures/baseTest';


test.describe('Login', () => { 

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

test('Successful login', async ({ page, loginPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});

test.describe('Negative login cases', () => {
  test('Empty username', async ({ loginPage }) => {
    await loginPage.login('', 'secret_sauce');
    await loginPage.assertErrorText(/^Epic sadface: Username is required$/);
  });

  test('Invalid username', async ({ loginPage }) => {
    await loginPage.login('invalid_user', 'secret_sauce');
    await loginPage.assertErrorText(/^Epic sadface: Username and password do not match any user in this service$/);
  });

  test('Empty password', async ({ loginPage }) => {
    await loginPage.login('standard_user', '');
    await loginPage.assertErrorText(/^Epic sadface: Password is required$/);
  });

  test('Invalid password', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'bad_sauce');
    await loginPage.assertErrorText(/^Epic sadface: Username and password do not match any user in this service$/);
  });
  });
});
