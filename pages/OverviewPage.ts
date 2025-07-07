import { Page, Locator, expect } from '@playwright/test';

export class OverviewPage {
  readonly page: Page;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async expectCompleteHeaderText(text: string) {
    await expect(this.completeHeader).toHaveText(text);
  } 
}