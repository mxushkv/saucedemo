import { test, expect } from '@/fixtures/baseTest';

test.beforeEach(async ({ inventoryPage }) => {
    await inventoryPage.goto();
    await inventoryPage.addItemsToCart([0]);
  });

test('Remove item from cart', async ({ inventoryPage }) => {
  await inventoryPage.removeItemFromCartByIndex(0);
});

test('Cart badge item indicator change', async ({ inventoryPage }) => {
  await inventoryPage.addItemsToCart([0]);
  await inventoryPage.expectCartBadgeCount('1');
})