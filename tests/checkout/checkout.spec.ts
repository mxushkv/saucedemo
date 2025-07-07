import { test } from '@/fixtures/baseTest';

test.beforeEach(async ({ inventoryPage }) => {
  await inventoryPage.goto();
});

test('Full checkout flow', async ({ inventoryPage, cartPage, checkoutPage, overviewPage }) => {
    await inventoryPage.addItemsToCart([0, 1]);
    await inventoryPage.goToCart();
    
    await cartPage.expectCartItemCount(2);
    await cartPage.goToCheckout();
  
    await checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
  
    await overviewPage.finishOrder();
    await overviewPage.expectCompleteHeaderText('Thank you for your order!');
  });

test('Checkout with empty form shows error', async ({ inventoryPage, cartPage, checkoutPage }) => {
    await inventoryPage.addItemToCartByIndex(0);
    await inventoryPage.goToCart();
  
    await cartPage.goToCheckout();
  
    await checkoutPage.continueButton.click();
    await checkoutPage.expectErrorVisible();
});