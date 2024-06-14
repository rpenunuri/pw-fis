import { expect, test } from '@playwright/test';
import { HowHazelWorksPage } from '../pages/howHazelWorksPage';

test.describe('How Hazel Works Page', () => {
  test('user can check what families are saying', async ({ page }) => {
    const howHazelWorksPage = new HowHazelWorksPage(page);
    await howHazelWorksPage.goToHowHazelWorksPage();
    
    await howHazelWorksPage.clickOnFamiliesQuotesSwiperPaginationBullet(2);
    const familiesQuotesSwiperActiveSlideText = await howHazelWorksPage.getFamiliesQuotesSwiperActiveSlideText();
    expect(familiesQuotesSwiperActiveSlideText).toContain(`[The provider] was very friendly`);
  });
});
