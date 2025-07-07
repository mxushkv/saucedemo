import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    readonly cartBadgeCount: Locator;

    constructor (page: Page) {
        this.page = page;
        this.cartBadge = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadgeCount = page.locator('[data-test="shopping-cart-badge"]');
    }

    async goto() {
        await this.page.goto('/inventory.html');
    }

    async addItemToCartByIndex(index: number) {
        const item = this.page.locator('[data-test="inventory-item"]').nth(index);
        await item.getByRole('button', { name: /^Add to cart$/ }).click();
    }

    async removeItemFromCartByIndex(index: number) {
        const item = this.page.locator('[data-test="inventory-item"]').nth(index);
        await item.getByRole('button', { name: /^Remove$/ }).click();
    }

    async addItemsToCart(indices: number[]) {
        for (const index of indices) {
            await this.addItemToCartByIndex(index);
        }
    }
    async expectCartBadgeCount(count: string) {
        await expect(this.cartBadgeCount).toHaveText(count)
    }

    async goToCart () {
        await this.cartBadge.click();
    }
}