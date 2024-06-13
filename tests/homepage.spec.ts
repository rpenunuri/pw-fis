import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page', () => {
  test('user can navigate economy container', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await homePage.clickEconomySectionLink();

    const economyCards = await homePage.economyCardContainerCards.count();

    for (let i = 0; i < economyCards; i++) {
      await homePage.clickEconomyContainerButtonWithIndex(i);
      await homePage.assertThatActiveCardWithIndexIsVisible(i);
    }
  });

  test('user is redirected to Contact Us page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    
    const contactUsPage = await homePage.clickNavContactLink();
    await contactUsPage.assertHeroTitleIsVisible();
  });
});
