import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class ContactUsPage extends BasePage {
    readonly path: string;
    readonly heroTitle: Locator;

    constructor(page) {
        super(page);

        this.path = this.baseUrl + '/contact-us';
        this.heroTitle = this.page.getByRole('heading', { name: 'Contact Us' });
    }

    async expectedCondition() {
        await expect(this.page).toHaveTitle(/Contact Us | FIS/);
    }

    async goToContactUsPage() {
        await this.navigate(this.path);
    }

    async assertHeroTitleIsVisible() {
        await expect(this.heroTitle).toBeVisible();
    }
}