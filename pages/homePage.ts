import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { HowHazelWorksPage } from './howHazelWorksPage';

export class HomePage extends BasePage {
  readonly path: string;
  readonly forFamiliesLink: Locator;

  constructor(page) {
    super(page);

    this.path = this.baseUrl + '/';
    this.forFamiliesLink = this.page.getByRole('link', { name: 'For families' });
 }

  async expectedCondition() {
    await expect(this.page).toHaveTitle('Hazel Health | Home');
  }

  async goToHomePage() {
    await this.navigate(this.path);
  }

  async clickForFamiliesLink(): Promise<HowHazelWorksPage> {
    await this.forFamiliesLink.click();
    return new HowHazelWorksPage(this.page);
  }
}