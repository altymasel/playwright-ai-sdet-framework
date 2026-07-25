import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';

test.describe('Homepage Smoke Tests', () => {
  test('should load a simple local HTML page using Page Object Model', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.loadMockHomePage();

    await expect(page).toHaveTitle('QA Automation Framework');
    await expect(homePage.mainHeading).toBeVisible();
    await expect(homePage.docsLink).toBeVisible();
  });
});