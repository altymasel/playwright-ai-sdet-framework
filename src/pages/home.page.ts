import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly mainHeading: Locator;
  readonly docsLink: Locator;

  constructor(page: Page) {
    super(page);

    this.mainHeading = page.getByRole('heading', { name: 'Playwright AI SDET Framework' });
    this.docsLink = page.getByRole('link', { name: 'Docs' });
  }

  async loadMockHomePage(): Promise<void> {
    await this.page.setContent(`
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
  }
}