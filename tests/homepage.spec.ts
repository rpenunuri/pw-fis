import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page', () => {
  test('user can navigate to how Hazel works page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    const howHazelWorksPage = await homePage.clickForFamiliesLink();
    await howHazelWorksPage.assertThatHowHazelHelpsSwiperContainerIsVisible();
  });
});
