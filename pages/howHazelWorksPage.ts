import { Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HowHazelWorksPage extends BasePage {
    readonly path: string;
    readonly howHazelHelpsSwiperContainer: Locator;
    readonly familiesQuotesSwiperContainer: Locator;
    readonly familiesQuotesSwiperPaginationBullets: Locator;
    readonly familiesQuotesSwiperActiveSlide: Locator;

    constructor(page) {
        super(page);

        this.path = this.baseUrl + '/families/how-hazel-works';
        this.howHazelHelpsSwiperContainer = this.page.locator('[swiper=how-hazel-helps]').first();
        this.familiesQuotesSwiperContainer = this.page.locator('[swiper=quotes]');
        this.familiesQuotesSwiperActiveSlide = this.familiesQuotesSwiperContainer.locator('.swiper-slide-active');
        this.familiesQuotesSwiperPaginationBullets = this.familiesQuotesSwiperContainer.locator('.swiper-pagination-bullets');
    }

    async expectedCondition() {
        await expect(this.page).toHaveTitle('Hazel Health | How Hazel Works');
    }

    async goToHowHazelWorksPage() {
        await this.navigate(this.path);
    }

    async assertThatHowHazelHelpsSwiperContainerIsVisible() {
        await expect(this.howHazelHelpsSwiperContainer).toBeVisible();
    }

    async getFamiliesQuotesSwiperActiveSlideText() {
        return await this.familiesQuotesSwiperActiveSlide.locator('h4').textContent();
    }

    async clickOnFamiliesQuotesSwiperPaginationBullet(index: number) {
        const bullet = this.familiesQuotesSwiperPaginationBullets.locator(`[aria-label="Go to slide ${index}"]`);
        await bullet.click();
    }
}