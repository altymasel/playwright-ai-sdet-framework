import { test, expect } from '@playwright/test';

test.describe('Homepage Smoke Tests', () => {
  test('should load a simple local HTML page', async ({ page }) => {
    await page.setContent(`
      <html>
        <head>
          <title>QA Automation Framework</title>
        </head>
        <body>
          <h1>Playwright AI SDET Framework</h1>
          <a href="/docs">Docs</a>
        </body>
      </html>
    `);

    await expect(page).toHaveTitle('QA Automation Framework');
    await expect(page.getByRole('heading', { name: 'Playwright AI SDET Framework' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  });
});