import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { ContactUsPage } from './contactUsPage.ts';

export class HomePage extends BasePage {
  readonly path: string;
  readonly acceptCookiesButton: Locator;
  readonly economySectionLink: Locator;
  readonly economySection: Locator;
  readonly economyCardContainer: Locator;
  readonly economyCardContainerCards: Locator;
  readonly navContainer: Locator;
  readonly navContainerContactUsLink: Locator;

  constructor(page) {
    super(page);

    this.path = this.baseUrl + '/';
    this.acceptCookiesButton = this.page.locator('#onetrust-accept-btn-handler');
    this.economySectionLink = this.page.getByRole('link', { name: 'Economies Rely On Us' });
    this.economySection = this.page.locator('[data-anchor=economy]');
    this.economyCardContainer = this.economySection.locator('.card-container');
    this.economyCardContainerCards = this.economyCardContainer.locator('.animated-card');
    this.navContainer = this.page.locator('#navigation');
    this.navContainerContactUsLink = this.navContainer.getByRole('link', { name: 'Contact Us' });
 }

  async expectedCondition() {
    await expect(this.page).toHaveTitle(/Fidelity Information Services - FIS/);
  }

  async goToHomePage() {
    await this.navigate(this.path);
    await this.acceptCookiesButton.click();
  }

  async clickNavContactLink(): Promise<ContactUsPage> {
    await this.navContainerContactUsLink.click();
    return new ContactUsPage(this.page);
  }

  async clickEconomySectionLink() {
    await this.economySectionLink.click();
  }

  async clickEconomyContainerButtonWithIndex(index: number) {
    await this.economyCardContainer.locator(`[data-button-index='${index}']`).click();
  }

  async assertThatActiveCardWithIndexIsVisible(index: number) {
    await expect(this.economyCardContainer.locator(`[data-card-index='${index}']`)).toHaveClass(/active-card/);
    await expect(this.economyCardContainer.locator(`[data-card-index='${index}']`)).toBeVisible();
  }
}