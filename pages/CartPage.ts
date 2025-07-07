import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly removeButtons: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.removeButtons = page.locator('[data-test="remove"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async expectCartItemCount(count: number) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async removeItemByIndex(index: number) {
    const item = this.page.locator('[data-test="inventory-item"]').nth(index);
    await item.getByRole('button', { name: /^Remove$/ }).click();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
