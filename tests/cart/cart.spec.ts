import { test } from '@/fixtures/baseTest';

test.beforeEach(async ({ inventoryPage }) => {
    await inventoryPage.goto();
    await inventoryPage.addItemsToCart([0]);
    await inventoryPage.goToCart();
  });
  
test('Cart displays added item', async ({ inventoryPage, cartPage }) => {
      await cartPage.expectCartItemCount(1);
  });

test('Remove item from cart and update count', async ({ inventoryPage, cartPage }) => {    
    await cartPage.removeItemByIndex(0);

    await cartPage.expectCartItemCount(0);
});